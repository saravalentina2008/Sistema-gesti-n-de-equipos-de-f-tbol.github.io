let equipos=[]

function crearEquipo(){

let nombre=document.getElementById("teamName").value

if(nombre===""){
alert("Ingrese un nombre")
return
}

equipos.push({nombre:nombre,jugadores:[]})

document.getElementById("teamName").value=""

actualizar()
}

function agregarJugador(){

let jugador=document.getElementById("playerName").value
let posicion=document.getElementById("playerPosition").value
let equipo=document.getElementById("teamSelect").value

if(jugador===""||posicion===""){
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

let lista=document.getElementById("teamList")
let select=document.getElementById("teamSelect")
let stats=document.getElementById("stats")

lista.innerHTML=""
select.innerHTML=""

let totalJugadores=0

equipos.forEach((equipo,i)=>{

let option=document.createElement("option")
option.value=i
option.textContent=equipo.nombre
select.appendChild(option)

let li=document.createElement("li")

let jugadoresHTML=""

equipo.jugadores.forEach(j=>{
jugadoresHTML+=`<div class="player">👤 ${j.nombre} - ${j.posicion}</div>`
totalJugadores++
})

li.innerHTML=`
<div class="team-title">⚽ ${equipo.nombre}</div>
${jugadoresHTML || "<div class='player'>Sin jugadores</div>"}
`

lista.appendChild(li)

})

stats.innerHTML=`Equipos: ${equipos.length} | Jugadores: ${totalJugadores}`
}

function buscarJugador(){

let filtro=document.getElementById("searchPlayer").value.toLowerCase()
let jugadores=document.querySelectorAll(".player")

jugadores.forEach(j=>{

if(j.textContent.toLowerCase().includes(filtro)){
j.style.display="block"
}else{
j.style.display="none"
}

})

}
