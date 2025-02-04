document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    if (username === '' || password === '') {
      errorMessage.textContent = 'Please fill in both fields.';
    } else {
      if (username === 'olovess' && password === '9846111') {
      
        window.location.href = 'indexxx.html'; 
      } else {
        errorMessage.textContent = 'Invalid username or password.';
      }
    }
  });
  