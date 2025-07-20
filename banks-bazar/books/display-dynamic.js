document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: 'The Republic',
      img: '../books/images-books/plato-republic.webp',
      price: '$12.99',
      description: 'Plato’s foundational work on justice and political theory.'
    },
    {
      title: 'Being and Time',
      img: '../books/images-books/being-and-time.webp',
      price: '$18.50',
      description: 'Martin Heidegger explores existential philosophy and the nature of being.'
    },
    {
      title: 'Critique of Pure Reason',
      img: '../books/images-books/critique-of-pure-reason.webp',
      price: '$15.00',
      description: 'Kant’s monumental critique of metaphysics and epistemology.'
    },
    {
      title: 'Thus Spoke Zarathustra',
      img: '../books/images-books/thus-spoke-zarathustra.webp',
      price: '$14.75',
      description: 'Nietzsche’s poetic masterpiece on the Übermensch and eternal recurrence.'
    },
    {
      title: 'Meditations',
      img: '../books/images-books/meditations-marcus-aurelius.webp',
      price: '$9.99',
      description: 'Marcus Aurelius’s stoic reflections on life, leadership, and virtue.'
    }
  ];

  const container = document.getElementById('philosophy-books-container');

  // Clear container before adding cards
  container.innerHTML = '';

  // Loop through each book and create its card
  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
      <img src="${book.img}" alt="${book.title}" class="book-cover" />
      <h3>${book.title}</h3>
      <p class="price">${book.price}</p>
      <p class="desc">${book.description}</p>
    `;

    container.appendChild(card);
  });
});
