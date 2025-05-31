document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        {
            title: "Septimus Heap Book One: Magyk",
            date: "July 5, 2022",
            ageRange: "10-14",
            genre: "Fantasy",
            rating: "⭐⭐⭐⭐",
            description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
            image: "https://m.media-amazon.com/images/I/61F9Qrr3YeL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Magnus Chase Book One: Sword of Summer",
            date: "December 12, 2021",
            ageRange: "12-16",
            genre: "Fantasy",
            rating: "⭐⭐⭐⭐⭐",
            description: "Magnus Chase, a homeless boy living in Boston, finds out he is the son of a Norse god.",
            image: "https://m.media-amazon.com/images/I/91VfcPVCd1L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Belgariad Book One: Pawn of Prophecy",
            date: "Feb 12, 2022",
            ageRange: "12-16",
            genre: "Fantasy",
            rating: "⭐⭐⭐⭐⭐",
            description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
            image: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg"
        }
    ];

    const articlesContainer = document.querySelector('.articles');

    articles.forEach(article => {
        const articleElement = document.createElement('article');

        articleElement.innerHTML = `
            <div class="article-details">
                <p>${article.date}</p>
                <p>${article.ageRange}</p>
                <p>${article.genre}</p>
                <p>${article.rating}</p>
            </div>
            <div class="article-content">
                <h2>${article.title}</h2>
                <img src="${article.image}" alt="Cover of ${article.title}">
                <p>${article.description}</p>
                <a href="#">Read More...</a>
            </div>
        `;

        articlesContainer.appendChild(articleElement);
    });
});