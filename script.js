document.addEventListener('mousemove', function(e) {
    // Berechne den Prozentsatz der Mausposition im Verhältnis zur Bildschirmbreite
    const percentageX = (e.clientX / window.innerWidth) * 100;
    
    // Berechne den Prozentsatz der Mausposition im Verhältnis zur Bildschirmhöhe
    const percentageY = (e.clientY / window.innerHeight) * 100;

    document.body.style.background = `linear-gradient(to right, 
        hsl(${240 + percentageX}, 100%, 50%), 
        hsl(${300 + percentageY}, 100%, 50%))`;
})


function toggleExpandedText() {
    var expandedText = document.getElementById('expandedText');
    var moreInfoButton = document.getElementById('moreInfoButton');

    // Überprüfe, ob der erweiterte Text sichtbar ist
    if (window.getComputedStyle(expandedText).display === 'none') {
        // Wenn unsichtbar, mache ihn sichtbar
        expandedText.style.display = 'block';
        // Ändere den Text im Button
        moreInfoButton.innerHTML = 'Weniger anzeigen';
    } else {
        // Wenn sichtbar, mache ihn unsichtbar
        expandedText.style.display = 'none';
        // Ändere den Text im Button
        moreInfoButton.innerHTML = 'Mehr Infos';
    }
}
