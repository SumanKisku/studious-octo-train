// Get the menu button element
const openButton = document.querySelector('#open-menu');
const closeButton = document.querySelector('#close-menu');

// Get the menu container element
const menuContainer = document.querySelector('#mobile-menu');


// Add click event listener to the menu button
openButton.addEventListener('click', () => {
    // Toggle the visibility of the menu container
    menuContainer.classList.toggle('hidden');
    console.log("clicked")
});
closeButton.addEventListener('click', () => {
    // Toggle the visibility of the menu container
    menuContainer.classList.toggle('hidden');
    console.log("clicked")
});
