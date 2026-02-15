// document.getElementById('current-date').textContent = new Date().toLocaleDateString();
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const todayDate = new Date().toLocaleDateString("en-US", dateOptions);
const desktopDateElement = document.getElementById("current-date");
if (desktopDateElement) {
  desktopDateElement.textContent = todayDate;
}
const mobileDateElement = document.getElementById("mobile-date");
if (mobileDateElement) {
  mobileDateElement.textContent = todayDate;
}


// SCROLL & MENU LOGIC
const stickyNav = document.getElementById("sticky-nav");
const stickyLogo = document.getElementById("sticky-logo");
const desktopMenu = document.getElementById("desktop-menu");
const hamburgerBtn = document.getElementById("hamburger-btn");
const drawer = document.getElementById("side-drawer");
const overlay = document.getElementById("mobile-menu-overlay");
const stickySubscribe = document.getElementById("sticky-subscribe");
const stickyLogin = document.getElementById('sticky-login'); // Notun add

window.addEventListener("scroll", () => {
  const isMobile = window.innerWidth < 768; // Mobile check

  if (window.scrollY > 160) {
    // Sticky Nav show kora (Mobile + Desktop)
    stickyNav.classList.remove("hidden");

    stickyLogo.classList.remove("hidden");
    setTimeout(() => stickyLogo.classList.remove("opacity-0"), 10);

    desktopMenu.classList.add("hidden");
    hamburgerBtn.classList.remove("hidden");

    // Scroll e Login & Subscribe dekhabe
    if (stickySubscribe) {
      stickySubscribe.classList.remove("hidden");
      stickySubscribe.classList.add("inline-block");
    }
    if (stickyLogin) {
      stickyLogin.classList.remove("hidden");
      stickyLogin.classList.add("inline-block");
    }
    
  } else {
    // Scroll 160 er niche gele logic
    if (isMobile) {
      stickyNav.classList.add("hidden");
    } else {
      stickyNav.classList.remove("hidden"); // Desktop e menu thakbe
      stickyLogo.classList.add("opacity-0");
      stickyLogo.classList.add("hidden");
      desktopMenu.classList.remove("hidden");
      hamburgerBtn.classList.add("hidden");
    }

    // Scroll up korle Login & Subscribe hide hobe
    if (stickySubscribe) {
      stickySubscribe.classList.add("hidden");
      stickySubscribe.classList.remove("inline-block");
    }
    if (stickyLogin) {
      stickyLogin.classList.add("hidden");
      stickyLogin.classList.remove("inline-block");
    }
  }
});

function toggleMenu() {
  if (drawer.classList.contains("translate-x-full")) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }
}



// SEARCH OVERLAY FUNCTIONALITY
const searchOverlay = document.getElementById("search-overlay");
const searchContainer = document.getElementById("search-container");
const searchInput = searchOverlay.querySelector("input");

function openSearch() {
  // 1. Show Overlay
  searchOverlay.classList.remove("opacity-0", "invisible");
  searchOverlay.classList.add("opacity-100", "visible");

  // 2. Scale Up Animation for Container
  searchContainer.classList.remove("scale-95");
  searchContainer.classList.add("scale-100");

  // 3. Prevent Body Scroll
  document.body.style.overflow = "hidden";

  // 4. Focus Input automatically after a slight delay
  setTimeout(() => {
    searchInput.focus();
  }, 100);
}

function closeSearch() {
  // 1. Hide Overlay
  searchOverlay.classList.remove("opacity-100", "visible");
  searchOverlay.classList.add("opacity-0", "invisible");

  // 2. Scale Down Animation
  searchContainer.classList.remove("scale-100");
  searchContainer.classList.add("scale-95");

  // 3. Restore Body Scroll
  document.body.style.overflow = "auto";
}

// Close on ESC Key Press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSearch();
  }
});