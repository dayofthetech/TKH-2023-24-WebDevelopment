import students from "./studentData.js";
import {renderStudentTable, updateGrade} from "./studentTable.js";
import calculateClassroomAverage from "./calculateClassroomAverage.js";

// renderStudentTable(students);
// updateGrade;
// calculateClassroomAverage;


document.addEventListener('DOMContentLoaded', () => {
    // Get the table element from the HTML
    let studentTable = document.getElementById('myTable');

    // Render the initial student table
    renderStudentTable(students);


    // Calculate and display the initial classroom average
    calculateClassroomAverage(students);
});
