let form = document.querySelector('form');


let passwordInput = form.password;
let repeatPasswordInput = form.repeatPassword;

let ListadoErrores = form.querySelector("#Errores");


let errores = {};



//validar contraseña obligatoria, al menos 8 caracteres y debe contener mayúsculas, un número y un caracter especial
//Minimo 8 caracteres, Maximo 10, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco y Al menos 1 caracter especial

passwordInput.addEventListener('click', function(e){
    passwordInput.classList.remove('invalid-input');
    passwordInput.classList.add('valid-input');
        
});

passwordInput.addEventListener('blur', function(e){
    
    let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$#!%*?&])([A-Za-z\d$@$#!%*?&]|[^ ]){8,10}$/);
    if (regex.test(event.target.value)){
       passwordInput.classList.remove('invalid-input');
       passwordInput.classList.add('valid-input');
        delete errores[passwordInput.name];
    }else{
        passwordInput.classList.remove('valid-input');
        passwordInput.classList.add('invalid-input');
        errores[passwordInput.name] = "El campo contraseña debe contener al menos 8 caracteres, mayúsculas, <br>algún número, sin espacios en blancos y algún caracter especial";
    }
});

repeatPasswordInput.addEventListener('click', function(e){
    repeatPasswordInput.classList.remove('invalid-input');
    repeatPasswordInput.classList.add('valid-input');
        
});

repeatPasswordInput.addEventListener('blur', function(e){
    if (passwordInput.value == event.target.value){
        repeatPasswordInput.classList.remove('invalid-input');
        repeatPasswordInput.classList.add('valid-input');
        delete errores[repeatPasswordInput.name];
    }else{
        repeatPasswordInput.classList.remove('valid-input');
        repeatPasswordInput.classList.add('invalid-input');
        errores[repeatPasswordInput.name] = "El campo contraseña no coincide con repetir contraseña.";
    }
});


//antes de hacer el submit, chequea que no hayan quedado campos con error
form.addEventListener('submit', function (event) {
    ListadoErrores.innerHTML ='';
	if (Object.keys(errores).length > 0) {
		event.preventDefault();
        for (let error in errores) {
            if (errores.hasOwnProperty(error)) {
                ListadoErrores.innerHTML += `${errores[error]}` + '<br>';
            }
        }
    }else{
        if (validator.isEmpty(passwordInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'El campo contraseña es obligatorio.' + '<br>';
        }
        if (validator.isEmpty(repeatPasswordInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'El repetir contraseña es obligatorio.' + '<br>';
        }
    }       
});