// Seleção dos botões e polaroids
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const polaroids = document.querySelectorAll(".polaroid");
let polaroidAtual = 0; // Índice da polaroid atualmente exibida

// Adiciona evento de clique em cada polaroid para alternar entre frente e verso
polaroids.forEach(polaroid => {
    polaroid.addEventListener("click", function () {
        const segundaFoto = polaroid.querySelector(".segunda-foto");

        // Alterna a classe para virar a polaroid e exibir o fundo
        polaroid.classList.toggle("virar");
        segundaFoto.classList.toggle("mostrar-segunda-foto");
    });
});

// Função para criar animações de corações flutuantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Define posição, duração da animação e escala aleatórias
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.transform = `scale(${Math.random() * 0.8 + 0.4})`;

    document.body.appendChild(heart);

    // Remove o coração após o término da animação
    setTimeout(() => {
        heart.remove();
    }, 6000); // 6 segundos para coincidir com a duração máxima
}

// Cria um novo coração a cada 300ms
setInterval(createHeart, 300);

// Evento do botão "Avançar" para ir para a próxima polaroid
btnAvancar.addEventListener("click", function () {
    if (polaroidAtual === polaroids.length - 1) return; // Verifica se está na última polaroid
    esconderPolaroidSelecionada(); // Esconde a polaroid atual
    polaroidAtual++; // Avança para a próxima
    mostrarPolaroid(); // Mostra a nova polaroid
});

// Evento do botão "Voltar" para ir para a polaroid anterior
btnVoltar.addEventListener("click", function () {
    if (polaroidAtual === 0) return; // Verifica se está na primeira polaroid
    esconderPolaroidSelecionada(); // Esconde a polaroid atual
    polaroidAtual--; // Volta para a anterior
    mostrarPolaroid(); // Mostra a nova polaroid
});

// Função para exibir a polaroid atual
function mostrarPolaroid() {
    polaroids[polaroidAtual].classList.add("selecionado");
}

// Função para esconder a polaroid que está atualmente selecionada
function esconderPolaroidSelecionada() {
    const polaroidSelecionada = document.querySelector(".selecionado");
    polaroidSelecionada.classList.remove("selecionado");
}