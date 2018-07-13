import './test-index.less';
import $ from 'anima-yocto';

console.log(1);

document.querySelector('.app').addEventListener('click', () => {
	alert(1);

	$.ajax({
		url: 'api/mock',
		data: {},
		success: d => {
			console.log(d); 
		},
		error: e => {
			console.log(e);
		}
	});
});