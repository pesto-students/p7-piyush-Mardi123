const fib = (n) =>({
	[Symbol.iterator]:()=>{
		i =1;
		old = 0;
		new_val = 0;
		return {next:()=>{
			if(i++<=n){
				[old, new_val] = [new_val,(old+new_val)||1];
				return {value:old,done:false};
			}
			return {done:true}
		}
	}}
});

for (const x of fib(8)){
	console.log(x);
}