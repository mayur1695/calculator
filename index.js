let screen=document.getElementById('screen');
buttons=document.querySelector('button');
for (items of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is',buttonText)

     })
}