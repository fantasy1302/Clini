window.addEventListener("scroll", () => {
    let scroll = scrollY;
    const section = document.querySelector(".hero");
    section.style.backgroundSize = `${100 + (scroll * 0.1)}%`;

    if (scroll > 100) {
        section.style.filter = `blur(3px)`;
    } else {
        section.style.filter = `blur(0px)`;
    }
});
