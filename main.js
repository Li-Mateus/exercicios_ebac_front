document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('.profile-avatar');
    const nameElement = document.querySelector('.profile-name');
    const userElement = document.querySelector('.profile-username');
    const reposElement = document.querySelector('.repositorios');
    const followersElement = document.querySelector('.seguidores');
    const followingElement = document.querySelector('.seguindo');
    const linkElement = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/Li-Mateus')
    .then(function(res) {
        if (!res.ok) {
            throw new Error(`Erro HTTP: ${res.stauts}`);
        }
        return res.json();
    })
    .then(function(json) {
        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name || "Nome não encontrado";
        userElement.innerText = '@' + json.login;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
    .catch(function(error) {
        console.error("Ocorreu um erro:", error);
        nameElement.innerText = "Erro ao carregar dados";
    })
})