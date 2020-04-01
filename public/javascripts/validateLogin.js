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
