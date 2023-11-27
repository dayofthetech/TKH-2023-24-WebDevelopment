/* I need to import the fn and logic into main
 */
// import renderStudentTable from "./studentTable.js";
// import { updateGrade, calculateClassroomAverage } from "./studentTable.js";
// import students from "./studentData.js";


// document.addEventListener('DOMContentLoaded', () => {
//     // Get the table element from the HTML
//     let studentTable = document.getElementById('myTable');

//     // Render the initial student table
//     renderStudentTable(studentTable, students);

//     // Calculate and display the initial classroom average
//     calculateClassroomAverage(students);

//     // Set up an event listener to detect changes in student grades
//     studentTable.addEventListener('change', (event) => {
//         // Check if the change occurred in an input element
//         if (event.target.tagName.toLowerCase() === 'input') {
//             // Get the index of the row (assuming your input is within a <td>)
//             let rowIndex = event.target.closest('tr').rowIndex - 1;

//             // Update the grade using the updateGrade function
//             updateGrade(rowIndex, event.target.value);
//         }
//     });
// });

