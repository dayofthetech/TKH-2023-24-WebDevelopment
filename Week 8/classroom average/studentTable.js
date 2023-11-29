// // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow
// /*
// ID || Name || Address || Ave Gr */

import calculateClassroomAverage from "./calculateClassroomAverage.js";
import  students  from "./studentData.js";


let studentTable = document.getElementById('myTable');

/* Solution to display key names from object
assign each key a 'readable' string which will be used as header */
const keyDisplayNames = {
    id: 'ID',
    name: 'Name',
    address: 'Address',
    averageGrade: 'Average Grade',
};

const renderStudentTable = (table, data) => {

    let headerRow = document.createElement('tr');
    // key in the student object index 0
    for (let key in data[0]) {
        let header = document.createElement('th');
        header.innerHTML = keyDisplayNames[key];
        headerRow.appendChild(header);
    }
    table.appendChild(headerRow);

    // hard coded way - inserting each column as a string

    // let studentIDHeader = document.createElement('th');
    // studentIDHeader.innerHTML = "ID";
    // headerRow.appendChild(studentIDHeader);
    // table.appendChild(headerRow);

    // let studentNameHeader = document.createElement('th');
    // studentNameHeader.innerHTML = "Name";
    // headerRow.appendChild(studentNameHeader);
    // table.appendChild(headerRow);

    // let studentAddressHeader = document.createElement('th');
    // studentAddressHeader.innerHTML = "Address";
    // headerRow.appendChild(studentAddressHeader);
    // table.appendChild(headerRow);

    // let studentAverageScoreHeader = document.createElement('th');
    // studentAverageScoreHeader.innerHTML = "Average Score";
    // headerRow.appendChild(studentAverageScoreHeader);
    // table.appendChild(headerRow);


    for(let i = 0; i < data.length; i++) {
        let studentRow = document.createElement('tr');
        // student cells td
        // data is the obj
        // data[i] is the key/value
        let studentID = document.createElement('td');
        studentID.innerHTML = data[i].id;
        studentRow.appendChild(studentID);

        let studentName = document.createElement('td');
        studentName.innerHTML = data[i].name;
        studentRow.appendChild(studentName);

        let studentAddress = document.createElement('td');
        studentAddress.innerHTML = data[i].address;
        studentRow.appendChild(studentAddress);

        // // using let in data - this method reduces the above code
        // // but does not take into consideration the input fn
        // // hopefully I could improve it later 11/27/2023
        // for (let value in data[i]) {
        //     let studentCell = document.createElement('td');
        //     studentCell.innerHTML = ` ${data[i][value]} `;
        //     studentRow.appendChild(studentCell);
        // }


        // average input field - the value will be inside input
        // and input inside td for table
        let studentAverageG = document.createElement('td');
        let averageInput = document.createElement('input');
        averageInput.type = 'text';
        averageInput.value = data[i].averageGrade;
        // studentAverageG.innerHTML = data[i].averageGrade;
        averageInput.addEventListener('change', () => updateGrade(
            i, averageInput.value
        ));
        studentAverageG.appendChild(averageInput);
        studentRow.appendChild(studentAverageG);

        // appending row to table
        table.appendChild(studentRow);
    }
}

const updateGrade = (index, newGrade) => {
    // Update the student's grade in the data array
    students[index].averageGrade = newGrade;

    // Recalculate the classroom average -
    // takes the stu obj and uses the grades key/value
    calculateClassroomAverage(students);
}


renderStudentTable(studentTable, students);

export default renderStudentTable;


