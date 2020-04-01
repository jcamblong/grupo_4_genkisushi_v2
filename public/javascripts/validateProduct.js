let form = document.querySelector('form');


let nameInput = form.name;
let errores = {};

let ListadoErrores = form.querySelector("#Errores");


nameInput.addEventListener('click', function(e){
    nameInput.classList.remove('invalid-input');
    nameInput.classList.add('valid-input');     
});

//validar nombre del producto obligatorio y mayor a 5 caracteres
nameInput.addEventListener('blur', function(e){
    if (validator.isLength(nameInput.value,{min:0, max:4})){
        nameInput.classList.remove('valid-input');
        nameInput.classList.add('invalid-input');
        errores[nameInput.name] = "El campo nombre debe contener al menos 5 caracteres";
    }else{
        nameInput.classList.remove('invalid-input');
        nameInput.classList.add('valid-input');
        delete errores[nameInput.name];
    }
});

//validar detalle al menos 20 caracteres
let detailInput = form.detail;

detailInput.addEventListener('click', function(e){
    detailInput.classList.remove('invalid-input');
    detailInput.classList.add('valid-input');     
});

detailInput.addEventListener('blur', function(e){
    if (!validator.isLength(detailInput.value,{min:20, max:undefined})){
        detailInput.classList.remove('valid-input');
        detailInput.classList.add('invalid-input');
        errores[detailInput.name] = "el campo detalle debe tener al menos 20 caracteres";
    }else{
        detailInput.classList.remove('invalid-input');
        detailInput.classList.add('valid-input');
        delete errores[detailInput.name];
    }
});


//validar que la imagen sea jpg, jpeg,png, gif
function openImage() {         
    console.log("onchange")
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
            errores[input.name] = error.msg;
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

imageInput.addEventListener('click', function(e){
    console.log("onclick")
    imageInput.classList.remove('invalid-input');
    imageInput.classList.add('valid-input');     
});

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
    }      
});

