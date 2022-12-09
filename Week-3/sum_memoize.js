function memoize(fn){
	const cache = new Map();
	return function(...args){
	const key = args.toString();
	if (cache.has(key)){
		console.log("in memory");
		return cache.get(key);
	}
	console.log('not in memory');
	cache.set(key, fn(...args));
	return cache.get(key);
	};
}
function add(a,b){
	return a+b;
}

let mem_add = memoize(add);
a = mem_add(30, 40);
b = mem_add(30, 40);
