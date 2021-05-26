let texts=["I have a question about your service","I have a problem with the API","I have an issue with the product that needs to be resolves urgently","I have a minor problem","My inquiry isn't amongst the ones mentioned above"];


window.onload= function(){
    let x=document.getElementById('dropdown')

    let ul=document.createElement('ul');
    for(let i=0; i<texts.length;i+=1){
        let li=document.createElement('li');
        li.textContent=texts[i];
        li.addEventListener('click',function(){
            setValue(i);
        });

        ul.appendChild(li);
    }
    x.appendChild(ul);
}



function setValue(index) {
    let i=parseInt(index)
    let x=document.getElementById("dropdown_text")
    x.innerHTML=texts[i]
    
}

function showDropdown() {
    let x=document.getElementById("dropdown")
    if(x.style.display==="none"){
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}
