import Cl_estudiante from "./Cl_estudiante.js";
import Cl_materia from "./Cl_materia.js";

let materia = new Cl_materia
    let estud1 = new Cl_estudiante(888, 60)
    let estud2 = new Cl_estudiante(777, 50)
    let estud3 = new Cl_estudiante(999, 40)
    let estud4 = new Cl_estudiante(333, 80)
    let estud5 = new Cl_estudiante(111, 30)
    let estud6 = new Cl_estudiante(666, 90)
    let estud7 = new Cl_estudiante(444, 48)
    let estud8 = new Cl_estudiante(222, 60)

materia.procesarestudiante(estud1)
materia.procesarestudiante(estud2)
materia.procesarestudiante(estud3)
materia.procesarestudiante(estud4)
materia.procesarestudiante(estud5)
materia.procesarestudiante(estud6)
materia.procesarestudiante(estud7)
materia.procesarestudiante(estud8)

let salida = document.getElementById("salida")
salida.innerHTML=`
<br>Cantidad de aprobados: ${materia.contaprob}
<br>Cantidad de reprobados: ${materia.contreprob}
<br>Nota promedio de la seccion: ${materia.notaprom()}
`
