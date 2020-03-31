let form = document.querySelector('form');


let passwordInput = form.password;
let passwordError = form.querySelector("#passwordError");

let ListadoErrores = form.querySelector("#Errores");


let errores = {};



//validar contraseña obligatoria, al menos 8 caracteres y debe contener mayúsculas, un número y un caracter especial
//Minimo 8 caracteres, Maximo 10, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco y Al menos 1 caracter especial

passwordInput.addEventListener('blur', function(e){
    
    let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,10}$/);

    console.log(event.target.value);
    if (regex.test(event.target.value)){
        console.log(regex.test(event.target.value));
        passwordInput.style.border ='1px solid #dddddd';
        delete errores[passwordInput.name];
    }else{
        passwordInput.style.border ='1px solid red';
        errores[passwordInput.name] = "El campo contraseña debe contener al menos 8 caracteres, mayúsculas, algún número, sin espacios en blancos y algún caracter especial";
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
    }       
});