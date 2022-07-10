console.log('salut')



const move1 = document.querySelector('.move1');
const move2 = document.querySelector('.move2');
const move3 = document.querySelector('.move3');
const move4 = document.querySelector('.move4');
const  img = document.querySelector('.mage')
const input = document.querySelector('#vol')
const Numb  = document.querySelector('.Numb')
const Allbutton = document.querySelectorAll('.button')
const paraRange = document.querySelector('.paraRange')
let i = 0
move1.addEventListener('click',(eo)=>{
    i=i+90
    console.log(i)
   img.style.transform= `rotate(${i}deg)`;
   
   console.log(i)
})

move2.addEventListener('click',(eo)=>{
i=i-90;
console.log(i)
img.style.transform= `rotate(${i}deg)`;
})


let d = 190
move3.addEventListener('click',(eo)=>{
    
    console.log(d)
    img.style.transform= `rotateY(${d}deg)`;
    
    d=d-190
    console.log(d)
    if(d==-190){
        console.log(true)
        d=190
    }
    
})
s=190
move4.addEventListener('click',(eo)=>{
    console.log(s)
    img.style.transform= `rotateX(${s}deg)`;
    s=s-190
    console.log(s)
    if(s==-190){
        console.log(true)
        s=190}
})



const myfile = document.getElementById('myfile')
const btns   = document.querySelector('.btns2');
const mage   = document.querySelector('.mage')
console.log(mage)
console.log(btns)

function loadeng(){
    let file = myfile.files[0];
    if(!file){return false}
    console.log(file)
    mage.src =URL.createObjectURL(file);
  console.log ( mage.src)
  mage.addEventListener('load',(eo)=>{
      console.log(true)
      
   console.log (document.querySelector('.container').classList.remove('disabled'))
  })
}

myfile.addEventListener('change',loadeng)
btns.addEventListener('click',(eo)=>{

    myfile.click()
});


input.addEventListener('input',(eo)=>{
    console.log(input.value)
    Numb.innerText=`${input.value}%`
mage.style.filter = `brightness(${100}%) saturate(${100}%) invert(${0}%) grayscale(${0})`
})
   
const remove=()=>{
  
    Allbutton.forEach(elementActive => {
        elementActive.classList.remove('active')
    });

}

Allbutton.forEach(elementclick => {

    elementclick.addEventListener('click',(eo)=>{
        remove()
        elementclick.classList.add('active')
        paraRange.innerText=elementclick.innerText
        


    })
});
