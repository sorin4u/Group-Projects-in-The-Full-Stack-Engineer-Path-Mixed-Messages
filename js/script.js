function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

const horoscope = {
  aries: [
      "Mar 5, 2025 - Switch things up today, Aries. Step away from routine and explore new ideas and dreams instead of sticking to commitments. Question everything and have some lively debates. Make sure to inject some fun into your day. Grab some friends and head outdoors for an activity that gets you moving and chatting about life. Fresh air and good company are just what you need. Remember, the goal is to enjoy yourself and break from the norm. Embrace spontaneity, and let your curiosity guide you to new experiences.",
      "Mar 6, 2025 - You might get some disappointing news today, Aries. It could be about a temporary setback with one of your projects. Although it’s frustrating, remember it's only a bump in the road. You’ll probably need to handle some minor details that aren't your favorite, but it’s important to push through. Try to stay focused and not let these frustrations take over. Keep your eye on the bigger picture and remind yourself that you’re still making progress. This is just a small detour on your path to success. Stay positive, and you'll navigate through this with resilience.",
      "Mar 7, 2025 - It seems like the universe has some exciting updates swirling around your career path. Whether it's a well-deserved raise or some intriguing new benefits, stay alert for any information coming your way. This good news might involve investments or other financial perks that go beyond your usual paycheck. If you've been hesitating on signing contracts or tackling legal paperwork, today is the day to go for it. The stars are aligned in your favor, so make the most of this auspicious energy. Keep your ears open and be ready to act—good things are headed your way."
  ]
};


let rondemTreeDaysHoroscope = [""];

function generateRandomHoroscope() {
  rondemTreeDaysHoroscope = []; // Clear previous generateRandomHoroscope

  // Iterate over the object
  for (let add in horoscope ){
    let optionIdx = generateRandomNumber(horoscope[add].length);

    // use the object's adderties to customize the message being added to rondemTreeDaysHoroscope  
    switch (add) {
      case 'aries':
        var html = generateHTML(`Aries Horoscope for the: ${horoscope[add][optionIdx]}`);
    
        // Log and inject
        console.log(html);
        document.querySelector('#app').innerHTML = html;

        break;
      default:
        rondemTreeDaysHoroscope.push('There is not enough info.');
    }
  }

  formatWisdom(rondemTreeDaysHoroscope);
}

function generateHTML(item) {
  let html = '<h5>' + item + '</h5>';

  // Wrap item in a div and push to rondemTreeDaysHoroscope
  return '<div id="box">' + html + '</div>';
}

function formatWisdom(wisdom) {
 
  const formatted = wisdom.join('\n');
  console.log(formatted);
}

// Add event listener to the button
document.getElementById('generateRandomHoroscope').addEventListener('click', generateRandomHoroscope);

