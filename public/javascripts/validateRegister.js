let form = document.querySelector('form');

let nameInput = form.name;
let lastNameInput = form.lastName;
let emailInput = form.email;
let passwordInput = form.password;
let ListadoErrores = form.querySelector("#Errores");

let errores = {};


nameInput.addEventListener('click', function(e){
    nameInput.classList.remove('invalid-input');
    nameInput.classList.add('valid-input');     
});


//validar nombre y apellido obligatorio y al menos 2 caracteres
//nombre
nameInput.addEventListener('blur', function(e){
    if (validator.isLength(nameInput.value,{min:0, max:1})){
        nameInput.classList.remove('valid-input');
        nameInput.classList.add('invalid-input');
        errores[nameInput.name] = "el campo nombre debe contener al menos 2 caracteres";
    }else{
        nameInput.classList.remove('invalid-input');
        nameInput.classList.add('valid-input');
        delete errores[nameInput.name];
    }
});

lastNameInput.addEventListener('click', function(e){
    lastNameInput.classList.remove('invalid-input');
    lastNameInput.classList.add('valid-input');     
});

//apellido
lastNameInput.addEventListener('blur', function(e){
    if (validator.isLength(lastNameInput.value,{min:0, max:1})){
        lastNameInput.classList.remove('valid-input');
        lastNameInput.classList.add('invalid-input');        
        errores[lastNameInput.name] = "El campo apellido debe contener al menos 2 caracteres";
    }else{
        lastNameInput.classList.remove('invalid-input');
        lastNameInput.classList.add('valid-input');
        delete errores[lastNameInput.name];
    }
});

emailInput.addEventListener('click', function(e){
    emailInput.classList.remove('invalid-input');
    emailInput.classList.add('valid-input');     
});

//validar email obligatorio, ser válido y no debe existir dentro de los ya registrados
emailInput.addEventListener('blur', function(e){
    if(validator.isEmpty(emailInput.value)|| (!validator.isEmail(emailInput.value))){
        emailInput.classList.remove('valid-input');
        emailInput.classList.add('invalid-input');    
        errores[emailInput.name] = "El email no es válido.";
    }else{
        delete errores[emailInput.name];
          
        let url = `/api/checks/${e.target.value}`
        
        fetch(url)
        .then(response => response.json())
        .then(response => {
            if(response.meta.status == 302){
                emailInput.classList.remove('valid-input');
                emailInput.classList.add('invalid-input');    
                errores[emailInput.name] = "el email ya existe";
            }else{
                emailInput.classList.remove('invalid-input');
                emailInput.classList.add('valid-input');    
                delete errores[emailInput.name];
            }
        });
    }
});

//validar contraseña obligatoria, al menos 8 caracteres y debe contener mayúsculas, un número y un caracter especial
//Minimo 8 caracteres, Maximo 10, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco y Al menos 1 caracter especial

passwordInput.addEventListener('click', function(e){
    passwordInput.classList.remove('invalid-input');
    passwordInput.classList.add('valid-input');     
});

passwordInput.addEventListener('blur', function(e){
    
    let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$#!%*?&])([A-Za-z\d$@$#!%*?&]|[^ ]){8,10}$/);

    //console.log(event.target.value);
    if (regex.test(event.target.value)){
        passwordInput.classList.remove('invalid-input');
        passwordInput.classList.add('valid-input');    
        delete errores[passwordInput.name];
    }else{
        passwordInput.classList.remove('valid-input');
        passwordInput.classList.add('invalid-input');   
        errores[passwordInput.name] = "El campo password debe contener al menos 8 caracteres, mayúsculas, <br>algún número, sin espacios en blancos y algún caracter especial";
    }
});

//validar que la imagen sea jpg, jpeg,png, gif
function openImage() {         
    let input = this;
    let file = input.files[0];
    let fileName = input.value;
    let maxSize = 1048576; //bytes
    let extensions = new RegExp(/.jpg|.jpeg|.gif|.png/i); //Extensiones válidas

    let error = {
        state: false,
        msg: ''
    };

    if (this.files && file) {

        for (let i = fileName.length-1; i >= 0; i--) {

            if (fileName[i] == '.') {

                let ext = fileName.substring(fileName[i],fileName.length);

                if (!extensions.test(ext)) {
                    error.state = true;
                    error.msg+= 'La extensión del archivo no es válida.<br>';
                }

                break;
            }

        }

        if (file.size > maxSize) {
            error.state = true;
            error.msg += 'La imágen no puede ocupar más de '+maxSize/1048576+' MB.';
        }

        if (error.state) {
            input.value = '';
            input.classList.remove('valid-input');
            input.classList.add('invalid-input'); 
            errores[input.name] = error.msg;;
            return;
        } else {
                input.classList.remove('invalid-input');
                input.classList.add('valid-input');    
                delete errores[input.name];
        }
       
      };
};

//al seleccionar una imagen llama a la funcion para chequear que sea válida
let imageInput = form.image;
imageInput.addEventListener("change",openImage);


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
    
        if(validator.isEmpty(nameInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'el campo nombre es obligatorio' + '<br>';
        }
        if (validator.isEmpty(lastNameInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'el campo apellido es obligatorio' + '<br>';
        }
        if (validator.isEmpty(emailInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'el campo email es obligatorio' + '<br>';
        }
        if (validator.isEmpty(passwordInput.value)){
            event.preventDefault();
            ListadoErrores.innerHTML += 'el campo password es obligatorio' + '<br>';
        }

    }        
});