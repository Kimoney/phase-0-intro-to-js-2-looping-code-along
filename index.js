// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

// FOR LOOP

function writeCards(customerName,occurence){
    let emptyArray = [];

    for (let i = 0; i< customerName.length; i++) {
        let text = `Thank you, ${customerName[i]}, for the wonderful ${occurence} gift!`
        console.log(text)
        
        emptyArray.push(text);
    }
    return emptyArray;
}

// WHILE LOOP

function countDown (){
    let countdown = 10;
    while (countdown <= 10 ){
        console.log(countdown--)
    }
}

countDown()