let productform = document.querySelector("#addProduct")
console.log("hii")
productform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let payload={
      title:productform.title.value ,
      img:productform.img.value ,
      discription: productform.discription.value ,
      rating:productform.rating.value ,
      price:productform.price.value  
    }
    console.log(payload);

    fetch("http://localhost:8300/posts/add",{
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
})