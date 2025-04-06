export async function load({ fetch }) {

    let res = await fetch('http://api.geonet.org.nz/quake?MMI=-1');
    if (res.ok) {
        res = await res.json();
        let data = res;
        return { data };
    } else {
        throw new Error(`Failed to fetch disaster data: ${res.statusText}`);
    }
};