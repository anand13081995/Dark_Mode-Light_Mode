const tgbtn = document.querySelector("#checkbox");
const body = document.body;
console.log(tgbtn);
console.log(body);

tgbtn.addEventListener('change', () => {
    if(tgbtn.checked){
        body.classList.add("darkMode")
        console.log("dark");
    }else{
        body.classList.remove("darkMode")
        console.log("light");
    }
});