const input=document.querySelector('input');
const ul=document.querySelector('ul');


input.onkeypress = (e) => {
    if(e.key==="Enter"){
        
        let li=document.createElement('li');
        let div=document.createElement('div');
        let inputbox=document.createElement('input');
        inputbox.type='checkbox';
        let span=document.createElement('span');
        let icon=document.createElement('i');
        icon.className="material-icons btn-delete";
        icon.textContent="delete_outline";
        li.appendChild(div);
        div.appendChild(inputbox);
        div.appendChild(span);
        li.appendChild(icon);
        ul.appendChild(li);
        span.textContent=input.value;

        input.value="";
        

    }

}