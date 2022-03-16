<button id="cast">Cast</button>

<script src="https://castjs.io/cast.min.js"></script>
<script>
// Create new Castjs instance
const cjs = new Castjs();

// Wait for user interaction
document.getElementById('cast').addEventListener('click', function() {
    // Check if casting is available
    if (cjs.available) {
        // Initiate new cast session
        cjs.cast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4');
    }
});
</script>