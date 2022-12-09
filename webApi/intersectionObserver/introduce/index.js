






const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");

  createObserver();
}, false);




const createObserver = () => {

  const observerCb = (changes) => {
    console.log(changes, 'changes');
  
    for (const change of changes) {
      const {
        time,
        rootBounds,
        boundingClientRect,
        intersectionRatio,
        intersectionRect,
        target
      } = change;
      console.log(time);
      console.log(rootBounds);
      console.log(boundingClientRect);
      console.log(intersectionRatio);
      console.log(intersectionRect);
      console.log(target);
    }
  }

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
  
    for (let i=1.0; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [.4]
  }

  const observer = new IntersectionObserver(observerCb, options)
  
  
  observer.observe(boxElement);
  
  // observer.unobserve(target);
  
  // Stop observing threshold events on all target elements.
  // observer.disconnect(); 
}
