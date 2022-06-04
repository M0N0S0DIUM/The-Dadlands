const textElement = document.getElementById('text')
const textElement2 = document.getElementById('dad')
const optionButtonsElement = document.getElementById('option-buttons')
const closeButtonElement = document.getElementById('btn1')
const backButtonElement = document.getElementById('btn2')

document.getElementById("btn1").addEventListener('click', () => quitGame())
document.getElementById("btn2").addEventListener('click', () => startGame())

let regex1 = /..........$/
let regex2 = /^../
let factions = ["Grill Dad", "Sports Dad", "Car Dad", "Vacation Dad", "Drama Dad", "The Craft Dad"]
let state = {}
let type = ""
let resultType = ""

//^Global variable zone^//

function startGame() {
  state = {}
  textElement2.innerText = "Dad Type: "
  showTextNode(0)
}
//sets empty state, resets dad type text element, shows the starting text node.

function quitGame() {
  javascript: window.close('', '_parent', '')
}
//closes game by closing browser window
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}
//shows next text node by finding it and putting it on screen, then replaces current buttons with new ones.
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
//selects options based on state(if the option requires a certain state).
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId === -1) {
    return startGame()
  }
  else if (nextTextNodeId === 999) {
    return quitGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId);
  type = JSON.stringify(state)
  typeConverter(type)
}
//takes option chosen, and sets the corosponding text/game over/quit game states. also assigns state if applicable, then converts that state to plaintext.
function typeConverter() {
  result = type.replace(regex2, "")
  resultType = result.replace(regex1, "")
  let dType = resultType.charAt(0).toUpperCase() + resultType.slice(1);
  textElement2.innerText = "Dad Type: " + dType
}
//converts the plaintext from above into a more pretty string.

/*function randDad() {
  let rand = Math.floor(Math.random() * 5)
switch (rand){
  case 0:
    setState: function() {
      state = {grillDad:true};
  }
  break;
  case 1:
    setState: function() {
      state = {sportsDad:true};
  }
  break;
  case 2:
    setState: function() {
      state = {carDad:true};
  }
      break;
  case 3:
    setState: function() {
      state = {vacationDad:true};
  }
      break;
  case 4:
    setState: function() {
      state = {dramaDad:true};
  }
      break;
  case 5:
    setState: function() {
      state = {craftDad:true};
  }
      break;
    }
  }
*/
//random dad logic (not working)
const textNodes = [
  {
    id: 0,
    text: 'Welcome to  The Dadlands!\n\nPopulated by all walks of dad,this place is told to hide the Mythical Remote.\n This fabled artifact could be the key to reuniting the Dads!\n Legend also suggests that the remote has the power to reshape the Dadlands entirely.\n Hopefully the deadbeats and the hardasses won\'t give you too much trouble. ',
    options: [
      {
        text: 'Play',
        nextText: 1
      },
      {
        text: 'Quit',
        nextText: 999
      }
    ]
  },
  {
    id: 1,
    text: 'In the land of Dads, you must choose your own found family...\nof Dads to assist you on your journey to find the Remote.',
    options: [
      {
        text: factions[0],
        setState: { grillDad: true },
        nextText: 2
      },
      {
        text: factions[1],
        setState: { sportsDad: true },
        nextText: 2
      },
      {
        text: factions[2],
        setState: { carDad: true },
        nextText: 2
      },
      {
        text: factions[3],
        setState: { vacationDad: true },
        nextText: 2
      },
      {
        text: factions[4],
        setState: { dramaDad: true },
        nextText: 2
      },
      {
        text: factions[5],
        setState: { craftDad: true },
        nextText: 2
      },
      /* {
         text: 'Random dad',
         setState:{},
         nextText: 998
       },
       {
         text: 'Back',
         nextText: 0
       }*/
    ]
  },
  {
    id: 2,
    text: 'You and the other Dads gathered around the communal dad bon fire,\na place for warmth, socializing, hotdogs,and smore\'s.\nyou look around and decide what to do.',
    options: [
      {
        text: 'Listen in on dad conversation',
        nextText: 3,
      },
      {
        text: 'Stoke the fire',
        nextText: -3
      },
      {
        text: 'Make a hotdog',
        nextText: -4
      }]
  },
  {
    id: -3,
    text: 'You notice the fire is dwindling slightly,\n so you pick up the gas can and haphazardly add fuel to the blaze. Fire licks everything around you, and you are engulfed in flames.',

  },
  {
    id: -4,
    text: 'you grab a weenie and begin roasting it over the flames.\nYou get distracted by the perfect performance of \"Stacey\'s Mom\" done by some other dads.\nYou scorch your weenie, and have to go to bed sad. '
  },
  {
    id: 3,
    text: 'You over hear some other Dads talking about the mythical whereabouts of the remote.\nThey are unsure of the exact location, but have some ideas about where to look.\nYou decide to gather the other Dads to investigate.\nWhere will you take them to search?',
    options: [
      {
        text: 'Hardware store',
        nextText: -5
      },
      {
        text: 'Fishin\' hole',
        nextText: 4
      },
      {
        text: 'Golf course',
        nextText: -6
      }
    ]
  },
  {
    id: -5,
    text: 'While searching the hardware store for the fabeled remote,\nthe entire display of heavy lumber topples over and crushes you and your band of Dads.'
  },
  {
    id: -6,
    text: 'You and the Dads decide to play a round of golf while you search.\nYou barely make it to the fourth hole before your entire party of Dads is fast asleep on the green.'
  },
  {
    id: 4,
    text: 'Gathered by the fishin\' hole, you and the other dads set to work.\nSome are fishing for clues,others are wading into the murky waters to get their hands on any hint.\nFinally, you find a rolled scroll in a bottle. It\'s a map! you\'ll need a vehicle to get to the distant destination, where do you go?',
    options: [
      {
        text: 'Steakhouse',
        nextText: 5
      },
      {
        text: 'Car show lot',
        nextText: -7
      },
      {
        text: 'Vacation dad yacht',
        nextText: -8
      }
    ]
  },
  {
    id: -7,
    text: 'You and your crowd of dads arrive at the huge parking lot. The car dads keep all the cars in working order for the celebrated car shows.\nWanting to make good time for your journey, you and the dads hop into the\n"Thrust SuperSonic Car".\nBreaking the sound barrier, and quickly reaching speeds over 700 mph, you crash the car almost immediately.'
  },
  {
    id: -8,
    text: 'You and your company of dads travel to the yacht that the vacation dads like to cruise around in.\nwhile trying to figure out the controls, the boys in the band found boat drinks!\nIn no time at all, you and the other dads are hammered and partying with the deadbeat dads who spiked the boat drinks with party drugs.'
  },
  {
    id: 5,
    text: 'Approaching the steakhouse, you and your party of dads suddenly realize that you are starving!\nHow will you ask for your steak to be prepared?',
    options: [
      {
        text: 'Well-done',
        nextText: -9
      },
      {
        text: 'Medium',
        nextText: -10
      },
      {
        text: 'rare',
        nextText: 6
      }
    ]
  },
  {
    id: -9,
    text: 'You recieve your steak, and upon the first bite, your mouth dries out and you choke!\nThe other dads have to assist you with the heimlich maneuver.\nThe chef laughed at you, so you return home out of embarrasment.'
  },
  {
    id: -10,
    text: 'You enjoy a good steak with your fellow dads, and have a few beers.\nYou all decide to head home, full and tired.\nYou return home empty handed, maybe you can find the Remote some other time.'
  },
  {
    id: 6,
    text: 'The chef compliments your order and you recieve an excellent steak that you thoroughly enjoy. The chef cheerfully chats with you and your troop of dads.\nUpon hearing that you need a vehicle for your adventures, he charitably offers his truck for use. You all thank him and graciously accept his offer. You drive away from the steakhouse.\nWhich way do you go?',
    options: [
      {
        text: 'Consult the map',
        nextText: 7
      },
      {
        text: 'Right',
        nextText: -11
      },
      {
        text: 'Left',
        nextText: -12
      }
    ]
  },
  {
    id: -11,
    text: 'You turn right and a gust of wind takes the map from your hands and hurls it out of the window. you drive around searching for it for hours, but it\'s lost.\nDisappointed and frustrated, you all return home.'
  },
  {
    id: -12,
    text: 'You turn left without consulting the map or using your blinker.You hear a siren, and see lights behind you.\nYou sigh as a hardass dad approaches your window. Unfortunately, you don\'t have a drivers license, and this isn\'t your truck.\nYou and your fellow dads have to walk home.'
  },
  {
    id: 7,
    text: 'After studying the map, you recognize the area marked as the shopping center. There are a few different stores that cou;d be the one marked on the map.\nWhich one will you chose to explore?',
    options: [
      {
        text: 'Best Buy',
        nextText: -13
      },
      {
        text: 'Bed Bath and Beyond',
        nextText: 8
      },
      {
        text: 'Discount Gadgets',
        nextText: -14
      }
    ]
  },
  {
    id: -13,
    text: 'You and the dads enter best buy and find all kinds of remotes, but no the legendary one your looking for.\nYou do find a remote that comes with a 75 inch TV that you and all the other dads pitch in for.\nYou return home with your new TV, a remote is a remote I guess.'
  },
  {
    id: -14,
    text: 'you and your pack of dads enter Discount Gadgets and begin searching high and low.\nYou all find really good deals on discount electronics that you just csnt pass up.\nYou and the other dad fill up the truck with your shopping haul, and head back home to boot up the new xBox that was half the price!'
  },
  {
    id: 8,
    text: 'You enter Bed Bath and Beyond with your assembly of dads, which section will you search?',
    options: [
      {
        text: 'Bed',
        nextText: -15
      },
      {
        text: 'Bath',
        nextText: -16
      },
      {
        text: 'Beyond',
        nextText: 9
      },
    ]
  },
  {
    id: -15,
    text: 'The bed section is comfortable, but you search it to no avail.\nYou pick up a new blanket and head home, ready for bed and tired from your adventures.'
  },
  {
    id: -16,
    text: 'The bath secton holds the softest towels you\'ve ever touched, but it holds no remote.\nYou pick up the towels and head back home to shower off the sweat and disappointment of your adventures.'
  },
  {
    id: 9,
    text: 'The beyond section is dark and looks like no one has entered in a very long time. You and the other dads begin your search... THERE!\nHidden among "as seen on TV" items, that havent been seen or thought of in ages, is the legendary and storied remote!\nWhich button will you press?',
    options: [
      {
        text: 'Rewind',
        nextText: -1
      },
      {
        text: 'Skip',
        nextText: -17
      },
      {
        text: 'Family Programing',
        nextText: 10
      }
    ]
  },
  {
    id: -17,
    text: 'Two hours of time is skipped and the remote is dropped back down in its place among the "as seen on TV" products.\nYou awake in bed and convince yourselfthat the day\'s adventure must have been a dream.\nYou drift back to sleep.'
  },
  {
    id: 10,
    text: 'You press the button labeled "Family Programing" out of curiosity. Nothing seems to happen.\nDisappointed, you and your gang of dads head home. On your way, you see a couple of very short dads. You stop to see if they need a ride.\nTo your suprise, they arent dads at all, they\'re children!\nYou realize the remote has made other family members appear! The children tell you about the moms, the aunts and uncles, The whole family!\n You and your band of dads erupt in cheerful laughter over your sucessful adventure for the legendary remote!'
  }
]
startGame()

