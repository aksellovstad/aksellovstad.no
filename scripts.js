const imageCategories = {
    'total-grotesk': { name: 'Total Grotesk', institution: 'Selvinitiert', year: '2023–2024', description: 'This project explores the design of a new typeface, Total Grotesk, inspired by the Swiss design movement.' },
    'locm': { name: 'List of Common Misconceptions', institution: 'KHiO', year: '2024', description: 'A project exploring visual storytelling and typography, addressing common misconceptions in the design world.' },
    'visuell-identitet': { name: '11 Minutter', institution: 'KHiO', year: '2023', description: 'This project explores design concepts related to typefaces and graphic compositions.' },
    'redaksjonell-design': { name: 'Editorial design', institution: 'KHiO', year: '2024', description: 'This project explores design concepts related to typefaces and graphic compositions.' },
    'wip': { name: 'Work in Progress', institution: '', year: '', description: 'This project explores design concepts related to typefaces and graphic compositions.' }
};


const images = [
    /* Total Grotesk */
    { src: './media/total-grotesk/total-grotesk-fold-1.0.jpg', description: 'Total Grotesk Image', folder: 'total-grotesk' },
    { src: './media/total-grotesk/total-grotesk-pampflett-1.0.png', description: 'Total Grotesk Image', folder: 'total-grotesk' },
    { src: './media/total-grotesk/total-condensed-1.0.gif', description: 'Total Grotesk Variable animation', folder: 'total-grotesk' },
    { src: './media/total-grotesk/total-grotesk-fold-3.0.jpg', description: 'Total Grotesk Image', folder: 'total-grotesk' },
    { src: './media/total-grotesk/total-grotesk-fold-4.0.jpg', description: 'Total Grotesk Image', folder: 'total-grotesk' },
    { src: './media/total-grotesk/total-grotesk-scan-1.0.png', description: 'Total Grotesk Image', folder: 'total-grotesk' },
    { src: './media/total-grotesk/total-specimen-scan-web-8.0.png', description: 'Total Grotesk Variable animation', folder: 'total-grotesk' },

    /* List of Common Misconceptions*/
    { src: './media/locm/locm-scan-54-55.png', description: 'List of Common Misconceptions scan', folder: 'locm' },
    { src: './media/locm/locm-scan-66-67.png', description: 'List of Common Misconceptions scan', folder: 'locm' },
    { src: './media/locm/locm-scan-102-103.png', description: 'List of Common Misconceptions scan', folder: 'locm' },
    { src: './media/locm/locm-scan-n-184.png', description: 'List of Common Misconceptions scan', folder: 'locm' },
    { src: './media/locm/locm-foto-2.0.jpg', description: 'List of Common Misconceptions Image', folder: 'locm' },

    /* 11 minutter*/
    { src: './media/visuell-identitet/11-minutter-1.0.mp4', description: '11 Minutter logo animation', folder: 'visuell-identitet' },
    { src: './media/visuell-identitet/11-minutter-dektop-1.0.jpg', description: '11 Minutter Image', folder: 'visuell-identitet' },
    { src: './media/visuell-identitet/11-minutter-web-3.0.png', description: '11 Minutter website', folder: 'visuell-identitet' },
    { src: './media/visuell-identitet/11-minutter-web-4.0.png', description: '11 Minutter website', folder: 'visuell-identitet' },
    { src: './media/visuell-identitet/11-minutter-dektop-2.0.jpg', description: '11 Minutter Image', folder: 'visuell-identitet' },
    { src: './media/visuell-identitet/11-minutter-mobile-1.0.jpg', description: '11 Minutter Image', folder: 'visuell-identitet' },

    /* Wuxia */
    { src: './media/redaksjonell-design/scan/tidsskrift-scan-10-11.jpg', description: 'Magazine scan', folder: 'redaksjonell-design' },
    { src: './media/redaksjonell-design/scan/tidsskrift-scan-24-25.jpg', description: 'Magazine scan', folder: 'redaksjonell-design' },
    { src: './media/redaksjonell-design/scan/tidsskrift-scan-30-31.jpg', description: 'Magazine scan', folder: 'redaksjonell-design' },
    { src: './media/redaksjonell-design/tidsskrift-foto-5.0.jpg', description: 'Magazine photo', folder: 'redaksjonell-design' },
    { src: './media/redaksjonell-design/scan/tidsskrift-scan-60-61.jpg', description: 'Magazine scan', folder: 'redaksjonell-design' },
    { src: './media/redaksjonell-design/scan/tidsskrift-scan-72-73.jpg', description: 'Magazine scan', folder: 'redaksjonell-design' },
    { src: './media/redaksjonell-design/scan/tidsskrift-scan-100-101.jpg', description: 'Magazine scan', folder: 'redaksjonell-design' },
    { src: './media/redaksjonell-design/tidsskrift-foto-9.0.jpg', description: 'Magazine photo', folder: 'redaksjonell-design' },

    /* Work in Progress */

    { src: './media/wip/wip-arrondis-5.0.png', description: 'Serif Work in Progress', folder: 'wip' },
    { src: './media/wip/wip-arrondis-1.0.png', description: 'Serif Work in Progress', folder: 'wip' },
    { src: './media/wip/wip-arrondis-2.0.png', description: 'Serif Work in Progress', folder: 'wip' },
    { src: './media/wip/wip-arrondis-4.0.png', description: 'Serif Work in Progress', folder: 'wip' },
    { src: './media/wip/wip-panneau-scan-2.0.png', description: 'Groteque Work in Progress', folder: 'wip' },
    { src: './media/wip/wip-panneau-scan-1.0.png', description: 'Groteque Work in Progress', folder: 'wip' },
    { src: './media/wip/wip-panneau-scan-3.0.png', description: 'Monospaced Groteque Work in Progress', folder: 'wip' }

];

let currentImageIndex = 0;
let currentFolder = images[0].folder; // Track current folder
const displayedImages = [];
let hasClicked = false; // Flag to track if user has clicked

const maxImages = 10; // Maximum number of images to display at once

function removeOldestImage() {
    if (displayedImages.length >= maxImages) {
        const oldestImage = displayedImages.shift(); // Remove and get the first image (oldest)
        oldestImage.element.remove(); // Remove the image element from the DOM
    }
}

function updateDescription() {
    const currentImage = images[currentImageIndex];
    const categoryDetails = imageCategories[currentImage.folder];
    document.getElementById('project-name').innerText = categoryDetails.name;
    document.getElementById('project-institution').innerText = categoryDetails.institution;
    document.getElementById('project-year').innerText = categoryDetails.year;
    document.getElementById('project-description').innerText = categoryDetails.description;
    document.querySelector('.description').style.visibility = 'visible'; // Make the description visible
}



function removeImagesFromLastFolder() {
    // Remove all previously displayed images from the last folder
    displayedImages.forEach(image => {
        if (image.folder === currentFolder) {
            image.element.remove(); // Remove the image element from the screen
        }
    });

    // Clear the displayedImages list to remove old images
    displayedImages.length = 0;
}

function createFixedImage(event) {
    const newImage = images[currentImageIndex];
    
    // If we are changing folders, remove old images first
    if (newImage.folder !== currentFolder) {
        removeImagesFromLastFolder();
        currentFolder = newImage.folder; // Set new folder
        updateDescription(); // Update the description for the new folder
    }

    // Create the new image or video
    let newFixedElement;
    if (newImage.src.endsWith('.mp4')) {
        newFixedElement = document.createElement('video');
        newFixedElement.src = newImage.src;
        newFixedElement.className = 'fixed-video';
        newFixedElement.autoplay = true;
        newFixedElement.loop = true;
        newFixedElement.muted = true; // Required for autoplay
        newFixedElement.playsInline = true; // Ensure inline play on mobile
    } else {
        newFixedElement = document.createElement('img');
        newFixedElement.src = newImage.src;
        newFixedElement.alt = newImage.description;
        newFixedElement.className = 'fixed-image';
        newFixedElement.loading = 'lazy'; // Enable lazy loading
    }
    
    {if (newImage.src === './media/wip/wip-arrondis-5.0.png') {
        newFixedElement.classList.add('double-size');}
    }

    // Position the element
    newFixedElement.style.left = `${event.pageX}px`;
    newFixedElement.style.top = `${event.pageY}px`;

    // Remove the oldest image if there are already 10 images
    removeOldestImage();

    document.body.appendChild(newFixedElement);

    // Store the element and its folder in the displayed elements list
    displayedImages.push({
        element: newFixedElement,
        folder: newImage.folder
    });

    // Move to the next item in the images array
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

document.addEventListener('click', (event) => {
    if (!hasClicked) {
        // The first click: Show description and start the image cycle
        hasClicked = true;
        updateDescription();
    }

    // Deselect text if there is an active selection and the user clicks outside the selected area
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && !event.target.closest('header, footer, .description') && !event.target.isContentEditable) {
        selection.removeAllRanges(); // Deselect text when clicking outside of the text area
    }

    if (!event.target.closest('header, footer, .description')) {
        createFixedImage(event); // Create a new image or video when clicking anywhere else
    }
});
