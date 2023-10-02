let menu_close = document.getElementById('menu-close');
let ul = document.getElementsByTagName("ul")[0];
let menu_btn = document.getElementById("menu-btn");
console.log(menu_btn)
// console.log(ul);


menu_btn.addEventListener("click",(menu)=>{

    if(ul.style.width= "0px"){
        ul.style.width = "290px";      

    }else{
        rrr = ul.style.width = "290px"

    }
})

menu_close.addEventListener("click",()=>{
    
    if(ul.style.width ="290px"){
        let rrr = ul.style.width = "0px"
        console.log(rrr)
    }
    else{
        let rr =ul.style.width = "0px";
        console.log(rr)
    }
    
}

)

