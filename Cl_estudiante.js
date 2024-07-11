export default class Cl_estudiante{
    constructor(ced, notafin){
        this.ced=ced
        this.notafin=notafin
    }
    set ced(c){
        this._ced=+c
    }
    get ced(){
        return this._ced
    }
    set notafin(nf){
        this._notafin=+nf
    }
    get notafin(){
        return this._notafin
    }
}