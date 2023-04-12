function sucess(response) {
    Cookies.set(`token`, response[`data`][`token`])
    window[`location`] = `/pages/home.html`
}
function failure(response) {
    let reply_div = document.getElementById(`response_div`)
    reply_div[`innerHTML`] = `Username or Password is incorrect`
}
function login_process(details) {
    let email = document.querySelector(`#email`)
    let email_val = email[`value`]
    let password = document.querySelector(`#password`)
    let password_val = password[`value`]

    axios.request({
        url: `https://reqres.in/api/login`,
        methode: `POST`,
        data: {
            email: email_val,
            password: password_val,
        }
    }).then(sucess).catch(failure)
}
let login = document.getElementById(`cab`)
login.addEventListener(`click` , login_process)