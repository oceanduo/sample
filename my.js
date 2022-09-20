function popUp(a) {
    var popup = document.querySelector("#flexcode");
    var animat =document.querySelector('.codeimg');
document.addEventListener('click',()=>{
    popup.classList.add("open")
    popup.classList.add("open")
    animat.src='./img/'+ a +'.jpg'
    // console.log(animat.src)
    // console.log(animat)
})

}



function moveBack() {
    var popup = document.getElementById("flexcode");
    document.addEventListener('click',()=>{
        popup.classList.remove("open");
    })

}


//wrong code ( we need put action in eventlistener)
// function moveBack() {
//     var popup = document.getElementById("flexcode");

//     popup.classList.remove("open");
// }

var superheroes = require('superheroes');



var myhero = superheroes.random();
//=> 'Spider-Ham'



  console.log(myhero);




  var t = document.getElementById("superhero").textContent;
  var y = document.createTextNode("This just got added");

  t.appendChild(y);
