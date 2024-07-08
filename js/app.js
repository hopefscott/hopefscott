// NAV TOGGLE
const nav = document.querySelector("nav");
const openNav = document.querySelector(".open-menu");
const closeNav = document.querySelector(".close-menu");

openNav.addEventListener("click", () => {
    nav.classList.add("menu-toggle");
    nav.style.transform = "translateX(0%);";
});
closeNav.addEventListener("click", () => {
    nav.classList.remove("menu-toggle");
});

// FOOTER YEAR
let footerYear = new Date();
document.querySelector("footer #year").textContent = footerYear.getFullYear();

// CONTENT SWITCH
// navLinks
let navLinks = document.querySelectorAll("nav a");
const heroSection = document.querySelector("#hero");
const projectsSection = document.querySelector("#projects");
const contactSection = document.querySelector("#contact");
let current = "current";

navLinks.forEach(
    (c) =>
        (c.onclick = (e) => {
            navLinks.forEach((c) =>
                c.classList[e.target == c ? "toggle" : "remove"](current)
            );

            let containerId = e.target.textContent;
            containerId = containerId.toLowerCase();

            if (containerId === "home") {
                document.querySelector("#hero").style.display = "flex";
                document.querySelector("#about").style.display = "none";
                document.querySelector("#projects").style.display = "none";
                document.querySelector("#contact").style.display = "none";
                document.querySelector("body").style.background = "#2d2f33";
            } else if (containerId === "about") {
                document.querySelector("#hero").style.display = "none";
                document.querySelector("#about").style.display = "flex";
                document.querySelector("#projects").style.display = "none";
                document.querySelector("#contact").style.display = "none";
                document.querySelector("body").style.background = "#25262a";
            } else if (containerId === "projects") {
                document.querySelector("#hero").style.display = "none";
                document.querySelector("#about").style.display = "none";
                document.querySelector("#projects").style.display = "flex";
                document.querySelector("#contact").style.display = "none";
                document.querySelector("body").style.background = "#25262a";
            } else {
                document.querySelector("#hero").style.display = "none";
                document.querySelector("#about").style.display = "none";
                document.querySelector("#projects").style.display = "none";
                document.querySelector("#contact").style.display = "block";
                document.querySelector("body").style.background = "#25262a";
            }
        })
);
