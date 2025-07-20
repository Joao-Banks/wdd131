document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Light Mode';
  toggleButton.id = 'toggle-light-mode-btn';

  toggleButton.style.position = 'fixed';
  toggleButton.style.top = '1rem';
  toggleButton.style.right = '1rem';
  toggleButton.style.padding = '0.5rem 1rem';
  toggleButton.style.backgroundColor = '#f00';
  toggleButton.style.color = '#fff';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.zIndex = '1000';

  document.body.appendChild(toggleButton);

  // Select the logo image element
  const logoImg = document.querySelector('.site-logo');
  if (!logoImg) {
    console.warn('Logo image not found!');
    return; // Stop the rest of the script
  }

  // Store original and light mode logo URLs
  const darkLogoSrc = logoImg.getAttribute('src');
  const lightLogoSrc = '../home-page/images/john-png.webp';

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      logoImg.setAttribute('src', lightLogoSrc);
    } else {
      logoImg.setAttribute('src', darkLogoSrc);
    }
  });
});
