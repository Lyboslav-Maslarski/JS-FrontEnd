function attachGradientEvents() {
    const container = document.getElementById('gradient');
    const result = document.getElementById('result');

    container.addEventListener('mousemove', showGradient)
    container.addEventListener('mouseleave', hideResult);

    function showGradient(e) {
        let offset = e.offsetX;
        let containerWidth = container.clientWidth;
        result.textContent = Math.floor((offset / containerWidth) * 100) + '%';
    }
    function hideResult() {
        result.textContent = '';
    }
}