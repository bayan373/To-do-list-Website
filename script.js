const upload= document.querySelector("button");
const container=document.getElementById("container");
const input=document.querySelector("input");
const form=document.querySelector("form");
const task=document.querySelector(".task");




form.addEventListener("submit", (eo) => {//لمن يكون البوتن داخل الفورم يفضل استخدام سبميت (عشان يعمل انتر ويرسل)
 
    eo.preventDefault();//الديفولت انو يعمل رفرش للصفحه كل مااضغطزز لمن منعتو انضاف المحتوى
    
         const newt=`
    
        <div class="task">
        <span class="icon-star  icon "> </span>
          <p lang="ar" class="task-text">${input.value}</p>
          <div>
            <span class="icon-trash  icon"> </span>
            <span class="icon-angry2  icon"> </span>
        </div>
    
     </div>;
    
     `
    
     container.innerHTML += newt;
     input.value="";
});

container.addEventListener("click",(eo) => {

    switch (eo.target.className) {

            case "icon-trash  icon":
             eo.target.parentElement.parentElement.remove();
            break;

            case "icon-angry2  icon":
                eo.target.classList.add("dn");
                const heart= `<span class="icon-heart"> </span>`;
                      
                eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("line");
        
                eo.target.parentElement.innerHTML+=heart;
             break;
             
             case "icon-heart":
                eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("line");
        
                eo.target.classList.add("dn");
                const angry= `<span class="icon-angry2  icon">`;

                eo.target.parentElement.innerHTML+=angry;
             break; 

            case "icon-star  icon ":
                eo.target.classList.add("orange");
                container.prepend(eo.target.parentElement);
            break;

            case "icon-star icon orange":
                eo.target.classList.remove("orange");
            break;

     }
    
});