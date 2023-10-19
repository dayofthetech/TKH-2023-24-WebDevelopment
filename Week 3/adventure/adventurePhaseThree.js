// last step - check inventory and output ending
// What are my items and possible combinations
//  ph1
// gold coins
// wooden sword
// boomerang
// stick
// rock

//  ph2
// puzzle
// riddle
// forze
// speed

// 8 possible endings
function thirdPhase(inventory) {

    alert("you arrive at your destination");
    if (inventory.includes('gold coins') && inventory.includes('puzzle')) {
        alert('You have coins and puzzle');
    } else if (inventory.includes('wooden sword') && inventory.includes('puzzle')) {
        alert('you have wooden sword and puzzle');
    }
     else if (inventory.includes('boomerand') && inventory.includes('puzzle')) {
        alert('boomerand + puzzle');
    }
     else if (inventory.includes('stick') && inventory.includes('riddle')) {
        alert('stick + riddle');
    }
     else if (inventory.includes('rock') && inventory.includes('riddle')) {
        alert('rock + riddle');
    }
     else if (inventory.includes('gold coins') && inventory.includes('forze')) {
        alert('gold coins + forze');
    }
     else if (inventory.includes('wooden sword') && inventory.includes('forze')) {
        alert('wooden sword + forze');
    }
     else if (inventory.includes('boomerang') && inventory.includes('speed')) {
        alert('boomeran + speed');
    } else {
        alert('end game, not yet a possible combination')
    }
}

