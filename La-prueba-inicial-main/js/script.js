
botonReto = document.querySelector("#boton-reto")
botonVerdad = document.querySelector("#boton-verdad")
borde = document.querySelector(".texto-reto")
botonAmarillo = document.querySelector("#boton-shot")





retos = [
"Muestra o deci cuál es tu juguete preferido.",
"Busca por Internet alguna postura extraña que desconozcas e intenta imitarla con los objetos que tengas a mano.",
"Quitarse cuatro prendas de ropa que elija el grupo.",
"Meterse en el hueco más pequeño del armario de la habitación durante una ronda.",
"Llamar por teléfono a un ser querido y hacerle una falsa confesión acordada por el grupo.",
"Comer una cucharada de algo raro que hagan tus amigos",
"Pásate un cubo de hielo con otra persona durante un minuto hasta que se deshaga",
"Tomar agua del inodoro",
"Correr en ropa interior y descalzo por la calle durante 3 minutos.",
"Tocarle timbre al vecino y decirle que estas enamorado de el y darle un abrazo",
"Tomar algo de la boca del que esta en tu derecha",
"hace tres shot",
"Llamar a un número desconocido y pedir una pizza. Insistir aunque la persona diga que no es una pizzería",
"Comparte con el resto del grupo un vídeo subido de tono que te guste.",
"Subir un video finjiendo tirarse un pedo a ig donde lo puedan ver todos tus seguidores",
"Intentar hacer reir a alguien del grupo",
"Darle un beso al que tenes en frente",
"Usa la lencería del que tenes en la izquierda durante 20 min.",
"Usa la lencería de alguien del grupo durante media hora.",
"Hacerle un baile sexy a alguien del grupo durante 2 min",
"Pásate un cubo de hielo con otra persona durante un minuto hasta que se deshaga",
"Te rompan un huevo en la cabeza",
"Cambiate de ropa con alguien que decida el grupo",
"Escribile a tu ex o casi algo",
"Dale un beso la cadera al que tenes en frente"
]

 function generarReto(){
    return retos[parseInt(Math.random()*retos.length)]
 }

botonReto.addEventListener("click", ()=>{
document.querySelector (".texto-reto").innerHTML = generarReto()
} )


verdades= [
"¿Cuál es tu fantasía sexual?",
"Cuenta un sueño erótico que hayas tenido.",
"¿Volverias con tu ex?",
"¿Cuándo fue la última vez que lloraste y por qué?",
"¿Cuál es el mayor error que has cometido?",
"¿Qué es lo que más te gusta de la persona de tu derecha?",
"Quien te cae mal o peor de los que estan aca",
"¿Has estado con alguien que esta aca?",
"¿Cuál es la mayor mentira que has contado?",
"¿A quién te gustaría besar en esta habitación?",
"¿Tienes alguna fetiche?, ¿Cúal?",
"¿Cúal es tu mayor inseguridad?",
"¿Qué es lo más raro que hiciste",
]

function generarVerdades(){
    return verdades[parseInt(Math.random() *verdades.length)]
}
botonVerdad.addEventListener("click", ()=>{
    document.querySelector (".texto-reto").innerHTML = generarVerdades()
    } )

shot = [
    "Tomar 1 shot",
    "Tomar 2 shots",
    "Tomar 3 shot",
    "Hacer fondo del vaso q tenes",
    " Que tus amigos eligen la prenda",
]

function generarPrenda(){
   return shot[parseInt(Math.random()*shot.length)]
}
botonAmarillo.addEventListener("click", ()=>{
    document.querySelector("#shot").innerHTML=generarPrenda()
})