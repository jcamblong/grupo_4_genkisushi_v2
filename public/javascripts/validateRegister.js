let form = document.querySelector('form');

let nameInput = form.name;
let nameError = form.querySelector("#nameError");
let lastNameInput = form.lastName;
let lastNameError = form.querySelector("#lastNameError");

let emailInput = form.email;
let emailError = form.querySelector("#emailError");

let passwordInput = form.password;
let passwordError = form.querySelector("#passwordError");

let errores = {};

//validar nombre y apellido obligatorio y al menos 2 caracteres
//nombre
nameInput.addEventListener('blur', function(e){
    if (validator.isLength(nameInput.value,{min:0, max:1})){
        nameInput.style.border ='1px solid red';
        nameError.innerHTML ="el campo nombre es obligatorio y debe contener al menos 2 caracteres";
        //document.getElementById("nameLabel").innerHTML = "Nombre<br>(el campo nombre es obligatorio y debe contener al menos 5 caracteres)";
        nameInput.focus();
        errores[nameInput.name] = true;
    }else{
        nameInput.style.border ='1px solid #dddddd';
        nameError.innerHTML ="";
        //document.getElementById("nameLabel").innerHTML = "Nombre";
        delete errores[nameInput.name];
    }
});
//apellido
lastNameInput.addEventListener('blur', function(e){
    if (validator.isLength(lastNameInput.value,{min:0, max:1})){
        lastNameInput.style.border ='1px solid red';
        lastNameError.innerHTML ="el campo apellido es obligatorio y debe contener al menos 2 caracteres";
        //document.getElementById("nameLabel").innerHTML = "Nombre<br>(el campo nombre es obligatorio y debe contener al menos 5 caracteres)";
        lastNameInput.focus();
        errores[lastNameInput.name] = true;
    }else{
        lastNameInput.style.border ='1px solid #dddddd';
        lastNameError.innerHTML ="";
        delete errores[lastNameInput.name];
    }
});

//validar email obligatorio, ser válido y no debe existir dentro de los ya registrados
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

//validar contraseña obligatoria, al menos 8 caracteres y debe contener mayúsculas, un número y un caracter especial
//Minimo 8 caracteres, Maximo 20, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco y Al menos 1 caracter especial

passwordInput.addEventListener('blur', function(e){
    
    let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/);

    console.log(event.target.value);
    if (regex.test(event.target.value)){
        console.log(regex.test(event.target.value));
        passwordInput.style.border ='1px solid #dddddd';
        passwordError.innerHTML = "";
        delete errores[passwordInput.name];
    }else{
        passwordInput.style.border ='1px solid red';
        passwordError.innerHTML = "campo obligatorio, min 8, mayúsculas, algún número, sin espacios en blancos y algún caracter especial";
        errores[passwordInput.name] = true;
        passwordInput.focus();
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
            document.getElementById("imageError").innerHTML = error.msg;
            input.style.border ='1px solid red';
            errores[input.name] = true;
            return;
        } else {
          document.getElementById("imageError").innerHTML = "";
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
	if (Object.keys(errores).length > 0) {
		event.preventDefault();
		alert('Hay campos con errores'); 
	}
})