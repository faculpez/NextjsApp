
async function getData() {
    const res = await fetch('https://reqres.in/api/users');
    const json = await res.json();
    return json.data;
    
}
export const userData = await getData()

