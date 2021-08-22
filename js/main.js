/*Referenciando modal js*/
var pantallainicioModal = new bootstrap.Modal(document.getElementById('pantallainicioModal'),{})


/*Referenciando*/
let listalistado = document.getElementById('listalistado')
let pantallavacio =document.getElementById('pantallavacio')
 /*quede en minuto 01:18*/


let guardar = document.getElementById('agregador').addEventListener('click', function(){
    let producto = document.getElementById('pantallacargaproducto').value
    let listaicono = document.getElementById('pantallacateg').value
    let infocarga = document.getElementById('pantallacargainfo').value
/*asignacion*/
    document.getElementById('pantallacargaproducto').value =""
    document.getElementById('pantallacateg').value =""
    document.getElementById('pantallacargainfo').value =""

  /*listado hijo template string*/
  let modelo = `<li class="list-group-item" data-producto="${producto}" data-icono="${listaicono}" data-info="${infocarga}"><img src="${listaicono}" alt="${producto}" class="pantallalista">${producto}</li>`

    listalistado.innerHTML += modelo
    pantallainicioModal.hide()
    pantallavacio.style.display = 'none'
       /*quede en minuto 01:18*/
 
    listalistado.style.display = 'block' 

 

    console.log('ouch' + producto + listaicono + infocarga + listalistado)
})

let clic = document.getElementById('listalistado').addEventListener('click',function(e){
    console.log(e.target.getAttribute('data-producto'))
    document.getElementById('pantalladetalleproducto').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('pantalladetalleicono').src = e.target.getAttribute('data-icono')
    document.getElementById('pantalladetalleinfo').innerHTML = e.target.getAttribute('data-info')
    listalistado.style.display = 'none'
    pantalladetalle.style.display = 'block'
    pantallacargainfo.style.display = 'block'
    
})
let pantalladetallecerrar = document.getElementById('pantalladetallecerrar').addEventListener('click',()=>{
    listalistado.style.display = 'block'
    pantalladetalle.style.display = 'none'
    pantallacargainfo.style.display = 'block'
    
})