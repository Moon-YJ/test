const box = document.querySelector('section.box');
const btns = box.querySelectorAll('ul.btns li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		btns.forEach((el) => {
			el.classList.remove('on');
		});
		e.currentTarget.classList.add('on');
		const txt = btns[idx].innerText;
		box.style.backgroundColor = txt;
	});
});
