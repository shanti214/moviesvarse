function filterMovies() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}

function filterGenre(genre) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = (genre === 'all' || card.dataset.genre === genre) ? 'block' : 'none';
    });
}

function toggleLogin() {
    let modal = document.getElementById("loginModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}