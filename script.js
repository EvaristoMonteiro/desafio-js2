const conteudo = document.querySelector(".conteudo")

fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
    })
})
    .then(res => res.json())
    .then(data => {
        conteudo.innerHTML = `
        <img src="${data.image}">
        <div class="infos">
            <div>ID ${data.id}</div>
            <div class="nome-completo">
                <div class="nome">${data.firstName}</div>
                <div class="nome">${data.lastName}</div>
            </div>
            <div>${data.username}</div>
            <div>${data.email}</div>
            <div>${data.gender}</div>
        </div>
        `
    });

