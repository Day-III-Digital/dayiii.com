import { base } from "$app/paths";
import { redirect } from "@sveltejs/kit";
import { APP_REDIRECTS } from "../redirects";

export async function load({ url }) {
    const pathname = url.pathname.slice(base.length);
    if (APP_REDIRECTS.hasOwnProperty(pathname)) {
        return redirect(301, base + (APP_REDIRECTS as any)[pathname]);
    }
}

export const prerender = true;