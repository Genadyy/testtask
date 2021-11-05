const underscore = document.querySelectorAll("li");

const doUnderscore = (arr) => {
   
    for(let i = 0; i < arr.length; i++) {
       
        arr[i].addEventListener("mouseover", () => {
            arr.forEach(item => item.classList.remove("active"));
            arr[i].classList.add('active');
        })
    }
}


doUnderscore(underscore);
