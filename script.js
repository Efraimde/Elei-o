let voteCount = 0;
let voteConfirmed = false;
let enteredNumber = '';

document.querySelectorAll('.num-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (enteredNumber.length < 2 && !voteConfirmed) {
            enteredNumber += button.getAttribute('data-num');
            document.getElementById('input-numero').value = enteredNumber;
            
            // Verifica o número digitado
            if (enteredNumber === '00') {
                document.getElementById('candidate-name').innerText = 'Efraim de Oliveira - Prefeito (Número: 00)';
                document.getElementById('candidate-photo').src = 'Efraim de oliveira.png';
            } else {
                document.getElementById('candidate-name').innerText = 'Candidato Desconhecido';
                document.getElementById('candidate-photo').src = '';
            }
        }
    });
});

document.getElementById('branco-btn').addEventListener('click', () => {
    if (!voteConfirmed) {
        voteConfirmed = true;
        document.getElementById('input-numero').value = 'Branco';
        document.getElementById('vote-count').innerText = `Votos: Branco`;
        playSound();
    }
});

document.getElementById('corrige-btn').addEventListener('click', () => {
    if (!voteConfirmed) {
        enteredNumber = '';
        document.getElementById('input-numero').value = '';
        document.getElementById('candidate-name').innerText = '';
        document.getElementById('candidate-photo').src = '';
    }
});

document.getElementById('confirma-btn').addEventListener('click', () => {
    if (enteredNumber === '00') {
        voteCount++;
        document.getElementById('vote-count').innerText = `Votos: ${voteCount}`;
        voteConfirmed = true;
        playSound();
    } else if (!voteConfirmed && enteredNumber !== '') {
        document.getElementById('input-numero').value = 'Candidato Desconhecido';
        voteConfirmed = true;
    }
});

function playSound() {
    const audio = new Audio('som-de-urna-eletronica.mp3');
    audio.play();
}



       
           