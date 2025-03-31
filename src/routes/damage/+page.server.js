export async function load({cookies }) {
    const token = cookies.get('token');
    try {
        let res = await fetch('https://api.spacetraders.io/v2/my/contracts', options);
        if (res.ok) {
            const data = await res.json();
            console.log("Contracts:", data);
            return { data };
        } else {
            throw new Error(`Failed to fetch contracts: ${res.statusText}`);
        }
    } catch (error) {
        console.error("Error fetching contracts:", error);
        // Handle network or other errors
    }
};