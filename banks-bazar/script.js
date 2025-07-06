document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('item-form');
  const itemsContainer = document.getElementById('items-container');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('item-name').value.trim();
    const price = document.getElementById('item-price').value.trim();
    const desc = document.getElementById('item-desc').value.trim();

    if (!name || !price || !desc) return;

    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    itemCard.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Price:</strong> $${price}</p>
      <p>${desc}</p>
    `;

    itemsContainer.appendChild(itemCard);

    form.reset();
  });
});
