// Scripting
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger); // registering the gsap plugins 

window.scroll(0, document.documentElement.scrollHeight) // Scroll to bottom as soon as page loads

function rotate() { // function to rotate rocket clockwise and counterclockwise 29 times to simulate taking off
  gsap.to("#rocket", {
    rotation: 3,
    duration: 0.1,
    repeat: 29
    });
  }

function launch() {              // funtion called when clicking begin button to scroll smoothly down to budget section
  rotate()

  setTimeout(() => {  gsap.to("#rocket", {duration: 0.6, ease: "none", rotation: 0,  y: -400}); }, 3000);
  setTimeout(() => {  gsap.to(window, {duration: 5, scrollTo:{y:"#whatIsCrypto"}});  }, 3600);
  setTimeout(() => {  document.getElementById("rocket").style.visibility = "hidden" , 
                      document.getElementById("rocket2").style.visibility = "visible" }, 3600);

}

gsap.utils.toArray(".cloudsLeft").forEach((cloud) => { // translating each cloud in cloudsLeft class left along x axis
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

gsap.utils.toArray(".cloudsRight").forEach((cloud) => { // translating each cloud in cloudsRight class right along x axis
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

// I know this is not efficient but I could not figure out a way to differentiate between the clouds to make them go opposite directions

gsap.to(".plane", { // script to move plane when it is in the viewport
  scrollTrigger: {
    trigger: ".plane",
    start: "top 0%",
    scrub: 1,
  },
  x: -2300,
  y: 200,
})

gsap.to(".satellite", { // script to move satellite when it is in the viewport
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
