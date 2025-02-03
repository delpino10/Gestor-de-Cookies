const tbody = document.getElementById('tbody');
const btn_submit = document.getElementById('submit-btn');
const btn_search = document.getElementById('search-btn');
const btn_delete = document.getElementById('reset-btn');
const mensaje = document.getElementById('mensaje');


btn_submit.addEventListener('click', () =>{
    const c_name = document.getElementById('nombre').value.trim()
    const c_value = document.getElementById('contenido').value.trim()
    // const c_domain = document.getElementById('domain').value
    const c_path = document.getElementById('path').value
    const c_secure = document.getElementById('secure').checked
    const c_sameSite = document.getElementById('samesite').value;

    if(c_name === "" || c_value === ""){
        alert("Ni el nombre ni el valor de la cookie pueden quedar vacío")
    }else{
        setCookie(c_name, c_value,  c_path, c_secure, c_sameSite)
        introTablaSetCookie(c_name, c_value,  c_path, c_secure, c_sameSite)
        console.log(document.cookie);
    }


})

function setCookie(c_name, c_value, c_path, c_secure, c_sameSite){
    const encodedName = encodeURIComponent(c_name);
    const encodedValue = encodeURIComponent(c_value);

    // let cookieString = `${encodedName}=${encodedValue}; path=${c_path}; domain=${c_domain} SameSite=${c_sameSite}`;
    // Domain omitido por problemas con el navegador. El navegador se encarga de poner el domain
    let cookieString = `${encodedName}=${encodedValue}; path=${c_path}; SameSite=${c_sameSite}`;

    if(c_secure){
        cookieString += "; secure"
    }

    document.cookie = cookieString;
}

function introTablaSetCookie(c_name, c_value, c_path, c_secure, c_sameSite){

    const fila = document.createElement('tr')
    const celda = document.createElement('td')
    const celda2 = document.createElement('td')
    const celda3 = document.createElement('td')
    const celda4 = document.createElement('td')
    const celda5 = document.createElement('td')
    const celdaTexto = document.createTextNode(c_name)
    const celda2Texto = document.createTextNode(c_value)
    const celda3Texto = document.createTextNode(c_path)
    const celda4Texto = document.createTextNode(c_secure)
    const celda5Texto = document.createTextNode(c_sameSite)
    celda.appendChild(celdaTexto);
    celda2.appendChild(celda2Texto);
    celda3.appendChild(celda3Texto);
    celda4.appendChild(celda4Texto);
    celda5.appendChild(celda5Texto);
    fila.appendChild(celda)
    fila.appendChild(celda2)
    fila.appendChild(celda3)
    fila.appendChild(celda4)
    fila.appendChild(celda5)
    fila.style.background='#b3dfb3'
    tbody.appendChild(fila);

}

btn_search.addEventListener('click', () =>{
    const c_name = document.getElementById('nombre').value.trim()

    let cookieValue = buscarCookie(c_name);

    introTabla2(c_name,cookieValue)

})


function buscarCookie(name) {
    let cookieArray = document.cookie.split(';');  // Divide las cookies por ';'
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();  // Elimina espacios extra
        if (cookie.startsWith(name + '=')) {  // Verifica si la cookie empieza con el nombre deseado
            return cookie.substring(name.length + 1);  // Extrae el valor de la cookie
        }
    }
    return null;  // Si no se encuentra la cookie, retorna null
}

function introTabla2 (name, valor){
    let fila = document.createElement('tr')
    let celda1 = document.createElement('td')
    let textoCelda1 = document.createTextNode(name)
    let celda2 = document.createElement('td')
    let textoCelda2 = document.createTextNode(valor)
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda1)
    fila.appendChild(celda2)
    tbody.appendChild(fila)
    fila.style.background="#b4b4dd"
}

btn_delete.addEventListener('click', () =>{
    const c_name = document.getElementById('nombre').value.trim()
    let cookieValue = buscarCookie(c_name);
    borrarCookie(c_name)

    introTabla3(c_name,cookieValue)

})

function borrarCookie(name) {
    let cookieArray = document.cookie.split(';');  // Divide las cookies por ';' en un array
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();  // Elimina espacios extra
        if (cookie.startsWith(name + '=')) {  // Verifica si la cookie empieza con el nombre deseado
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            mensaje.innerHTML = "Cookie borrada!"
        }
    }
    mensaje.innerHTML = "Cookie no encontrada!"
    return null;  // Si no se encuentra la cookie, retorna null
}

function introTabla3 (name, valor){
    let fila = document.createElement('tr')
    let celda1 = document.createElement('td')
    let textoCelda1 = document.createTextNode(name)
    let celda2 = document.createElement('td')
    let textoCelda2 = document.createTextNode(valor)
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda1)
    fila.appendChild(celda2)
    tbody.appendChild(fila)
    fila.style.background="#e1afaf"
}

