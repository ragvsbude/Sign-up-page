function storeInputValue(event, inputName) {
  if (document.getElementById('remember').checked) {
    localStorage.setItem(inputName, event.target.value);
  } else {
    localStorage.removeItem(inputName);
  }
}

// To retrieve the stored values when the page loads
window.onload = function() {
  document.getElementById('email').value = localStorage.getItem('email') || '';
  document.getElementById('password').value = localStorage.getItem('password') || '';
}
