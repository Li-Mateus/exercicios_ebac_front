function Carro(fabricante, modelo, ano) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.acelerar = function acelerar() {
        console.log('Vruum! :D');
    }
}

function Picape(fabricante, modelo, ano, litrosCacamba) {
    Carro.call(this, fabricante, modelo, ano);

    this.litrosCacamba = litrosCacamba;
}

function Eletrico(fabricante, modelo, ano, autonomiaKm) {
    Carro.call(this, fabricante, modelo, ano);

    this.autonomiaKm = autonomiaKm;
}

const picapePequena = new Picape('Volkswagen', 'Savero', 2015, 924);
const picapeMedia = new Picape('Toyota', 'Hilux', 2015, 1000);
const picapeGrande = new Picape('Ford', 'F-150', 2017, 1495);

console.log(picapePequena);
console.log(picapeMedia);
console.log(picapeGrande);

const eletricoBasico = new Eletrico('BYD', 'Dolphin Mini', 2024, 280);
const eletricoLuxo = new Eletrico('Mercedes-Benz', 'EQS', 2023, 373);
const eletricoEsportivo = new Eletrico('Lotus', 'Evija', 2023, 345);

console.log(eletricoBasico);
console.log(eletricoLuxo);
console.log(eletricoEsportivo);