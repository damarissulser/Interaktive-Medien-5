document.addEventListener('mousemove', function(e) {
    // Berechne den Prozentsatz der Mausposition im Verhältnis zur Bildschirmbreite
    const percentageX = (e.clientX / window.innerWidth) * 100;
    
    // Berechne den Prozentsatz der Mausposition im Verhältnis zur Bildschirmhöhe
    const percentageY = (e.clientY / window.innerHeight) * 100;

    // Setze die Hintergrundfarbe mit einem linearen Gradienten basierend auf der Mausposition
    document.body.style.background = `linear-gradient(to right, 
        hsl(${percentageX}, 100%, 50%), 
        hsl(${percentageY}, 100%, 50%))`;
})