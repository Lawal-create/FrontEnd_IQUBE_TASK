
let texts=["I have a question about your service","I have a problem with the API","I have an issue with the product that needs to be resolves urgently","I have a minor problem","My inquiry isn't amongst the ones mentioned above"];

//loads the values into the dropdown menu as a page
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

//sets the values 
function setValue(index) {
    let i=parseInt(index)
    let x=document.getElementById("dropdown_text")
    x.innerHTML=texts[i]
    
}
//shows and hides the dropdown item when clicked
function showDropdown() {
    let x=document.getElementById("dropdown")
    if(x.style.display==="none"){
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}
