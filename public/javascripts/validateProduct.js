let form = document.querySelector('form');


let nameInput = form.name;
let errores = {};

//validar nombre del producto obligatorio y mayor a 5 caracteres
nameInput.addEventListener('blur', function(e){
    if (validator.isLength(nameInput.value,{min:0, max:4})){
        nameInput.style.border ='1px solid red';
        document.getElementById("nameLabel").innerHTML = "Nombre<br>(el campo nombre es obligatorio y debe contener al menos 5 caracteres)";
        nameInput.focus();
        errores[nameInput.name] = true;
    }else{
        nameInput.style.border ='1px solid #dddddd';
        document.getElementById("nameLabel").innerHTML = "Nombre";
        delete errores[nameInput.name];
    }
});

//validar detalle al menos 20 caracteres
let detailInput = form.detail;
detailInput.addEventListener('blur', function(e){
    if (!validator.isLength(detailInput.value,{min:20, max:undefined})){
        detailInput.style.border ='1px solid red';        
        //alert("el campo detalle debe tener al menos 20 caracteres");
        document.getElementById("detailLabel").innerHTML = "Detalle<br>(el campo detalle debe tener al menos 20 caracteres)";
        detailInput.focus();
        errores[detailInput.name] = true;
    }else{
        detailInput.style.border ='1px solid #dddddd';
        document.getElementById("detailLabel").innerHTML = "Detalle";
        delete errores[detailInput.name];
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
            document.getElementById("imageLabel").innerHTML = error.msg;
            input.style.border ='1px solid red';
            errores[input.name] = true;
            return;
        } else {
          document.getElementById("imageLabel").innerHTML = "El archivo es válido";
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