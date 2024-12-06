const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");
form.onsubmit = (e)=>{
    e_preventDefault(); //preventing form from submitting
}

continueBtn.onclick = ()=>{
    //let's start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200) {
                let data = xhr.response;
                if(data == "success") {

                }else{
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    //we hace to send the form data through ajax to php
    let formData = new FormData(form); //Creating new formData object
    xhr.send(formData); //sending the form data to php
}