let bag=[];
let lipsticksProduct=[] ;
let url= "http://localhost:8300/posts/";
// let url= "https://calm-cyan-raven-vest.cyclic.app/posts";
// let url= "http://calm-cyan-raven-vest.cyclic.app/posts";
fetch(url)
.then((res)=> res.json())
.then((data)=>{
    bag=data;
    console.log (data)
    displayProduct(data);
})

function displayProduct(data){
    document.querySelector("#products").innerHTML="";
    data.Post.forEach((elem)=>{
        let div= document.createElement("div");

        let productImg= document.createElement("img");
        productImg.setAttribute("src", elem.img)

        let productTitle= document.createElement("h2");
        productTitle.innerText=elem.title;

        // let productType= document.createElement("p");
        // productType.innerText=elem.product_type;
        
        let productPrice=document.createElement("h3");
        productPrice.innerText="$ "+elem.price;

        let productRating=document.createElement("p");
        productRating.innerText= "Rating:- "+elem.rating;

        div.addEventListener("click" ,function(){
            lipsticksProduct.push(elem);
            localStorage.setItem("productDetail", JSON.stringify(lipsticksProduct));
        })
        div.append(productImg, productTitle,  productRating, productPrice);

        document.querySelector("#products").append(div);
    })
}
