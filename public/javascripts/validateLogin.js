let form = document.querySelector('form');


let emailInput = form.email;
let emailError = form.querySelector("#emailError");

let passwordInput = form.password;
let passwordError = form.querySelector("#passwordError");

let errores = {};


//validar emial obligatorio
emailInput.addEventListener('blur', function(e){
    if(validator.isEmpty(emailInput.value)|| (!validator.isEmail(emailInput.value))){
        emailInput.style.border ='1px solid red';
        emailError.innerHTML = "no es un email válido";
        errores[emailInput.name] = true;
        emailInput.focus();
    }else{
        emailInput.style.border ='1px solid #dddddd';       
        emailError.innerHTML= "";
        delete errores[emailInput.name];
    }
});

//validar contraseña obligatoria
passwordInput.addEventListener('blur', function(e){
    if(validator.isEmpty(passwordInput.value)){
        passwordInput.style.border ='1px solid red';
        passwordError.innerHTML = "campo obligatorio";
        errores[passwordInput.name] = true;
        passwordInput.focus();
    }else{
        passwordInput.style.border ='1px solid #dddddd';
        passwordError.innerHTML = "";
        delete errores[passwordInput.name];
    }
});

//antes de hacer el submit, chequea que no hayan quedado campos con error
form.addEventListener('submit', function (event) {
	if (Object.keys(errores).length > 0) {
		event.preventDefault();
		alert('Hay campos con errores'); 
	}
});