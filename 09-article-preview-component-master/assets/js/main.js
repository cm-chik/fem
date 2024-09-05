const shareButton = document.getElementById('js-toggle-tip');
shareButton.addEventListener('click', toogleTooltip);

function toogleTooltip () {
    const shareTooltip = document.getElementById('js-tooltip');
    shareTooltip.classList.toggle("opacity-0")
    }

