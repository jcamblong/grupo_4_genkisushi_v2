let form = document.querySelector('form');


let emailInput = form.email;
let passwordInput = form.password;

let ListadoErrores = form.querySelector("#Errores");

let errores = {};


//validar email 
emailInput.addEventListener('blur', function(e){
    if(validator.isEmail(emailInput.value)){
        //emailInput.classList.remove('invalid-input');
        //emailInput.classList.add('valid-input');
        emailInput.style.border ='1px solid #dddddd';
        delete errores[emailInput.name];
    }else{
        //emailInput.classList.remove('valid-input');
        //emailInput.classList.add('invalid-input');
        emailInput.style.border ='1px solid red';
        errores[emailInput.name] = "No es un email válido.";       
    }
});

passwordInput.addEventListener('click', function(e){
    passwordInput.classList.remove('invalid-input');
    passwordInput.classList.add('valid-input');        
});

//validar contraseña válida
passwordInput.addEventListener('blur', function(e){
    
    let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$#!%*?&])([A-Za-z\d$@$#!%*?&]|[^ ]){8,10}$/);
    if (regex.test(event.target.value)){
       //passwordInput.classList.remove('invalid-input');
       //passwordInput.classList.add('valid-input');
       passwordInput.style.border ='1px solid #dddddd';
       delete errores[passwordInput.name];
    }else{
       // passwordInput.classList.remove('valid-input');
       // passwordInput.classList.add('invalid-input');
        passwordInput.style.border ='1px solid red';
        errores[passwordInput.name] = "El campo contraseña debe contener al menos 8 caracteres, mayúsculas, <br>algún número, sin espacios en blancos y algún caracter especial";
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
        if (validator.isEmpty(emailInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'El campo email es obligatorio.' + '<br>';
        }
        if (validator.isEmpty(passwordInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'El campo password es obligatorio.' + '<br>';
        }
  
    }       
});
