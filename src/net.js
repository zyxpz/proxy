const ajax = options => {
	const xhr = new XMLHttpRequest();
  
	let {
		url,
		data,
		success,
		error,
		method,
	} = options;
  
	method = method.toUpperCase();
  
	if (!url) {
		console.error('请求地址不存在');
	}
  

};