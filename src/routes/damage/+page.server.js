export const actions = {
    report: async ({ cookies, request }) => {
        const data = await request.formData();
        const time = data.get('time');
        const details = data.get('details');
        const location = data.get('location');
        
    }
}

export async function load ({cookies}){
    let data = [
        { damage: 'that is damaged and this is not', location: '321 Paper St'},
        { damage: 'This and that is damaged', location: '123 Paper St'},
        { damage: 'that is damaged and this is not', location: '321 Paper St'},
        { damage: 'This and that is damaged', location: '123 Paper St', time: '17/5/25 12:15'},
        { damage: 'that is damaged and this is not', location: '321 Paper St',time: '17/5/25 13:05'}
      ];
      
      const jsonData = JSON.stringify(data);
      cookies.set('data', jsonData, { path: '/' });

      return {
        // Return the parsed data from the cookie so it can be used in the Svelte component
        props: {
          cookieData: data
        }
      };
}