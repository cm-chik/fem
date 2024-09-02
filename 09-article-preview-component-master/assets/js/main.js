document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('.js-toggle-tip');
const shareTooltip = document.getElementById('share');

shareButton.addEventListener('click', () => {
    const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';
    shareButton.setAttribute('aria-expanded', !isExpanded);
    shareTooltip.classList.toggle('invisible', isExpanded);
    shareTooltip.classList.toggle('opacity-0', isExpanded);
    console.log(shareButton, shareTooltip)
  });

});