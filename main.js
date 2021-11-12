// Scripting
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

window.scroll(0, document.documentElement.scrollHeight) // Scroll to bottom as soon as page loads

function rotate() {
  gsap.to("#rocket", {
    rotation: 3,
    duration: 0.1,
    repeat: 29
    });
  }

function rocketFly() {
  gsap.to("#rocket", {
    scrollTrigger: {
      trigger: "#rocket",
      start: "top 50%",
      markers:true,
      pin: true,
    },
    y: -13000,
  })
}

function launch() {              // funtion called when clicking begin button to scroll smoothly down to budget section
  rotate()
  //setTimeout(() => {  gsap.to("#rocket", {duration: 6, rotation: 0,  y: -3600}); }, 3000);
  setTimeout(() => {  gsap.to("#rocket", {duration: 0.6, ease: "none", rotation: 0,  y: -400}); }, 3000);
  setTimeout(() => {  gsap.to(window, {duration: 5, scrollTo:{y:"#whatIsCrypto"}});  }, 3600);
  setTimeout(() => {  document.getElementById("rocket").style.visibility = "hidden" , 
                      document.getElementById("rocket2").style.visibility = "visible" }, 3600);

}

gsap.utils.toArray(".cloudsLeft").forEach((cloud) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cloud,
      start: "100px 80%",
      end: "bottom 100px",
      scrub: 1,
    }
  });
    tl.to(cloud, {
    x: 300,
  })
})

gsap.utils.toArray(".cloudsRight").forEach((cloud) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cloud,
      start: "100px 80%",
      end: "bottom 100px",
      scrub: 1,
    }
  });
    tl.to(cloud, {
    x: -300,
  })
})

gsap.to(".plane", {
  scrollTrigger: {
    trigger: ".plane",
    start: "top 0%",
    scrub: 1,
  },
  x: -2300,
  y: 200,
})

gsap.to(".satellite", {
  scrollTrigger: {
    trigger: ".satellite",
    start: "top 0%",
    scrub: 1,
  },
  x: 2300,
  y: 300,
})

//  NFT Drawer Script

const drawer = document.querySelector('.NFTDrawer'); 
const openButton = drawer.nextElementSibling;
const closeButton = drawer.querySelector('sl-button[type="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());