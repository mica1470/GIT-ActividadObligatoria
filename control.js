function Verificar()
{
  var user = document.getElementById('usuario').value;
  var contra = document.getElementById('clave').value;
    var arroba;
    var completo;

  //No se encuentre vacios
   if (user==""||contra=="")
   {
     alert('No se encuentran completados todos los campos..');
        completo = false;

   } else
    {
    //Usuario contenga @
    for (i = 0; i < user.length; i++){
        if (user.charAt(i)=='@') {
            arroba = true;
            completo = true;
            break;
        } else {
            arroba = false;
        }
        }
    
//validar datos con banderas
    if (arroba && completo) {
        alert('Se completaron todos los datos..')
    } else if (!arroba) { 
         alert('No se encuentra un @ en el usuario..')
       } 
    
    }
}