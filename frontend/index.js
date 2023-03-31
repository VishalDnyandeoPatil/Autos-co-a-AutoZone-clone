let previous= document.querySelector("#previous");
let next = document.querySelector("#next");

let arr=["./FlexMove/_fy23p08-superhero-battery-2-d.jpg",
         "./FlexMove/_fy23p08-superhero-chevron-techron-d.jpg",
         "./FlexMove/_fy23p08-superhero-taxtime-d.jpg",
         ];

let i=0;

next.addEventListener("click", function(){
    i++;
    if (i>arr.length-1){
        i=0
    }
    document.querySelector("#slideimg").src=arr[i];
})

previous.addEventListener("click", function(){
    i--;
    if (i<0){
        i=arr.length-1
    }
    document.querySelector("#slideimg").src=arr[i];
})

function autoslide(){
    document.querySelector("#slideimg").src= arr[i];
    if (i<arr.length-1){
        i++;
    }
    else{
        i=0;
    }
}
setInterval(autoslide, 4000);