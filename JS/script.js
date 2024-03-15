(function() {
    var text = document.getElementById('typewriter').textContent.trim();
    document.getElementById('typewriter').textContent = '';
    var index = 0;

    function typewriter() {
        if (index < text.length) {
            document.getElementById('typewriter').textContent += text.charAt(index);
            index++;
            setTimeout(typewriter, 100); // Adjust speed as needed
        } else {
            setTimeout(erase, 1000); // Wait for 1 second before erasing
        }
    }

    function erase() {
        if (index >= 0) {
            var tempText = text.substring(0, index);
            document.getElementById('typewriter').textContent = tempText;
            index--;
            setTimeout(erase, 50); // Adjust speed as needed
        } else {
            setTimeout(typewriter, 1000); // Wait for 1 second before typing again
        }
    }

    typewriter();
})();

