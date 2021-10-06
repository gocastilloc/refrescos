function ingresar()
{

    var usuario="gesler";
    var contraseña="examen";

    if(document.foringreso.usuario.value==usuario &&
        document.foringreso.contraseña.value==contraseña)
        {
            document,location="paginasdepartamento/inicio.html"
        }
        else
        {
            alert("ingrese usuario y contraceña correctamente")
        }
}