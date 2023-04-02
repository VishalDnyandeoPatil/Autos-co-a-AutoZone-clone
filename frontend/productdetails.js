let details= JSON.parse(localStorage.getItem("productDetail"));
let cartProduct=  JSON.parse(localStorage.getItem("cart")) || [] ;
console.log (details);
displayDetails(details)

function displayDetails( data){
    document.querySelector("#image").innerHTML="";
    document.querySelector("#details").innerHTML="";
    document.querySelector("#discription").innerHTML="";
    
    for (let i=0;i<data.length;i++){
        //    this id for img
        let div1= document.createElement("div");
        //    this id for productdetails
        let div2= document.createElement("div");
        //    this id for productdiscription
        let div3= document.createElement("div");
        
        //    this id for img
        let productImg= document.createElement("img");
        productImg.setAttribute("src", data[i].img)
        
        //    this id for productdetails
        let productTitle= document.createElement("h2");
        productTitle.innerText=data[i].title;
        
        let productRating= document.createElement("h5");
        productRating.innerText= "Rating:- "+data[i].rating;
        
        let productPrice= document.createElement("h3");
        productPrice.innerText="$ "+ data[i].price;
        
        let addToCart= document.createElement("button");
        addToCart.innerText= "Add To Cart";
        addToCart.addEventListener("click", function(){
            cartProduct.push(data[i]);
            localStorage.setItem("cart",JSON.stringify(cartProduct))
        })
        
        //    this id for productdiscription
        let productCategory= document.createElement("h4");
        productCategory.innerText=data[i].category;
        
        let productdiscription = document.createElement("h4");
        productdiscription.innerText=data[i].discription;
        
        div1.append(productImg);
        div2.append(productTitle, productRating, productPrice, addToCart);
        div3.append( productdiscription);

        document.querySelector("#image").append(div1);
        document.querySelector("#details").append(div2);
        document.querySelector("#discription").append(div3);
      }
}