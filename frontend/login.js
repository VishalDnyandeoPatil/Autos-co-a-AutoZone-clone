// 1st form catch 
let signup = document.querySelector("#signUp");
// 2nd form catch 
let signin = document.querySelector("#signIn");

let signupBtn=document.querySelector("#signUpPage")
signupBtn.addEventListener("click",function(event){
    event.preventDefault();
    console.log("btn work")
    signin.style.display="none";
    signup.style.display="block";
});

// signup form functionality 
signup.addEventListener("submit",function (event){
    event.preventDefault();
    let payload={
        name: signup.name.value,
        email:signup.email.value ,
        gender: signup.gender.value,
        password: signup.password.value,
        age: signup.age.value,
        city: signup.city.value,
    }
    console.log(payload)
    
    
    // if(password!=passwordchk){
    //     alert("Password do not match!")
    // }
    // else{
    //     localStorage.setItem("user",user);
    //     localStorage.setItem("username",username);
    //     localStorage.setItem("password",password);
    //     // alert("Sign Up Successful!");
    //     // reset input field
    //     signup.reset();
    //     signin.style.display="block";
    //     signup.style.display="none";
    // }
    fetch("http://localhost:8300/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    
      }).then((res)=>{
        return  res.json()

      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
}); 
// signIn form functionality
signin.addEventListener("submit",(event)=>{
    event.preventDefault();
    let payload = {
        email:signin.email1.value,
        password:signin.password1.value
    }
    console.log(payload)
    fetch("http://localhost:8300/users/login",{  
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    
      }).then((res)=>{
        return  res.json()

      }).then((res)=>{
        console.log(res)
        // localStorage.setItem("token",res.token)
      }).catch((err)=>{
        console.log(err)
      })
    
});

// signup.addEventListener("submit",(e)=>{
//     e.preventDefault()
//      console.log("hello")
//      let payload={
//        name:signup.name.value,
//        email:signup.email.value,
//        gender:signup.gender.value,
//        password:signup.password.value,
//        age: signup.age.value, 
//        city: signup.city.value
//      }
//      console.log(payload)


//      fetch("localhost:8300/users/register",{
//        method:"POST",
//        headers:{
//            "Content-Type":"application/json"
//        },
//        body:JSON.stringify(payload)
   
//      }).then((res)=>{
//        return  res.json()

//      }).then((res)=>{
//        console.log(res)
//      }).catch((err)=>{
//        console.log(err)
//      })
  
     
// })