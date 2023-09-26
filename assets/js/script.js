let errorMessage = document.querySelector('.error-message')

const accessCredentials = {
    login: "Usuário",
    password: "Senha"
}

const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', event => {
    event.preventDefault()

    const inputLogin = document.getElementById('login')
    const inputPassword = document.getElementById('password')

    if (inputLogin.value === accessCredentials.login && 
        inputPassword.value === accessCredentials.password) {
            window.location.href = 'https://giuliosousa.github.io/simple-todo-list'
        } else {
            errorMessage.classList.add('error-message--active')
        }
})