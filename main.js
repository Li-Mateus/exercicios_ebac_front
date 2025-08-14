document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('.profile-avatar');
    const nameElement = document.querySelector('.profile-name');
    const userElement = document.querySelector('.profile-username');
    const reposElement = document.querySelector('.repositorios');
    const followersElement = document.querySelector('.seguidores');
    const followingElement = document.querySelector('.seguindo');
    const linkElement = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/Li-Mateus').then(function(res) {
        return res.json();
    })
    .then(function(json) {
        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name;
        userElement.innerText = '@' + json.login;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
})