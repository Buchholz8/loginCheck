//i redefine the token cookie
let token = Cookies.get(`token`);
//i make a check to determine if the cookie exists or not
if(token === undefined) {
    window[`location`] = `/index.html`
} 
//i write an esle statement that will make the log out button
else {
    let log_out = document.getElementById(`logout`)
    log_out.insertAdjacentHTML(`beforeend` , `<button id="logout_button"> Log Out</button>`)
    let log_out_button = document.getElementById(`logout_button`)
    log_out_button.addEventListener(`click` , logout)
//i have the function delete the cookie
function logout(details){
    Cookies.remove(`token`)
} 
//i derfine the log out button by giving it the click and the functions name
let logout_button = document.getElementById(`logout`)
logout_button.addEventListener(`click` , logout);
// i make the final axios request with the then / catch functions
   axios.request({
    url: `https://reqres.in/api/unknown`
}).then(user_logged_in).catch(user_not_loggedin)
//the user login function will diliver all this information when they load th page
function user_logged_in(response){
let information = document.getElementById(`info_div`)
for(let i = 0 ; i < response.data.data.length ; i++){
information.insertAdjacentHTML(`beforeend` , `
<p style="background-color: ${response.data.data[i].color};  width: 50px;  height: 50px;"></p>
<p>${response.data.data[i].year}</p>
<p>${response.data.data[i].name}</p>`)}
}}
//and the fail function to deliver them a message
function user_not_loggedin(response){
    let information = document.getElementById(`info_div`)
    information.insertAdjacentHTML(`beforeend` , `<p> Error , something went wrong</p>`)
}
