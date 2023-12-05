// generate and return X unique rndm nums
export default function generatingPoke(){
    /* https://www.geeksforgeeks.org/set-vs-array-in-javascript/
    Set are unordered way to store objs.
    While the set is less than the size, it will create an unique
    random number and add it to the set.
    Then that Set is returned in a Array to be iterate-able */
    const randomNum = new Set();
    while(randomNum.size < 12 ){
        const num = Math.floor(Math.random() * 101);
        randomNum.add(num);
    }
    return Array.from(randomNum);
}
