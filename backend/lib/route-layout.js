import { NextResponse } from 'next/server';
import { API_VERSION, API_VERSION_HEADER } from '@/lib/api-version';

/**
 * API route layout wrapper.
 *
 * Runs before each route handler to provide:
 * - Standard request/response logs
 * - Unified error handling
 * - Shared response headers
 */
export function withApiLayout(methodName, handler) {
  return async (request, context) => {
    const startedAt = Date.now();
    const url = request.nextUrl?.pathname ?? request.url;

    console.info(`[API:${methodName}] -> ${url}`);

    try {
      const response = await handler(request, context);
      response.headers.set(API_VERSION_HEADER, API_VERSION);
      response.headers.set('x-response-time', `${Date.now() - startedAt}ms`);

      console.info(`[API:${methodName}] <- ${url} (${response.status})`);
      return response;
    } catch (error) {
      console.error(`[API:${methodName}] !! ${url}`, error);

      return NextResponse.json(
        {
          success: false,
          message: 'Unexpected server error.'
        },
        {
          status: 500,
          headers: {
            [API_VERSION_HEADER]: API_VERSION,
            'x-response-time': `${Date.now() - startedAt}ms`
          }
        }
      );
    }
  };
}
