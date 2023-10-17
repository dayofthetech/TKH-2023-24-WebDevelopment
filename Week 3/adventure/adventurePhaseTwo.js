function secondPhase() {
    alert(`Your inventory for phase two is ${inventory}`);

    const playerChPh2 = prompt("After your last quest, do you want to gain experience (a) or fight monsters (b) ?");

    if (playerChPh2 === 'a') {
        const playerExp = prompt("You can get experience by completing a puzzle (a) or solve a riddle (b) ?");
        if (playerExp === 'a') {
            alert('puzzle')
        } else if (playerExp === 'b') {
            alert('riddle')
        }
    } else if (playerChPh2 === 'b') {
        const playerFight = prompt("You fight");
    }
}