const containerStyle = `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const imageStyle = `
    max-width: 100%;
    height: auto;
`;

const iframeContainerStyle = `
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 aspect ratio */
    position: relative;
`;

const iframeStyle = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const mediaQueryStyle = `
    @media screen and (max-width: 768px) {
        /* Adjust styles for smaller screens */
        .container {
            flex-direction: column;
        }
    }
`;

document.head.innerHTML += `<style>
    .container { ${containerStyle} }
    .container img { ${imageStyle} }
    .iframe-container { ${iframeContainerStyle} }
    .iframe-container iframe { ${iframeStyle} }
    ${mediaQueryStyle}
</style>`;
