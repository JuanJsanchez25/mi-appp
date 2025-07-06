function calcular() {
    const producto = parseFloat(document.getElementById("producto").value);
    const agua = parseFloat(document.getElementById("agua").value);

    if (isNaN(producto) || isNaN(agua) || agua === 0) {
        document.getElementById("resultado").innerText = "Por favor, ingresá valores válidos.";
        return;
    }

    const total_ml = agua * 1000;
    const porcentaje = (producto / total_ml) * 100;

    document.getElementById("resultado").innerText = `Dilución: ${porcentaje.toFixed(2)}%`;
}
