const themeInput = document.getElementById("theme");
const taskInput = document.getElementById("task");
const lengthInput = document.getElementById("length");

const templateBtn = document.getElementById("templateBtn")

templateBtn.addEventListener("click",()=>{
    themeInput.value = "AIと大学教育";
    taskInput.value = "AI導入の影響を述べよ";
    lengthInput.value = "1200";
})