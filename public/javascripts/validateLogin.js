let form = document.querySelector('form');


let emailInput = form.email;
let passwordInput = form.password;

let ListadoErrores = form.querySelector("#Errores");

let errores = {};


ListadoErrores.innerHTML ='';

//validar emial obligatorio
emailInput.addEventListener('blur', function(e){
    if(validator.isEmpty(emailInput.value)|| (!validator.isEmail(emailInput.value))){
        emailInput.style.border ='1px solid red';
        errores[emailInput.name] = "no es un email válido";
    }else{
        emailInput.style.border ='1px solid #dddddd';       
        delete errores[emailInput.name];
    }
});

//validar contraseña obligatoria
passwordInput.addEventListener('blur', function(e){
    if(validator.isEmpty(passwordInput.value)){
        passwordInput.style.border ='1px solid red';
        errores[passwordInput.name] = "campo obligatorio";
    }else{
        passwordInput.style.border ='1px solid #dddddd';
        delete errores[passwordInput.name];
    }
});


//antes de hacer el submit, chequea que no hayan quedado campos con error
form.addEventListener('submit', function (event) {
	if (Object.keys(errores).length > 0) {
		event.preventDefault();
        for (let error in errores) {
            if (errores.hasOwnProperty(error)) {
                ListadoErrores.innerHTML += `${errores[error]}` + '<br>';
            }
        }

        if (validator.isEmpty(emailInput.value)){
            ListadoErrores.innerHTML += 'el campo email es obligatorio' + '<br>';
        }
        if (validator.isEmpty(passwordInput.value)){
            ListadoErrores.innerHTML += 'el campo password es obligatorio' + '<br>';
        }

    }
    
        
});
