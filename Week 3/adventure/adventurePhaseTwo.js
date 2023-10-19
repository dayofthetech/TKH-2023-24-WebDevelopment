function secondPhase(inventory) {
    alert(`Your inventory for phase two is ${inventory}`);

    const playerChPh2 = prompt("After your last quest, do you want to gain experience (a) or fight monsters (b) ?");

    if (playerChPh2 === 'a') {
        const playerExp = prompt("You can get experience by completing a puzzle (a) or solve a riddle (b) ?");
        if (playerExp === 'a') {
            alert('puzzle')
            inventory.push('puzzle');
            alert(` Your inventory consist of ${inventory}`);
            thirdPhase();
        } else if (playerExp === 'b') {
            alert('riddle')
            inventory.push('riddle');
            alert(` Your inventory consist of ${inventory}`);
            thirdPhase();
        }
    } else if (playerChPh2 === 'b') {
        const playerFight = prompt("You fight a orc (a) or werewolf (b)");
        if (playerFight === 'a') {
            alert('you defeat orc, gain forze');
            inventory.push('forze');
            thirdPhase();
        } else if (playerFight === 'b') {
            alert('you defeat werewolf, gain speed');
            inventory.push('speed')
            thirdPhase();
        }
    } else {
        secondPhase();
    }
}

