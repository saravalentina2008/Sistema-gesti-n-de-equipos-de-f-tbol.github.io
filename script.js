let equipos = []

function crearEquipo(){

let nombre = document.getElementById("teamName").value

if(nombre === ""){
alert("Ingrese un nombre")
return
}

equipos.push({
nombre:nombre,
logo:"",
jugadores:[]
})

document.getElementById("teamName").value=""

actualizar()

}

function subirLogo(){

let equipoIndex = document.getElementById("teamLogoSelect").value
let logo = document.getElementById("teamLogo").files[0]

if(!logo){
alert("Seleccione una imagen")
return
}

let reader = new FileReader()

reader.onload = function(e){

equipos[equipoIndex].logo = e.target.result

actualizar()

}

reader.readAsDataURL(logo)

}

function agregarJugador(){

let jugador = document.getElementById("playerName").value
let posicion = document.getElementById("playerPosition").value
let equipo = document.getElementById("teamSelect").value

if(jugador === "" || posicion === ""){
alert("Complete los datos")
return
}

equipos[equipo].jugadores.push({
nombre:jugador,
posicion:posicion
})

document.getElementById("playerName").value=""
document.getElementById("playerPosition").value=""

actualizar()

}

function actualizar(){

let lista = document.getElementById("teamList")
let select = document.getElementById("teamSelect")
let selectLogo = document.getElementById("teamLogoSelect")
let stats = document.getElementById("stats")

lista.innerHTML=""
select.innerHTML=""
selectLogo.innerHTML=""

let totalJugadores = 0

equipos.forEach((equipo,i)=>{

let option = document.createElement("option")
option.value=i
option.textContent=equipo.nombre

select.appendChild(option)

let optionLogo = document.createElement("option")
optionLogo.value=i
optionLogo.textContent=equipo.nombre

selectLogo.appendChild(optionLogo)

let li = document.createElement("li")

let jugadoresHTML=""

equipo.jugadores.forEach(j=>{

jugadoresHTML+=`<div class="player">👤 ${j.nombre} - ${j.posicion}</div>`
totalJugadores++

})

let logoHTML=""

if(equipo.logo){
logoHTML=`<img src="${equipo.logo}" class="team-logo">`
}

li.innerHTML=`
<div class="team-title">
${logoHTML}
⚽ ${equipo.nombre}
</div>
${jugadoresHTML || "<div class='player'>Sin jugadores</div>"}
`

lista.appendChild(li)

})

stats.innerHTML=`Equipos: ${equipos.length} | Jugadores: ${totalJugadores}`

}

function buscarJugador(){

let filtro = document.getElementById("searchPlayer").value.toLowerCase()
let jugadores = document.querySelectorAll(".player")

jugadores.forEach(j=>{

if(j.textContent.toLowerCase().includes(filtro)){
j.style.display="block"
}else{
j.style.display="none"
}

})

}

document.getElementById("teamLogo").addEventListener("change", function(){

let nombre = this.files[0]?.name || "Ningún archivo seleccionado"

document.getElementById("fileName").textContent = nombre

})