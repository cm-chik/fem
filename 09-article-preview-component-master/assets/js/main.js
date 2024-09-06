const shareButton = document.getElementById('js-toggle-tip');
shareButton.addEventListener('click', toogleTooltip);

function toogleTooltip () {
    const shareTooltip = document.getElementById('js-tooltip');
    shareTooltip.classList.toggle("opacity-0")
    }
function hideTooltip() {
  const shareTooltip = document.getElementById("js-tooltip");
  shareTooltip.classList.add("opacity-0");
}

document.addEventListener("click", (event) => {
  if (!event.target.matches(".js-toggle-tip *")) {
    hideTooltip();
  }
});