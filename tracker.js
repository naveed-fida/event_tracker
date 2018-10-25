document.addEventListener('DOMContentLoaded', function(event) {
  document.addEventListener('click', function(event) {
    if (event.target === 'A') {
      console.log('click');
    }
  })
});