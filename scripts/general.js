// Initial list of YouTube items – starts empty so your bash script/input can add them
let youtubeItems = [
    { id: 'YARwncqWaG8', type: 'video' } // AURORA - Cure For Me
];

// Load all iframes safely
function loadYouTubeIframes() {
    const container = document.querySelector('.iframe-container');
    if (!container) return;
    
    container.innerHTML = '';

    youtubeItems.forEach((item) => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';

        // Custom Delete Button Layout
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '8px';
        closeBtn.style.right = '8px';
        closeBtn.style.background = 'rgba(220, 53, 69, 0.8)';
        closeBtn.style.color = 'white';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '50%';
        closeBtn.style.width = '28px';
        closeBtn.style.height = '28px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.zIndex = '10';
        closeBtn.style.fontWeight = 'bold';

        // Safely filters out the video by ID when clicked
        closeBtn.addEventListener('click', () => {
            youtubeItems = youtubeItems.filter(v => v.id !== item.id);
            loadYouTubeIframes(); 
        });

        // Iframe Node Generation matching official properties
        const iframe = document.createElement('iframe');
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.style.borderRadius = "8px";
        iframe.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.title = "YouTube video player";
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

        // Uses the functional autoplay URL query string that works on live pages
        iframe.src = item.type === 'video'
            ? `https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`
            : `https://www.youtube.com/embed/videoseries?list=${item.id}&autoplay=1&rel=0`;

        wrapper.appendChild(iframe);
        wrapper.appendChild(closeBtn);
        container.appendChild(wrapper);
    });
}

// Hook up input and button DOM listeners
document.addEventListener('DOMContentLoaded', () => {
    loadYouTubeIframes();

    const addBtn = document.getElementById('add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', addVideoFromInput);
    }
    
    const inputField = document.getElementById('video-url');
    if (inputField) {
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addVideoFromInput();
            }
        });
    }
});

// Extract IDs from inputs or full URLs securely
function addVideoFromInput() {
    const input = document.getElementById('video-url');
    if (!input) return;

    const inputValue = input.value.trim();
    if (!inputValue) return;

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([0-9A-Za-z_-]{11})/;
    const match = inputValue.match(regExp);
    
    let videoId = '';
    
    if (match && match[2].length === 11) {
        videoId = match[2];
    } else if (inputValue.length === 11) {
        videoId = inputValue;
    }

    if (videoId) {
        if (youtubeItems.some(item => item.id === videoId)) {
            alert('That video has already been yoinked!');
            return;
        }

        youtubeItems.push({ id: videoId, type: 'video' });
        loadYouTubeIframes();
        input.value = '';
    } else {
        alert('Invalid YouTube Link or Video ID format.');
    }
}
