const sectionHeroEl = document.querySelector(".section-hero");
const header = document.querySelector(".header");

export const obs = new IntersectionObserver(
function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
        header.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
        header.classList.remove("sticky");
    }
},
{
// In the viewport
root: null,
threshold: 0,
rootMargin: "-80px",
}).observe(sectionHeroEl);
