const lenis = new Lenis({
    autoRaf: true,
});

lenis.on('scroll', (e) => {
    console.log(e);
});
const pages = [page1, page2, page3, page4];

if (window.innerWidth > 799) {         // Hide GSAP Cursor on Mobiles and Tablets
    pages.forEach(page => {
        page.addEventListener("mousemove", (dets) => {
            gsap.to(cursor, {
                x: dets.x,
                y: dets.y,
                duration: 0.18,
            });
        });
    });
} else {
    cursor.style.display = "none"; 
}

let mm = gsap.matchMedia();     // Desktop GSAP Code
mm.add("(min-width: 800px)", () => {
    const model = document.querySelector("#model-1");    
    const secondModel = document.querySelector("#model-2");
    const thirdModel = document.querySelector("#model-4");
    const page1 = document.querySelector("#page1");
    const page2 = document.querySelector("#page2");
    const page3 = document.querySelector("#page3");
    const page4 = document.querySelector("#page4");
    const cursor = document.querySelector("#cursor");
    const heading1 = document.querySelectorAll("span");
    const heading2 = document.querySelectorAll("#heading2");
    const heading3 = document.querySelectorAll("#heading3");
    const navbar = document.querySelector("#navbar");
    const menu = document.querySelector("#navbar i");
    const close = document.querySelector("#sliding-nav i");

    const pages = [page1, page2, page3, page4];
pages.forEach(page => {
    page.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.3,
            ease:"power.out"
        });
    });
});

    gsap.to(model, {
        x: "-20vw",
        y: "90vh",
        duration: 3,
        delay: 1,
        rotate: "360deg",
        ease: "power.out",
        scrollTrigger: {
            trigger: model,
            scroller: "body",
            start: "top top",
            end: "bottom -30%",
            scrub: 3
        }
    });
    
    gsap.to(secondModel, {
        x: "10vw",
        y: "110vh",
        duration: 4,
        delay: 7,
        ease: "power.out",
        scrollTrigger: {
            trigger: secondModel,
            scroller: "body",
            start: "top top",
            end: "bottom -10%",
            scrub: 3,
        }
    });
    
    gsap.from(heading1, {
        opacity: 0,
        y: -30,
        stagger: 1,
        duration: 2,
        delay: 1,
        ease: "power.out",
        scrub: 3
    });
    
    gsap.from(heading2, {
        x: -200,
        opacity: 0,
        stagger: 1,
        duration: 2,
        delay: 1,
        scrollTrigger: {
            trigger: page3,
            scroller: "body",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2
        }
    });
    
    gsap.to(thirdModel, {
        left: "5%",
        duration: 2,
        delay: 1,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: thirdModel,
            scroller: "body",
            start: "top top",
            end: "bottom -50%",
            scrub: 3
        }
    });
    
    gsap.from(heading3, {
        y: 18,
        stagger: 0.3,
        duration: 2,
        delay: 1,
        opacity: 1,
        ease: "power.out",
        scrollTrigger: {
            trigger: heading3,
            scroller: "body",
            start: "top 90%",
            end: "bottom 50%",
            scrub: 2
        }
    });
    
    gsap.to("#navbar", {
        backgroundColor: "rgba(0,0,0,0.6)",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page2",
            start: "top 50%",
            end: "bottom top",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.to("#page4 h2", {
        bottom:"-10%"
    });
    const tl = gsap.timeline({ paused: true });

tl.to("#sliding-nav", {
    right: "0",
    duration: 0.5,
    ease: "power.out"
})
.from("#sliding-nav a", {
    x: 200,
    duration: 0.3,
    stagger: 0.3,
    opacity: 0,
    ease: "power.out"
})
.from("#sliding-nav i", {
    opacity: 0,
    duration: 0.5,
    delay: 0.3
});

menu.addEventListener("click", () => tl.play());
close.addEventListener("click", () => tl.reverse());
});

mm.add("(max-width: 767px)", () => {   // Mobile GSAP Code
    const lenis = new Lenis({
        autoRaf: true,
    });
    
    lenis.on('scroll', (e) => {
        console.log(e);
    });
    
    const model = document.querySelector("#model-1");
    const secondModel = document.querySelector("#model-2");
    const thirdModel = document.querySelector("#model-3");
    const forthModel = document.querySelector("#model-4");
    const page1 = document.querySelector("#page1");
    const page2 = document.querySelector("#page2");
    const page3 = document.querySelector("#page3");
    const page4 = document.querySelector("#page4");
    const cursor = document.querySelector("#cursor");
    const heading1 = document.querySelectorAll("span");
    const heading2 = document.querySelectorAll("#heading2");
    const heading3 = document.querySelectorAll("#heading3");
    const navbar = document.querySelector("#navbar");
    const menu = document.querySelector("#navbar i");
    const close = document.querySelector("#sliding-nav i");

    

    gsap.to(model, {
       x:"-20vw",
        y:"85vh",
        left: "70%",
        duration: 3,
        delay: 1,
        rotate: "360deg",
        ease: "power.out",
        scrollTrigger: {
            trigger: model,
            scroller: "body",
            start: "top top",
            end: "bottom -30%",
            scrub: 3
        }
    });
    
    gsap.to(secondModel, {
        top: "155%",
        left: "0%",
        duration: 4,
        delay: 2,
        ease: "power.out",
        scrollTrigger: {
            trigger: secondModel,
            scroller: "body",
            start: "top top",
            end: "bottom -10%",
            scrub: 3,
        }
    });
    gsap.from(heading1, {
        opacity: 0,
        y: -30,
        stagger: 1,
        duration: 2.5,
        delay: 1,
        ease: "power.out",
        scrub: 3
    });

    gsap.from(heading2, {
        left: "-62%",
        opacity: 0,
        stagger: 1,
        duration: 3,
        delay: 1.5,
        scrollTrigger: {
            trigger: heading2,
            scroller: "body",
            start: "top 50%",
            end: "bottom 30%",
            scrub: 2
        }
    });
    
    
    gsap.from(heading3, {
        y: "-80%",
        stagger: 0.3,
        duration: 2,
        delay: 1,
        opacity: 1,
        ease: "power.out",
        scrollTrigger: {
            trigger: heading3,
            scroller: "body",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 2
        }
    });
    gsap.to("#page4 h2", {
        bottom: ""
    });
    
    gsap.to("#navbar", {
        backgroundColor: "rgba(0,0,0,0.6)",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page2",
            start: "top 50%",
            end: "bottom top",
            toggleActions: "play none none reverse"
        }
    });
    const tl = gsap.timeline({ paused: true });

    tl.to("#sliding-nav", {
        right: "0",
        duration: 0.5,
        ease: "power.out"
    })
    .from("#sliding-nav a", {
        x: 200,
        duration: 0.3,
        stagger: 0.3,
        opacity: 0,
        ease: "power.out"
    })
    .from("#sliding-nav i", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3
    });
    
    menu.addEventListener("click", () => tl.play());
    close.addEventListener("click", () => tl.reverse());

});

