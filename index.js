class personaje{
    constructor(nombre,propietario,inclan){
        this.nombre= nombre;
        this.propietario= propietario;
        this.inclan=inclan;
        this.informacion=`soy ${this.nombre} mi propietario es ${this.propietario} y ${this.inclan} estoy en el clan`;
    }
}

let pj =new personaje("Polux","pol" ,"si");
let pj2 =new personaje("Seizah Moonfate","pol" ,"no");


console.log(pj.informacion + " - "+pj2.informacion);
