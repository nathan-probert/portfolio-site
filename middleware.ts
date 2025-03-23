import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const hostname = req.headers.get('host');

    // Check if the host starts with 'smartscore.'
    if (hostname?.startsWith('smartscore.')) {
        const url = req.nextUrl.clone();

        // Only modify the pathname if it's the root path ("/")
        if (url.pathname === '/') {
            // If at the root, rewrite to serve from the smartscore directory
            url.pathname = '/smartscore';  // Rewrite to /smartscore
        } else {
            // For all other routes, strip the "/smartscore" part from the path to resolve assets correctly
            url.pathname = url.pathname.replace(/^\/smartscore/, '');
        }

        return NextResponse.rewrite(url);
    }

    // If it's not the smartscore subdomain, continue with the request as usual
    return NextResponse.next();
}
