import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
    const user = cookies.get("token");

    const statement = database.prepare('SELECT * FROM users WHERE token = ?');
    const users = statement.get(token);
    
    if (!user) {
        throw redirect(303, "/login");
    }
    if (!users) {
        throw redirect(303, "/login");
    }
}
