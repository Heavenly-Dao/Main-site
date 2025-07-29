// Initial list of YouTube items – manually define here
const youtubeItems = [
    { type: 'video', id: 'zTTcODgQzZo' },
    { type: 'video', id: '3DeRQ1O5GFE' },
    { type: 'video', id: 'a_ZtF9bBwug' } // The one that was "yoinked"
];

// Load all iframes
function loadYouTubeIframes() {
    const container = document.querySelector('.iframe-container');
    container.innerHTML = '';

    youtubeItems.forEach((item, index) => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        wrapper.style.margin = '10px';

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '5px';
        closeBtn.style.right = '5px';
        closeBtn.style.background = 'rgba(0,0,0,0.5)';
        closeBtn.style.color = 'white';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '50%';
        closeBtn.style.width = '24px';
        closeBtn.style.height = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.zIndex = '10';

        closeBtn.addEventListener('click', () => {
            youtubeItems.splice(index, 1);
            loadYouTubeIframes(); // Re-render without saving to localStorage
        });

        const iframe = document.createElement('iframe');
        iframe.width = "640";
        iframe.height = "360";
        iframe.frameBorder = "0";
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.title = `YouTube ${item.type} ${index + 1}`;

        iframe.src = item.type === 'video'
            ? `https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`
            : `https://www.youtube.com/embed/videoseries?list=${item.id}&autoplay=1&rel=0`;

        wrapper.appendChild(iframe);
        wrapper.appendChild(closeBtn);
        container.appendChild(wrapper);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadYouTubeIframes();

    // Optional: if you have an add input field + button
    const addBtn = document.getElementById('add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', addVideoFromInput);
    }
});

// Optional add function if you use an input field with ID #youtube-id
function addVideoFromInput() {
    const input = document.getElementById('youtube-id');
    if (!input) return;

    const url = input.value.trim();
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);

    if (match) {
        youtubeItems.push({ type: 'video', id: match[1] });
        loadYouTubeIframes();
        input.value = '';
    } else {
        alert('Invalid YouTube URL');
    }
}

