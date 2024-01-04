function displayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b50343183o490adctc2bad01bf0a4ae0";
  let prompt = `User Instructions are to generate a poem about ${instructionsInput.value}`;
  let context = "You are an inspirational poem expert and love to write short poems. Your task is to generate short 4 line poems in basic HTML and separate each line with a </br>. Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> 🕙Generating a poem about ${instructionsInput.value} </div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);
