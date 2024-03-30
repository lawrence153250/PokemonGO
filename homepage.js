window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
    });

document.addEventListener("DOMContentLoaded", function() {
    const pokeballImg = document.getElementById("pokeball-img");
    const pokemonImg = document.getElementById("pokemon-img");
    const pokehi = document.getElementById("pokehigh");
    const pokbut = document.getElementById("pokbut");
    setTimeout(() => {
        pokeballImg.classList.add("hidden");
        pokemonImg.classList.remove("hidden");
        pokehi.classList.remove("hidden");
        pokbut.classList.remove("hidden")
    }, 2000);
});

function scrollToContainer(event, containerId) {
event.preventDefault();

const container = document.getElementById(containerId);
container.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const strBtn = document.getElementById("strBtn");

    strBtn.addEventListener("click", function() {
        window.open('store.html');
    });
});