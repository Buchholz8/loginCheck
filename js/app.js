

function login_process(details){
    let username = document.querySelector(`#username`)
let username_val = username[`value`]
let password = document.querySelector(`#password`)
let password_val = password[`value`]

    axios.request({
        url: `https://reqres.in/api/login`,
        methode: `POST`,
        data: {
            username: username_val,
            password: password_val,
        }
    }).then(sucess).catch(failure)
}
function sucess(response){
    Cookies.set(`tocken` , response[`data`][`token`])
    window[`location`] = 
}
function failure(response){
    let response = document.getElementById(`response_div`)
    response[`innerHTML`] = `Username or Password in incorrect`
}