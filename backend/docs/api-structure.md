# Cahier des charges — Auto Routing CVODEX

## Objectif

- 0 déclaration manuelle des routes.
- Chaque dossier devient un segment d'URL.
- Chaque fichier HTTP (`get.js`, `post.js`, etc.) est chargé automatiquement.
- Support versioning (`/api/v1`, `/api/v2`).
- Support `layout.js` hiérarchiques (middleware parent/enfant).

## Mapping

- `src/api/v1` -> `/api/v1`
- `src/api/v1/auth/register/post.js` -> `POST /api/v1/auth/register`
- `src/api/v1/users/[id]/get.js` -> `GET /api/v1/users/:id`

## Layout middleware (équivalent Next.js)

Si `layout.js` existe dans un dossier:

- il s'applique aux routes du dossier,
- et à tous les sous-dossiers (récursivement).

Exemple automatique:

- `src/api/v1/layout.js` applique middleware sur `/api/v1/*`
- `src/api/v1/auth/layout.js` ajoute middleware sur `/api/v1/auth/*`

## Fichiers route supportés

1. `<method>.js`
   - méthodes HTTP supportées: `get`, `post`, `put`, `patch`, `delete`, `options`, `head`.
   - export par défaut: `(req, res) => {}`.
2. `route.<method>.js` (legacy, optionnel)
   - conservé pour compatibilité,
   - recommandé de migrer vers `<method>.js`.

## Loader technique

`src/core/autoLoader.js`:

- scan récursif du dossier `src/api`
- conversion dynamique `[id]` -> `:id`
- composition middleware héritée (`layout.js` parent + enfant)
- montage automatique des routes dans Express via `app.use('/api', router)`

## Bootstrapping

`src/app.js` initialise Express et lance `loadRoutes()`.

`src/server.js` démarre le serveur sur `PORT` (par défaut 3000).
