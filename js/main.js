const box = document.querySelector('section.box');
const btns = box.querySelectorAll('ul.btns li');
// 첫화면에 배경 색상 적용
const text = btns[0].innerText;
box.style.backgroundColor = text;

// 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.currentTarget.classList.contains('on')) return;
		activation(btns, idx);
		changeBg(btns, idx);
	});
});

// 활성화함수
const activation = (arr, idx) => {
	console.log('activation');
	arr.forEach((el) => {
		el.classList.remove('on');
	});
	arr[idx].classList.add('on');
};

// 박스 색상 변경함수
const changeBg = (arr, idx) => {
	console.log('changeBg');
	const txt = arr[idx].innerText;
	box.style.backgroundColor = txt;
};
