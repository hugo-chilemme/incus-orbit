import { NextResponse } from 'next/server';
import { API_VERSION, API_VERSION_HEADER } from '@/lib/api-version';

export function middleware(request) {
  const requestedVersion = request.headers.get(API_VERSION_HEADER);

  if (requestedVersion && requestedVersion !== API_VERSION) {
    return NextResponse.json(
      {
        success: false,
        message: 'Unsupported API version.',
        supportedVersion: API_VERSION
      },
      {
        status: 400,
        headers: {
          [API_VERSION_HEADER]: API_VERSION
        }
      }
    );
  }

  const response = NextResponse.next();
  response.headers.set(API_VERSION_HEADER, API_VERSION);
  return response;
}

export const config = {
  matcher: ['/api/:path*']
};
