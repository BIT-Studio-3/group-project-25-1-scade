let damageRecords = [
    { damage: 'This and that is damaged', location: '123 Paper St', time: '12:15' },
    { damage: 'That is damaged and this is not', location: '321 Paper St', time: '13:05' }
  ];


export async function load({ }) {
  
    return { damageRecords };
}

export const actions = {
    addDamage: async ({ request }) => {
        const data = await request.formData();
        const damage = data.get('damage');
        const location = data.get('location');
        const time = data.get('time');

        // Check for duplicates
        const exists = damageRecords.find(
            (entry) =>
                entry.damage === damage &&
                entry.location === location &&
                entry.time === time
        );

        if (exists) {
            return { success: false, error: 'Duplicate entry' };
        }

        const newEntry = { damage, location, time };
        damageRecords.push(newEntry);

        return { success: true, newEntry };
    }
};