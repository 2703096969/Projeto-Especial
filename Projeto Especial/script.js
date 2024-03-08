document.getElementById("yesButton").addEventListener("click", function() {
    document.body.innerHTML = "<div style='color: white; height: 100vh; display: flex; justify-content: center; align-items: center; background-color: green;'>Muito obrigado, vou fazer um bom uso deste privilégio</div>";
});

document.getElementById("noButton").addEventListener("click", function() {
    // Impede a sobreposição das palavras na tela ajustando as posições máximas permitidas
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;
});
