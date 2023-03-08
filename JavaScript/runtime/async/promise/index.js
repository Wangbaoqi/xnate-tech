const p = new Promise((resolve, reject) => {
  resolve(2);
});

console.log(p, 'promise');

const p1 = p.then((result) => {
	console.log(result);
	return new Promise((resolve, reject) => { 
		resolve('pp')
	})
});

p1.then((res) => {
	p1.then((result) => { 
		console.log('c', result);
	})

  console.log('a', res);
});

p1.then((res) => { 
	console.log('b', res);
})


// 独立Promise上的回调顺序无法预测

const p2 = new Promise((resolve, reject) => { 
	resolve('p2');
})

const p3 = new Promise((resolve, reject) => { 
	resolve(p2);
})

const p4 = new Promise((resolve, reject) => { 
	resolve('p4');
})

p3.then((res) => { 
	console.log(res);
})

p4.then((res) => {
	console.log(res);
})