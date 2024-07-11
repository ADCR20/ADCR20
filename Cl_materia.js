export default class Cl_materia{
    constructor(){
        this.contaprob=0
        this.contreprob=0
        this.acumnotas=0
    }
    procesarestudiante(e){

        this.acumnotas+=e.notafin

        if(e.notafin >= 48){
            this.contaprob++
        } else 
              return this.contreprob++
    }
    notaprom(){
        return this.acumnotas/8
    }
}