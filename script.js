//your JS code here. If required.
  const searchContainer = document.querySelector('.search');
  const searchInput = document.querySelector('.input');
  const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener(('click'), () => {
	searchContainer.classList.add('active');
	searchInput.focus();
});


