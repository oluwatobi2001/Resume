
window.addEventListener('DOMContentLoaded', (e) => {
    getVisitorCount();

})

const myApiLink = 'https://tobistic.azurewebsites.net/api/HttpTrigger1?code=Mex5kq8PG28YQo0NHYRCgXLoxVpaa66Kv1oM_BxKnCIuAzFuXOEhXw%3D%3D';

const getVisitorCount =() => {
    let count = 0;
fetch(myApiLink , {
    mode: 'cors'
}).then(response => {
    return response.json() }
).then(res => {
const count = res;
document.getElementById('visitorCount').innerHTML = count;

})
return count;
}