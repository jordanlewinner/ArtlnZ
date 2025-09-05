// 🎉 Message de bienvenue dans la console
console.log("Bienvenue sur ArtInZ - Donnez vie à vos inspirations ✨");

// 🌟 Effet de texte qui s'écrit tout seul
function typeWriter(elementId, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Lancer l'effet sur un élément avec id="welcome"
window.addEventListener("load", () => {
  typeWriter("welcome", "Bienvenue chez ArtInZ ✨ Créativité et Inspiration !");
});

// 🌙 Bouton pour basculer entre mode clair/sombre
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// 🎨 Animation de clic sur tous les boutons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.9)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });
});

// ✨ Petites étoiles aléatoires qui apparaissent en fond
setInterval(() => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}, 500);
