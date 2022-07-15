const nombre = ' Facundo';
const apellido = ' Herrera';

const personaOBJ = {
    nombre: 'Facundo',
    apellido: ' Herrera'
}

// Session Storage
// sessionStorage.setItem("persona", JSON.stringify(personaOBJ));


// Local Storage
// localStorage.setItem("persona", JSON.stringify(personaOBJ));

// Cookie
// document.cookie = "objetoPersonaCookie";

// Caducidad
document.cookie = "caduvidadObjetoCookie; expires = " + new Date(2022, 6, 15 , 18 , 29).toUTCString();

console.log(document.cookie);