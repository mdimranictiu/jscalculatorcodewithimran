
let senddata=document.getElementById('equal');
senddata.addEventListener("click",function(){
    let data=document.getElementById('display');
    console.log(data.value);
    if(data.value==="undefined"){
        alert("Hi, Your Input is not valid, so we reload this page");
        setTimeout(function(){
            window.location.reload();
         }, 1000);
    }
})
let subscribe=document.getElementById('sub');
subscribe.addEventListener('click',(e)=>{
    e.preventDefault();
    window.open("https://www.youtube.com/@codewithimran5404??sub_confirmation=1","_blank")
})


