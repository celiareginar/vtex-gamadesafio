const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let banco = {
        name,
        email,
    }
    let convertBanco = JSON.stringify(banco);

    localStorage.setItem('lead', convertBanco);

    let content = document.getElementById('content');

    let carregando = `<p>Carregando...</p>`;

    let pronto = `<p>Pronto..</p>`;

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000)
})