
let form = document.querySelector('form');

let nameInput = form.name;
let lastNameInput = form.lastName;

let ListadoErrores = form.querySelector("#Errores");
let errores = {};



//validar nombre y apellido obligatorio y al menos 2 caracteres
//nombre
nameInput.addEventListener('blur', function(e){
    if (validator.isLength(nameInput.value,{min:0, max:1})){
        nameInput.style.border ='1px solid red';
        errores[nameInput.name] = "El campo nombre debe contener al menos 2 caracteres";
    }else{
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
            errores[input.name] = error.msg;
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
    }       
});