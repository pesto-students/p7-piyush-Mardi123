function bind_ex(){
    console.log(this.firstName)
  }
  
  obj = {
    firstName: "Rahul"
  }
  
  a = bind_ex();
  b = bind_ex.bind(obj);
  b();
  console.log(a==b); //creates new function on every bind
  console.log(a===b);//creates new function on every bind
  
  function call_ex(name, lname){
    console.log(name);
    console.log(this.firstName);
    console.log(lname);
    }
  z = call_ex.call(obj, "mardi","teja");//just calls same function does not create new function and args are passed seprately
  console.log(z)
  
  x = call_ex.apply(obj, ["rahul", "mardi"]);//just calls same function does not create new function args are passed in single parameter where unpacking is done automatically
  console.log(x);