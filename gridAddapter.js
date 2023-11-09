document.addEventListener("DOMContentLoaded", function() {
    const foldersData = [
        { name: "My Blog", icon: "/Img/Blog.png" },
        { name: "My Projects", icon: "/Img/Projects.png" },
        { name: "My Albums", icon: "/Img/img.png" },
        { name: "My Library", icon: "/Img/Library.png" },
        { name: "My Music", icon: "/Img/icons8-music-library-50.png" }
    ];
    const desktop = document.querySelector(".desktop");
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const numColumns = Math.floor(screenWidth / 100);
    const numRows = Math.floor(screenHeight / 100);

    let folderCounter = 1;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            desktop.appendChild(gridItem);
            
            if (folderCounter <= foldersData.length) {
                const folderData = foldersData[folderCounter - 1];
                const folder = document.createElement("div");
                folder.classList.add("folder");
                folder.innerHTML = `
                    <img src="${folderData.icon}" alt="${folderData.name} Icon">
                    <p>${folderData.name}</p>
                `;
                gridItem.appendChild(folder);
                folderCounter++;
            }
        }
    }
    

    
    // Define containers here, after the grid items have been created
    const containers = Array.from(document.querySelectorAll('.grid-item'));

    // Initialize Dragula
    const dragulaInstance = dragula(containers, {
        moves: function (el) {
            return el.classList.contains('folder'); 
        },
        revertOnSpill: true,
        removeOnSpill: false
    });
});
