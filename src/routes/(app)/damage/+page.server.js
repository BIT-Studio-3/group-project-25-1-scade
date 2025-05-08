export const actions = {
  report: async ({ cookies, request }) => {
      const data = await request.formData();
      const time = data.get('time');
      const details = data.get('details');
      const location = data.get('location');
  }
}

export async function load ({}){
  


return {data : [
  { damage: 'This and that is damaged', location: '123 Paper St'},
  { damage: 'that is damaged and this is not', location: '321 Paper St'},
  { damage: 'This and that is damaged', location: '123 Paper St'},
  { damage: 'that is damaged and this is not', location: '321 Paper St'},
  { damage: 'This and that is damaged', location: '123 Paper St'},
  { damage: 'that is damaged and this is not', location: '321 Paper St'},
  { damage: 'This and that is damaged', location: '123 Paper St', time: '17/5/25 12:15'},
  { damage: 'that is damaged and this is not', location: '321 Paper St',time: '17/5/25 13:05'}
]
  }
}