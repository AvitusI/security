import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";

export async function middleware(request: NextRequest) {
    // const res = NextResponse.next();
    const { supabase, response } = getSupabaseReqResClient({ request });
    const session = await supabase.auth.getSession();
    const requestedPath = request.nextUrl.pathname;
    const sessionUser = session.data?.session?.user;

    if (
        requestedPath.startsWith("/home") ||
        requestedPath.startsWith("/admin") ||
        requestedPath.startsWith("/settings")
    ) {
        if (!sessionUser) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    } else if (
        requestedPath.startsWith("/") || requestedPath.startsWith("/login") ||
        requestedPath.startsWith("/signup")
    ) {
        if (sessionUser) {
            return NextResponse.redirect(new URL("/home", request.url));
        }
    }

    return response.value;
}

export const config = {
    matcher: ["/((?!.*\\.).*)"],
};
