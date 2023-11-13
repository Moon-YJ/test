const section = document.querySelector('section');
const btns = section.querySelectorAll('ul.btns li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		btns.forEach((el) => {
			el.classList.remove('on');
		});
		e.currentTarget.classList.add('on');
	});
});
