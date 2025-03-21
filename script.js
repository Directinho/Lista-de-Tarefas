let mensagemCount = 0;

const emojis = ['🦓', '🐱', '🐶', '🐼', '🦄', '🐙', '🦁', '🐘', '🦊', '🐰', '🌟', '🍎', '🍕', '🚀', '🎉'];

function addTarefa() {
    const tarefaInput = document.getElementById('inserirTarefa');
    const tarefaText = tarefaInput.value.trim();
    
    if (tarefaText === '') {
        alert('Erro! O input está vazio! 😱');
        return;
    }

    const li = document.createElement('li');
    li.className = 'lista';
    
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const span = document.createElement('span');
    span.textContent = `${randomEmoji} ${tarefaText}`; 
    
    const completar = document.createElement('button');
    completar.textContent = 'Concluir ✅';
    completar.onclick = function() {
        span.classList.toggle('completed');
    };
    
    const remover = document.createElement('button');
    remover.textContent = 'Remover ❌';
    remover.onclick = function() {
        li.remove();
        if (mensagemCount < 3) {
            createMensagem('Removido 😢', '#c5000f');
        }
    };
    
    li.appendChild(span);
    li.appendChild(completar);
    li.appendChild(remover);
    
    document.getElementById('lista').appendChild(li);
    tarefaInput.value = ''; 

    if (mensagemCount < 3) {
        createMensagem('Adicionado 🎉', '#4CAF50');
    }
}

function createMensagem(texto, corFundo) {
    const mensagemContainer = document.getElementById('mensagemContainer');
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem';
    mensagem.textContent = texto;
    mensagem.style.backgroundColor = corFundo;

    mensagemContainer.appendChild(mensagem);
    mensagemCount++;

    setTimeout(() => {
        mensagem.remove();
        mensagemCount--;
    }, 2000);
}

document.getElementById('inserirTarefa').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTarefa();
    }
});