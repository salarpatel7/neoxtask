document.getElementById('menu-icon').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
  });
  



var readMoreBtn = document.getElementById('read-more-btn');
var fullDescription = document.querySelector('.full-description');
var shortDescription = document.querySelector('.short-description');

readMoreBtn.addEventListener('click', function() {
  if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
    fullDescription.style.display = 'block';
    shortDescription.style.display = 'none';
    readMoreBtn.textContent = 'Read Less';
  } else {
    fullDescription.style.display = 'none';
    shortDescription.style.display = 'block';
    readMoreBtn.textContent = 'Read More';
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  
  alert('Form submitted!'); 
});


