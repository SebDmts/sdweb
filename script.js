AOS.init({ duration: 1000, once: true });

VANTA.GLOBE({
    el: "#vanta-canvas",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3b82f6,
    size: 0.9,          /* Globe un peu plus petit pour libérer de l'espace */
    backgroundColor: 0x020617,
    points: 8.00,       /* Moins de points pour plus de légèreté */
    maxDistance: 15.00  /* Traits plus fins et courts */
})