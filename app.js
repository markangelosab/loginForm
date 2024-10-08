const loginForm = document.getElementById('LoginForm');
const validUsername = 'markangelosab@gmail.com';
const validPassword = '12345678';

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    try {
        if (username === '' || password === '') {
            throw new Error('Both fields are required.');
        }
        if (username !== validUsername || password !== validPassword) {
            throw new Error('Invalid username or password.');
        }

        errorMessage.textContent = '';
        alert('Login successful');

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.color = 'red';
    }
});
