import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import express from 'express';

const HTTP_METHODS = new Set(['get', 'post', 'put', 'patch', 'delete', 'options', 'head']);

function toExpressSegment(segment) {
  const dynamic = segment.match(/^\[(.+)\]$/);
  return dynamic ? `:${dynamic[1]}` : segment;
}

function joinUrl(base, segment) {
  if (!segment) return base;
  return `${base}/${toExpressSegment(segment)}`.replace(/\/+/g, '/');
}

function parseMethodFromFile(fileName) {
  if (!fileName.endsWith('.js')) return null;

  const nameWithoutExt = fileName.slice(0, -3).toLowerCase();
  if (HTTP_METHODS.has(nameWithoutExt)) return nameWithoutExt;

  const legacyMatch = fileName.match(/^route\.(\w+)\.js$/i);
  if (!legacyMatch) return null;

  const legacyMethod = legacyMatch[1].toLowerCase();
  return HTTP_METHODS.has(legacyMethod) ? legacyMethod : null;
}

async function importModule(filePath) {
  const moduleUrl = pathToFileURL(filePath).href;
  const imported = await import(moduleUrl);
  return imported.default || imported.router || imported;
}

export async function loadRoutes(app, baseDir, baseUrl = '/api') {
  const router = express.Router();

  async function scan(dir, urlPath, inheritedMiddlewares = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const names = entries.map((entry) => entry.name);

    let activeMiddlewares = [...inheritedMiddlewares];

    if (names.includes('layout.js')) {
      const layoutPath = path.join(dir, 'layout.js');
      const layoutMiddleware = await importModule(layoutPath);
      activeMiddlewares = [...activeMiddlewares, layoutMiddleware];
      router.use(urlPath || '/', ...activeMiddlewares);
    }

    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const method = parseMethodFromFile(entry.name);
      if (!method) continue;

      const routePath = path.join(dir, entry.name);
      const methodHandler = await importModule(routePath);

      if (typeof methodHandler !== 'function') {
        throw new TypeError(`Expected function export in ${routePath} for ${method.toUpperCase()}.`);
      }

      router[method](urlPath || '/', ...activeMiddlewares, methodHandler);
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const nextDir = path.join(dir, entry.name);
      const nextPath = joinUrl(urlPath, entry.name);
      await scan(nextDir, nextPath, activeMiddlewares);
    }
  }

  await scan(baseDir, '');
  app.use(baseUrl, router);
}
