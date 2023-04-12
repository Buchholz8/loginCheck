let token = Cookies.get(`token`);

if(token === undefined) {
    window[`location`] = `/index.html`
} else {
    let log_out = document.getElementById(`logout`)
    log_out.insertAdjacentHTML(`beforeend` , `<button id="logout_button"> Log Out</button>`)
    let log_out_button = document.getElementById(`logout_button`)
    log_out_button.addEventListener(`click` , logout)


function logout(details){
    Cookies.remove(`token`)
} 
axios.request({
    url: `https://reqres.in/api/unknown`
}).then(user_logged_in).catch(user_not_loggedin)

function user_logged_in(response){
let information = document.getElementById(`info_div`)
for(let i = 0 ; i < response.data.length ; i++){
information.insertAdjacentHTML(`beforeend` , `
<p>${response.data.data[i].color}</p>
<p>${response.data.data[i].year}</p>
<p>${response.data.data[i].name}</p>`)}
}}



function user_not_loggedin(response){
    let information = document.getElementById(`info_div`)
    information.insertAdjacentHTML(`beforeend` , `<p> Error , something went wrong</p>`)
}
