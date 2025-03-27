var istatus = document.querySelector("h5")
var btn= document.querySelector('#add')
var check = 0

btn.addEventListener("click" , function (){
    if(check ==0){
        istatus.innerHTML = "Friends"
        btn.innerHTML = "Remove Friends"
        btn.style.color = "red"
        istatus.style.color = 'Green'
        console.log("hue hue hue hue ");
        check =1
    } else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = 'Red'
        btn.innerHTML = "Add Friends"
        btn.style.color = "White"
        console.log("hue hue hue hue ");
        check =0
    }


    
})


