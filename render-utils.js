export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const div = document.createElement('div');
    const pName = document.createElement('p');
    const spanEMoji = document.createElement('span');
    div.classList.add('friend');
    // add friend, name, and emoji classes to the appropriate elements
    // pName.textContent = friend.name
    // spanEMoji.textContent = friend.satisfaction
    
    // put the friend's name in the nameEl
    pName.textContent = friend.name;
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    // for (let friend of friendArr) {

        // console.log(friendArr);

    if (friend.satisfaction === 1) {
        spanEMoji.textContent = '😵'; 
            // console.log('two works');
    }
    if (friend.satisfaction === 2) {
        spanEMoji.textContent = '😁'; 
        // console.log('one works');
    }
    if (friend.satisfaction >= 3) {
        spanEMoji.textContent = '😇'; 
        // console.log('three works');
    }
        // switch (friend.satisfaction) {
        //     case 1:
        //         spanEMoji.textContent = '😁'
        //         break;
        //     default:
        //         break;
        // }
   //  }

    // append the emojiEl and nameEl to the outer div
    div.append(spanEMoji, pName);
    // return the outer div
    return div;
}