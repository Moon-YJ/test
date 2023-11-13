const box = document.querySelector('section.box');
const btns = box.querySelectorAll('ul.btns li');

// 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (
			e.currentTarget.classList.contains('on') &&
			getComputedStyle(box).backgroundColor !== 'rgb(128, 128, 128)'
		)
			return;
		activation(btns, idx);
		changeBg(btns, idx);
	});
});

// 활성화함수
const activation = (arr, idx) => {
	arr.forEach((el) => {
		el.classList.remove('on');
	});
	arr[idx].classList.add('on');
};

// 박스 색상 변경함수
const changeBg = (arr, idx) => {
	const txt = arr[idx].innerText;
	box.style.backgroundColor = txt;
};
