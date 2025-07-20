// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create a button for toggling light mode
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Light Mode';
  toggleButton.id = 'toggle-light-mode-btn';

  // Style the button (optional, you can move this to CSS)
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

  // Append the button to the body
  document.body.appendChild(toggleButton);

  // Listen for clicks on the button
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
});
