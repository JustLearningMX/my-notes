//REALIZA UN FETCH A LA API, RECIBE EL PATH AL QUE DESEA ACCEDER Y
//EL TIPO DE SOLICITUD QUE DESEA IMPLEMENTAR

//función asíncrona
export async function requestApi(path, req, arrBody, token) {

  const API = "https://notes-app-api-1d668731c17b.herokuapp.com"; //Base de la API a consumir
/*   const API = "http://localhost:8080";
 */
  const body = (req === "POST" || req === "PUT") ? arrBody : {};

  if(req === "GET"){
    
    // try {
      
      //path y tipo de solicitud
      const resultado = await fetch(API + path, {
        //Se concatena api y path
        mode: "cors",
        method: req, //tipo de petición
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": token,
        },
      }); //Si todo OK se retorna el JSON con los resultados, si no el error
      return await resultado.json();
  }
  else if(req === "POST")
  {      
    const resultado = await fetch(API + path, {
      //Se concatena api y path
      mode: "cors",
      method: req, //tipo de petición
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",        
        "Authorization": token,
      }),
    }); 
    //Retornamos los datos recibidos de la petición
    return await resultado.json();
  }
  else if(req === "PUT")
  {
      // usuario: arrUsuario ? JSON.stringify(arrUsuario) : null,
    const resultado = await fetch(API + path, {
      //Se concatena api y path
      mode: "cors",
      method: req, //tipo de petición
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",        
        "Authorization": token,
      }),
    }); 
    //Retornamos los datos recibidos de la petición
    return await resultado.json();
  }
  else if(req === "DELETE")
  {
    const resultado = await fetch(API + path, {
      //Se concatena api y path
      mode: "cors",
      method: req, //tipo de petición
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",        
        "Authorization": token,
      }),
    }); 
    //Retornamos los datos recibidos de la petición
    return await resultado.json();
  }
} 