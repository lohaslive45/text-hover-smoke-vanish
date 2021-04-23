//!======將句子分割成單字======
//!---標題 h2---
const text = document.querySelector(".txt")

text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")
//!---內文 P---
const file = document.querySelector(".file")

file.innerHTML = file.textContent.replace(/\S/g,"<span>$&</span>")

//!======滑鼠 hover滑過時，添加 active字樣======
const letters = document.querySelectorAll("span")

for(let i=0; i<letters.length; i++){
    letters[i].addEventListener("mouseover",function(){
        letters[i].classList.add("active")
    })
}
