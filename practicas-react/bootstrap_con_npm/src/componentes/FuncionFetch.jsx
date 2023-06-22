fetch(urlApiRastreomasGuia).then((resp) => {
    return resp.json()
      ;
  }).then((data) => {
   /*funciones correspondientes para manipular data ya es un json 
   y aqui se puede hacer todo lo necesario */
  }).catch(
    () => console.log('Error al cargar el rastreo ')
  )