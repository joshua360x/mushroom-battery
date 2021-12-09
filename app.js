// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
// import findFriendByName from './data-utils.js';

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
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 1
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 3
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
            if (friend.satisfaction < 3) {
                friend.satisfaction++;
                mushroomCount--;
                // console.log(friend);
            }
            if (friend.satisfaction === 3) {
                alert(`${friend.name} is happy`);
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

displayFriends();
displayMushrooms();
