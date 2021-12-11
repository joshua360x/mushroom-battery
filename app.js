// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { confetti } from './confetti.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

let friendData = [
    {
        name: 'Erich',
        satisfaction: 1
    },
    {
        name: 'Sarah',
        satisfaction: 1
    },
    {
        name: 'Missael',
        satisfaction: 2
    },
    {
        name: 'Soraya',
        satisfaction: 1
    },
];


addFriendButton.addEventListener('click', () => {
    // get the name from the input
    // create a new friend object
    
    let nameInput = friendInputEl.value;

    let obj = 
        {
            name: nameInput,
            satisfaction: (Math.ceil(Math.random() * 3))
        };
    // push it into the friends state array, passed in as an argument
    friendData.push(obj);
    // console.log('🚀 ~ file: app.js ~ line 40 ~ addFriendButton.addEventListener ~ friendData', friendData);
    
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});


function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
        // console.log('🚀 ~ file: app.js ~ line 73 ~ displayFriends ~ friendEl', friendEl);


        friendEl.addEventListener('click', () => {
            // console.log(friend);
            if (friend.satisfaction >= 3) {
                alert(`${friend.name} is happy and is satisfied go share the mushrooms with others`);
                // console.log(friend.satisfaction);
            }
            
            if (friend.satisfaction < 3) {
                if (mushroomCount > 0) {
                    mushroomCount--;
                    friend.satisfaction++;
                } 

                // if (friend.satisfaction >= 3) {
                //     alert(`${friend.name} is happy and is satisfied go share the mushrooms with others`);
                //     // console.log(friend.satisfaction);
                // }

                if (mushroomCount === 0) {
                    alert('Please go out and find more mushrooms');
                    // console.log(friend.satisfaction);
                } 
                // console.log(friend);
            }

            // switch (friend.satisfaction) {
            //     case (friend.satisfaction <= 3):
            //         friend.satisfaction++
            //         mushroomCount--
            //             }
            displayMushrooms();
            displayFriends();
            // console.log('🚀 ~ file: app.js ~ line 94 ~ friendEl.addEventListener ~ friendEl', friendEl);

        });

        // this is a clickable list, so . . .
        //     add an event listener to each friend
        //         on click, go find the clicked friend in state
        
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             mushroomCount--;
        //             then display your friends and mushrooms with the updated state
    
        // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }
    // let pizza = 0

    // if (pizza) {
    
    // }
    checkMaxSatisfaction(friendData);
}


function displayMushrooms() { 
    // clear out the mushroom div
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) { 
        // for each mushroom in your mushroom state, render and append a mushroom
        // renderMushroom();
        mushroomsEl.append(renderMushroom());
    }
}
const start = () => {
    setTimeout(function() {
        confetti.start();
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti 

const stop = () => {
    setTimeout(function() {
        confetti.stop();
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};


function checkMaxSatisfaction(friendData) {
    let counter = 0;
    for (let i = 0; i < friendData.length; i++) {
        let el = friendData[i].satisfaction;
        counter = counter + el;
        // elMax = 3*friendData.length
    //     console.log("🚀 ~ file: app.js ~ line 99 ~ displayFriends ~ el", el)

    }
    if (counter === friendData.length * 3) {
        //    pizza = 1
        start();
        stop();
        // console.log('we did it');
    }
}


displayFriends();
displayMushrooms();
