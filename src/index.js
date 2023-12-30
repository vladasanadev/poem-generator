function generatePoem(event) {
  event.preventDefault();

  new Typewriter('#typewriter', {
    strings: ["Shy of the gatepost we reach for the stars"],
    autoStart: true,
    delay: 1,
    cursor:"",
  });

  
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit',generatePoem);