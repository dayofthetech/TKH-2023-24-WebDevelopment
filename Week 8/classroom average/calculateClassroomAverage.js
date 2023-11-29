import  students  from "./studentData.js";
let classroomAverage = document.getElementById('classroomAverage');

const calculateClassroomAverage = (studentData) => {
    let classroomGrade = 0;
    for (let i = 0; i < studentData.length; i++){
        classroomGrade += parseFloat(students[i].averageGrade);

    }

    // display text
    classroomAverage.innerHTML = `Your class average is ${classroomGrade / studentData.length} `;
}

export default calculateClassroomAverage;
