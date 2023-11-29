/* Create a JavaScript function called addStudentToClass() that accepts
an object representing a student with the following properties:
name (a string) and age (a number).

Inside the addStudentToClass() function, create a Promise that
simulates adding the student to a class. The Promise should resolve after
a random delay of 1 to 3 seconds.

If the student's age is less than 18, reject the Promise with the message:
"Student is too young for this class."
If the student's age is 18 or older, resolve the Promise with the message:
"Student added to the class."

Create a function called registerStudent() that uses async/await to call
addStudentToClass() and handle the Promise's resolution or rejection.
If the Promise is resolved, log the success message to the console.
If it is rejected, log the error message to the console.

Create an array of student objects (at least 3) with different
names and ages, and use a loop to register each student using the
registerStudent() function
 */

/* This is Rafael solution
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "Lisa", age: 16 },
    { name: "Tom", age: 22 },
    { name: "Mary", age: 18 },
    { name: "Aiden", age: 15 },
];
function addStudentToClass(student) {
    let delay = (Math.floor(Math.random() * 3) + 1) * 1000;
    return new Promise((resolve, reject) => {
        try {
            if (typeof student.age != "number") {
                throw new Error("Student needs a valid age!");
            }
            if (student.age >= 18) {
                setTimeout(() => {
                    resolve(`Student ${student.name} was added after ${delay / 1000} seconds`)
                }, delay);
            } else if (student.age < 18) {
                reject(`Student ${student.name} is too young for this class!`)
            }
        } catch (error) {
            reject(`Promise rejected with an error: ${error}`);
        };
    });
};
async function registerStudent(student) {
    try {
        const outcome = await addStudentToClass(student);
        console.log(outcome);
    } catch (error) {
        console.log(error);
    };
};
for (const student of students) {
    registerStudent(student);
};

*/


// first fn - student is the obj
const addStudentsToClass = (student) => {
    let delay = (Math.floor(Math.random() * 3) + 1) * 1000;
    // create a promise that simulates adding students to a class
    return new Promise((resolve, reject) => {
        try {
            if (student.age < 18) {
                setTimeout(() => {

                })
            }
        }
        catch {

        }
    })

}

// fn that uses async await
const registerStudent = () => {

}



const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

for (const student of students) {
    registerStudent(student);
}
