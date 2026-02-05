let addTask=document.querySelector("#add")
let input=document.querySelector("input");
let ol=document.querySelector("ol");
addTask.addEventListener("click",function(dets){
    //   console.dir(dets);
    let li=document.createElement("li");
    
    li.innerText=input.value;
    ol.append(li);
    input.value="";
});

let deleteTask=document.querySelector("deleting");
deleteTask.addEventListener("click",function(dets){
   if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})