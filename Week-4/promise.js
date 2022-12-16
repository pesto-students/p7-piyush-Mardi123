//with promise
const get_number = function(){
  pr = new Promise((res,rej) => {
    const randomnumber = parseInt(Math.random()*100,10);
    if (randomnumber %5 ===0){
      rej(randomnumber);
    }
    res(randomnumber);
  });
return pr;}

x = get_number()
x.then((display)=>{
  console.log("resolved with below number");
  console.log(display)}).
  catch((display)=>{
    console.log("rejected with below number");
    console.log(display)});
	
//with custom promise

const CustomPromiseStates ={
	'PENDING':"PENDING",
	'FULLFILLED':"FULLFILLED",
	'REJECTED':"REJECTED"
	};
	
class CustomPromise{
	
	constructor(fn){
		this.CustomPromiseStates = CustomPromiseStates.PENDING;
		this.resolver = this.resolver.bind(this);
		this.rejector = this.rejector.bind(this);
		this.thenfn = null;
		this.catchfn = null;
		fn(this.resolver,this.rejector);
		
	}
	resolver(resolvedData){
		if(this.CustomPromiseStates == CustomPromiseStates.PENDING){
			this.thenfn && this.thenfn(resolvedData);
		}
		this.CustomPromiseStates = CustomPromiseStates.FULLFILLED;
	}
	rejector(resolvedData){
		if(this.CustomPromiseStates == CustomPromiseStates.PENDING){
			this.catchfn && this.catchfn(resolvedData);
		}
		this.CustomPromiseStates = CustomPromiseStates.REJECTED;
	}
	then(thenfn){
		this.thenfn=thenfn;
		return this;
	}
	catch(catchfn){
		this.catchfn = catchfn;
		return this;
	}
}
const get_number = function(){
  pr = new CustomPromise((res,rej) => {
    const randomnumber = parseInt(Math.random()*100,10);
    setTimeout(function() {
    if (randomnumber %5 ===0){
      console.log('here');
      rej(randomnumber);
    }
    res(randomnumber);
  },10)});
return pr;}

x = get_number()
console.log(x);
x.then((display)=>{
  console.log("resolved with below number");
  console.log(display)}).
  catch((display)=>{
    console.log("rejected with below number");
    console.log(display)});