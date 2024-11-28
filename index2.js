function showCharacterInfo(name, role, image, description) {
    const modal = document.getElementById("character-modal");
    document.getElementById("modal-name").textContent = name;
    document.getElementById("modal-role").textContent = role;
    document.getElementById("modal-image").src = image;
    document.getElementById("modal-description").textContent = description;
    modal.classList.remove("hidden");
  }
  
  function closeModal() {
    const modal = document.getElementById("character-modal");
    modal.classList.add("hidden");
  }

  









let currentIndex2 = 0;

function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    const imageWidth = images[0].clientWidth;

    // Calcular el nuevo índice
    currentIndex2 += direction;

    // Limitar el índice dentro del rango de imágenes
    if (currentIndex2 < 0) {
        currentIndex2 = images.length - 1;
    } else if (currentIndex2 >= images.length) {
        currentIndex2 = 0;
    }

    // Desplazar el contenedor de imágenes
    carousel.style.transform = `translateX(-${currentIndex2 * imageWidth}px)`;
}






// Información de los personajes
const characters = [
    {
        name: "Hero 1",
        description: "This is the brave hero who leads the story.",
        image: "character1.jpg",
        link: "character1.html"
    },
    {
        name: "Villain 1",
        description: "The cunning villain plotting against the hero.",
        image: "villain1.jpg",
        link: "villain1.html"
    },
    {
        name: "Hero 2",
        description: "A strong ally who helps the hero on their journey.",
        image: "hero2.jpg",
        link: "hero2.html"
    }
];

let currentIndex = 0;

// Referencias a elementos HTML
const characterImage = document.getElementById("character-image");
const characterName = document.getElementById("character-name");
const characterDescription = document.getElementById("character-description");
const characterLink = document.getElementById("character-link");

// Función para cambiar el personaje
function changeCharacter(direction) {
    currentIndex += direction;

    // Ciclar el índice
    if (currentIndex < 0) {
        currentIndex = characters.length - 1;
    } else if (currentIndex >= characters.length) {
        currentIndex = 0;
    }

    // Actualizar contenido
    const character = characters[currentIndex];
    characterImage.src = character.image;
    characterName.textContent = character.name;
    characterDescription.textContent = character.description;
    characterLink.href = character.link;
}





        
        
        // Función para alternar la visibilidad del menú de usuario
function toggleUserMenu() {
    const userInfo = document.getElementById('user-info');
    userInfo.classList.toggle('active');
}

// Función de cierre de sesión (puedes ajustarla según lo que necesites)
function logout() {
    // Aquí puedes agregar el código para cerrar sesión
    alert("Has cerrado sesión.");
}

// Función para alternar el menú hamburguesa
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
