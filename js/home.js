let token = Cookies.get(`token`)
if(token === undefined){
    window[`location`] = `/index.html`
} else {
    let log_out = document.getElementById(`logout`)
    log_out.insertAdjacentHTML(`beforeend` , `<button id="logout_button"> Log Out</button>`)
    let log_out_button = document.getElementById(`logout_button`)
    log_out_button.addEventListener(`click` , logout)
}
function logout(details){
    Cookies.remove(`token`)
}
function login_true(response){
document.body.insertAdjacentHTML(`beforeend` , `
<div>
<p>${response[`data`]}
`)
}
function login_fail(response){

}