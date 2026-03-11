import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Define public routes for Clerk
const isPublicRoute = createRouteMatcher([
    "/",
    "/about",
    "/rooms(.*)",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/auth/login(.*)",
    "/auth/register(.*)",
    "/api/admin/login",
    "/admin/login"
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    const { nextUrl } = req;
    
    // 1. Admin Security Logic (Custom JWT based)
    if (isAdminRoute(req) && nextUrl.pathname !== "/admin/login") {
        const token = req.cookies.get("admin_token")?.value;
        
        if (token) {
            try {
                if (process.env.JWT_SECRET) {
                    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
                    await jwtVerify(token, secret);
                    // Valid admin token, allow request
                    return NextResponse.next();
                }
            } catch (e) {
                // Invalid token
                return NextResponse.redirect(new URL("/admin/login", nextUrl));
            }
        } else {
            // No token, redirect to login
            return NextResponse.redirect(new URL("/admin/login", nextUrl));
        }
    }

    // 2. Customer Auth Logic (Clerk based)
    if (!isPublicRoute(req)) {
        await auth.protect();
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
