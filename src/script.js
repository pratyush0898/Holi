document.body.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
    var smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.left = x + 'px';
    smoke.style.top = y + 'px';
    smoke.style.backgroundColor = color;
    document.body.appendChild(smoke);
    setTimeout(function() {
        smoke.remove();
    }, 1000);
});