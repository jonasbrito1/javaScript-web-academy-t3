/*1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
} 

  randomize.addEventListener('click', result);

function result() {

    const originalStory = 'Certo dia eu estava caminhando na floresta, então :insertw: avistou um pássaro azul de :insertx:. Quando chegou num restaurante :inserty:, eles começaram a jogar :insertw1: e depois :insertz:. :insertw2: não sabia o que fazer, mas não ficou surpreso — :insertw: pesa :insertw3:, e estava muito quente.';
    
    const insertw = []

    const insertw1 = ['futebol', 'xadrez', 'ping pong']

    const insertw2 = ['Zeca pagodinho', 'Arnaldo Antunes', 'Nelson Mandela']

    const insertw3 = ['100kg', '30kg', '50kg']

    const insertx = ['Melô do Jonas', 'Suco de acerola', 'Sorvete de banana'];

    const inserty = ['italiano', 'de sopa quente', 'de salada de frutas'];

    const insertz = ['lançaram um foguete para marte', 'comeram pão com tucumã', 'o pássaro azul se transformou no Darth Vader'];

    let storyText = originalStory; 

    if(customName.value !== '') {
      const name = customName.value;
      storyText = storyText.replace(/:insertw:/g, name);
  }
    storyText = storyText.replace(':insertw1:', randomValueFromArray(insertw1));
    storyText = storyText.replace(':insertw2:', randomValueFromArray(insertw2));
    storyText = storyText.replace(':insertw3:', randomValueFromArray(insertw3));
    storyText = storyText.replace(':insertx:', randomValueFromArray(insertx));
    storyText = storyText.replace(':inserty:', randomValueFromArray(inserty));
    storyText = storyText.replace(':insertz:', randomValueFromArray(insertz));

  story.textContent = storyText;
  story.style.visibility = 'visible';
}
/*const customName = document.getElementById('customname');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');

    function randomValueFromArray(array) {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    }

    randomize.addEventListener('click', result);

    function result() {
      let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

      const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
      const inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
      const insertz = [
        'spontaneously combusted',
        'melted into a puddle on the sidewalk',
        'turned into a slug and crawled away'
      ];

      if (customName.value !== '') {
        const name = customName.value;
        storyText = storyText.replace(/:insertx:/g, name);
      }

      if (document.getElementById('uk').checked) {
        const weight = Math.round(300);
        const temperature = Math.round(94);

        storyText = storyText.replace('94 fahrenheit', `${temperature} celsius`);
        storyText = storyText.replace('300 pounds', `${weight} stone`);
      }

      storyText = storyText.replace(':insertx:', randomValueFromArray(insertx));
      storyText = storyText.replace(':inserty:', randomValueFromArray(inserty));
      storyText = storyText.replace(':insertz:', randomValueFromArray(insertz));

      story.textContent = storyText;
      story.style.display = 'block';
    }*/