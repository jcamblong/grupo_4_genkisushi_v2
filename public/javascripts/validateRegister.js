let form = document.querySelector('form');

let nameInput = form.name;
let lastNameInput = form.lastName;
let emailInput = form.email;
let passwordInput = form.password;
let ListadoErrores = form.querySelector("#Errores");

let errores = {};



//validar nombre y apellido obligatorio y al menos 2 caracteres
//nombre
nameInput.addEventListener('blur', function(e){
    if (validator.isLength(nameInput.value,{min:0, max:1})){
        //nameInput.classList.add('invalid-input');
        nameInput.style.border ='1px solid red';
        errores[nameInput.name] = "el campo nombre debe contener al menos 2 caracteres";
    }else{
        //nameInput.classList.remove('invalid-input');
        //nameInput.classList.add('valid-input');
        nameInput.style.border ='1px solid #dddddd';
        delete errores[nameInput.name];
    }
});
//apellido
lastNameInput.addEventListener('blur', function(e){
    if (validator.isLength(lastNameInput.value,{min:0, max:1})){
        lastNameInput.style.border ='1px solid red';
        errores[lastNameInput.name] = "El campo apellido debe contener al menos 2 caracteres";
    }else{
        lastNameInput.style.border ='1px solid #dddddd';
        delete errores[lastNameInput.name];
    }
});

//validar email obligatorio, ser válido y no debe existir dentro de los ya registrados
emailInput.addEventListener('blur', function(e){
    if(validator.isEmpty(emailInput.value)|| (!validator.isEmail(emailInput.value))){
        emailInput.style.border ='1px solid red';
        errores[emailInput.name] = "no es un email válido";
    }else{
        delete errores[emailInput.name];
          
        let url = `/api/checks/${e.target.value}`
        
        fetch(url)
        .then(response => response.json())
        .then(response => {
            if(response.meta.status == 302){
                emailInput.style.border ='1px solid red';
                errores[emailInput.name] = "el email ya existe";
            }else{
                emailInput.style.border ='1px solid #dddddd';       
                delete errores[emailInput.name];
            }
        });
    }
});

//validar contraseña obligatoria, al menos 8 caracteres y debe contener mayúsculas, un número y un caracter especial
//Minimo 8 caracteres, Maximo 10, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco y Al menos 1 caracter especial

passwordInput.addEventListener('blur', function(e){
    
    let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,10}$/);

    //console.log(event.target.value);
    if (regex.test(event.target.value)){
        console.log(regex.test(event.target.value));
        passwordInput.style.border ='1px solid #dddddd';
        delete errores[passwordInput.name];
    }else{
        passwordInput.style.border ='1px solid red';
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
            input.style.border ='1px solid red';
            errores[input.name] = error.msg;;
            return;
        } else {
          input.style.border ='1px solid #dddddd';
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