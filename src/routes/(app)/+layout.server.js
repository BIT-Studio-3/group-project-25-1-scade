import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
    const user = cookies.get("token");
    
    if (!user) {
        throw redirect(303, "/login");
    }
}
