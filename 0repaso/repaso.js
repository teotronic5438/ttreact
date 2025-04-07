function animar(id, claseAnimacion) {
    const caja = document.getElementById(id);
    caja.classList.remove(claseAnimacion); // Reiniciar animación
    void caja.offsetWidth; // Reflow para reiniciar
    caja.classList.add(claseAnimacion);
}