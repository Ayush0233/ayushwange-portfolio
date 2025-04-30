// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


var final = `M 10 100 Q 500 100, 990 100`

var string = document.querySelector("#string")
var guitarAudio = document.getElementById("guitarAudio")

string.addEventListener("mousemove", (dets) => {
    path = `M 10 100 Q ${dets.x} ${dets.y}, 990 100`
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.5,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave", (dets) => {
    // guitarAudio.play();
    gsap.to("svg path", {
        attr: { d: final },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })


})


var fixedImage = document.querySelector("#fixedImage")

var fixedImageC = document.querySelector("#project-card-row")

fixedImageC.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block"
})
fixedImageC.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none"
})

var mainProject = document.querySelectorAll(".main-project")

mainProject.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixedImage.style.background = `url(${image}) center center/cover`
    })
})

var container = document.querySelector("#container");
var cursor = document.querySelector("#cursor")

container.addEventListener("mousemove", function (dets) {
    // console.log(dets)
    gsap.to(cursor, {
        x: dets.x - "20",
        y: dets.y - "15"
    })
})


var link = document.querySelectorAll(".nav-item , #heading>h4, .btn")
link.forEach((anchor) => {
    anchor.addEventListener('mouseover', () => {
        // Increase the cursor size on hover
        cursor.style.background = "#f8045173"
        gsap.to(cursor, {
            scale: 5
        });


        //   cursor.style.transform = 'scale(1.5)'; // adjust the scale value to your liking
    });
    anchor.addEventListener('mouseout', () => {
        // Decrease the cursor size on hover
        cursor.style.background = "#f80451"
        gsap.to(cursor, {
            scale: 1
        });
    });
})


// for increasing size of cursor while overing over the video elements
var link = document.querySelectorAll(".show-project, #clients>div")
link.forEach((anchor) => {
    anchor.addEventListener('mouseover', () => {
        // Increase the cursor size on hover
        cursor.style.background = "#f8045173"
        gsap.to(cursor, {
            scale: 15
        });

    });
    anchor.addEventListener('mouseout', () => {
        // Decrease the cursor size on hover
        cursor.style.background = "#f80451"
        gsap.to(cursor, {
            scale: 1
        });
    });
})


// ===========================================gsap animations==========================================
var t1 = gsap.timeline()

t1.from("#intro h2", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    rotateX: 90
})

t1.to(".myName span", {
    opacity: 1,
    x: 30,
    duration: 0.5,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
})

// t1.from("#list img", {
//     scale: 0,
//     duration: 0.2,
//     stagger: 0.2
// })
// gsap.from(".nav-link", {
//     opacity: 0,
//     x: 30,
//     duration: 0.2,
//     delay: 1,
//     stagger: 0.1
// })

// t1.from("#introSkill", {
//     x: -50,
//     opacity: 0,
//     duration: 0.4,
// })
t1.from("#intro #profileImage2", {
    scale:0,
    duration: 0.2,
    // stagger: 0.2,

})
t1.from("#intro img", {
    y: -300,
    duration: 0.2,
    stagger: 0.2,

})

t1.from(".location", {
    y: 50,
    opacity: 0,
    duration: 0.4
})

t1.from("#intro button", {
    y: -30,
    x: -30,
    scale: 0,
    rotateY: 360,
    duration: 0.6
})

t1.to("#intro p", {
    y: 30,
    repeat: -1,
    duration: 1,
    yoyo: true
})
// t1.to("#introSkill .mask", {
//     y: -36,
//     duration: 2,
//     repeat: -1,
//     yoyo: true
// })

// gsap.from("#about #heading h4",{
//     scale:0,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"#heading h4",
//         scroller:"#main",
//         markers:true,
//         start:"top 80%",
//         // pin:true
//     }
// })
gsap.from("#description h2, #description li", {
    y: 40,
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#description h2",
        scroller: "#main",
        // markers:true,
        start: "top 65%",
        end: "top 62%",
        scrub: 1
        // pin:true
    }
})
gsap.from("#sideDesc h5", {
    y: 40,
    x: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#sideDesc h5",
        scroller: "#main",
        // markers:true,
        start: "top 65%",
        end: "top 62%",
        scrub: 1
    }
})
gsap.from("#description button", {
    y: -30,
    x: -30,
    scale: 0,
    rotateY: 360,
    duration: 0.5,

    scrollTrigger: {
        trigger: "#description button",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 75%",
        scrub: 1
        // pin:true
    }
})

gsap.from("#clients div", {
    y: 10,
    scale: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#clients div",
        scroller: "#main",
        // markers:true,
        start: "top 85%",
        end: "top 75%",
        scrub: 1
    }
})

gsap.from("#services .col-md-6", {
    y: 30,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    rotateX: -90,
    scrollTrigger: {
        trigger: "#services .col-md-6",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 75%",
        scrub: 1
    }
})

gsap.from(".resumeHeading h1", {
    rotateX: 90,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".resumeHeading h1",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1

    }
})

gsap.from(".resumeHeading .education-card", {
    scale: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".education .education-card",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 50%",
        scrub: 1
    }

})

gsap.from(".resumeHeading .progressCard", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".resumeHeading .progressCard",
        scroller: "#main",
        // markers:true,
        start: "top 65%",
        end: "top 60%",
        scrub: 1
    }

})

gsap.from(".progress-bar", {
    width: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".progress-bar",
        scroller: "#main",
        start: "top 70%",
        // markers:true,
        end: "top 68%",

    }
})
gsap.from(".main-project", {
    y: 30,
    scale: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".main-project",
        scroller: "#main",
        // markers:true, 
        start: "top 120%",
        end: "top 20%",
        scrub: 2,

    }
})
gsap.from(".show-project",{
    y: 30,
    scale: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".show-project",
        scroller: "#main",
        // markers:true,
        start: "top 120%",
        end: "top 20%",
        scrub: 2,
    }
})

gsap.from(".contactHeading h1", {
    rotateX: 90,
    duration: 0.2,
    scrollTrigger: {
        trigger: ".contactHeading",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 50%",
        scrub: 1
        // scrub:1,
    }
})

gsap.from(".contactHeading ul li", {
    x: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".contactHeading ul li",
        scroller: "#main",
        start: "top 70%",
        // markers:true,
        end: "top 50%",
        scrub: 1
    }
})

gsap.from(".contactHeading div", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".contactHeading div",
        scroller: "#main",
        // markers:true,
        start: "top 70%",
        end: "top 50%",
        scrub: 1
    }
})