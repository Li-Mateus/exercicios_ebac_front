document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-palpite').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let palpite = parseInt(document.getElementById('palpite').value);

        let numeroAleatorio = Math.floor(Math.random() * 11);

        const acertou = 'Acertou! :D';
        const errou = `Errou! :( Eu pensei no número ${numeroAleatorio}`;

        if (numeroAleatorio === palpite) {
            document.getElementById('resultado-inform').innerText = acertou;
        } else {
            document.getElementById('resultado-inform').innerText = errou;
        }

        document.querySelector('#resultado-inform').style.display = 'block';
    });
});