// src/routes/damage/+server.js
let damageRecords = [
    { damage: 'This and that is damaged', location: '123 Paper St', time: '12:15' },
    { damage: 'That is damaged and this is not', location: '321 Paper St', time: '13:05' }
  ];
  
  export async function GET() {
    return new Response(JSON.stringify(damageRecords), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  export async function POST({ request }) {
    const data = await request.json();
    const { damage, location, time } = data;
  
    if (!damage || !location || !time) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }
  
    // Check for duplicates
    const exists = damageRecords.find(
      (entry) =>
        entry.damage === damage &&
        entry.location === location &&
        entry.time === time
    );
  
    if (exists) {
      return new Response(JSON.stringify({ message: 'Duplicate entry' }), { status: 409 });
    }
  
    const newEntry = { damage, location, time };
    damageRecords.push(newEntry);
  
    return new Response(JSON.stringify(newEntry), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  