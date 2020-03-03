const input=document.querySelector('input');
const ul=document.querySelector('ul');
const tasks=document.getElementById('tasksLeft');
const pendents=<HTMLInputElement>document.getElementById('pendingButton');
const completed=<HTMLInputElement>document.getElementById('completedButton');
const yesButton=<HTMLInputElement>document.getElementById('yesButton');
const noButton=<HTMLInputElement>document.getElementById('noButton');
const all=<HTMLInputElement>document.getElementById('allButton');
let taskCounter=0;



//Añadir tarea
let takeOnTask=()=>{
    taskCounter++;
    tasks.textContent="Quedan "+taskCounter+" tareas";
}
let takeOffTask=()=>{
    taskCounter--;
    tasks.textContent="Quedan "+taskCounter+" tareas";
}

input.onkeypress = (e) => {
    if(e.key==="Enter"){
        
        let li=document.createElement('li');
        let div=document.createElement('div');
        var inputbox=document.createElement('input');
        inputbox.type='checkbox';
        inputbox.id='no';
        let span=document.createElement('span');
        var icon=document.createElement('i');
        icon.className="material-icons btn-delete";
        icon.textContent="delete_outline";
        li.appendChild(div);
        div.appendChild(inputbox);
        div.appendChild(span);
        li.appendChild(icon);
        ul.appendChild(li);
        span.textContent=input.value;

       
        takeOnTask();

        span.onclick=(e)=>{
            let input=document.createElement('input');
            input.focus();
            input.type='text';
            let icon=document.createElement('i');
             icon.className="material-icons";
            icon.textContent="done";
            let li=span.parentElement.parentElement
            li.appendChild(input);
            li.appendChild(icon);
            li.classList.add("updating");

            icon.onclick=(e)=>{
                span.textContent=input.value;
                li.classList.remove("updating");
                li.removeChild(input);
                li.removeChild(icon);
            }
        }
        
        icon.onclick=(e)=>{
        //document.getElementById("tasktoEliminate").textContent=li.textContent;
        let parent=icon.parentElement;
        document.getElementById('tasktoEliminate').textContent=input.textContent;
        document.getElementById('cont').style.display='block';
        yesButton.onclick=(e)=>{
            document.getElementById('cont').style.display='none';
            takeOffTask();
            parent.remove();
        }
        
    }
     }
     inputbox.onclick = (e)=>{
     if(inputbox.checked===false){
        takeOnTask();
        inputbox.id="no";
     }else{
         takeOffTask();
         inputbox.id="yes";
     }
   }
  
input.value="";
   

   
}
noButton.onclick=(e)=>{
    document.getElementById('cont').style.display='none';
}


pendents.onclick=function(){
   pendents.disabled=true;
   completed.disabled=false;
   all.disabled=false;
    
    for(let i=0;i<ul.children.length;i++){
      let state= ul.children[i].children[0].children[0].getAttribute('id');
      if(state==='yes'){
          ul.children[i].classList.add("updating");
      }else{
        ul.children[i].classList.remove("updating");
      }
      
    }
}
completed.onclick=(e)=>{
    pendents.disabled=false;
    completed.disabled=true;
    all.disabled=false;
    for(let i=0;i<ul.children.length;i++){
      let state= ul.children[i].children[0].children[0].getAttribute('id');
      if(state==='no'){
          ul.children[i].classList.add("updating");
      }else{
        ul.children[i].classList.remove("updating");
      }
      
    }
}
all.onclick=(e)=>{
    pendents.disabled=false;
   completed.disabled=false;
   all.disabled=true;
    
    for(let i=0;i<ul.children.length;i++){
      let state= ul.children[i].children[0].children[0].getAttribute('id');
      ul.children[i].classList.remove("updating");
      
    }
}







