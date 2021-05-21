const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]




function getAverageStudentMark(i) {
    let marksLenght = 0;
    let sumStudentMarks = students[i].marks.reduce((sum, item) => (sum + item));
    marksLenght = students[i].marks.length;
    return (
        sumStudentMarks / marksLenght
    )
}

function getAverageGroupMark(students) {
    let sum = 0;
    let allmarksLenght = 0;
    students.forEach((Student) => (allmarksLenght += Student.marks.length))
    students.forEach((Student) => (Student.marks.forEach((mark) => sum += mark)));
    return sum / allmarksLenght;
}

const averageGroup = getAverageGroupMark(students);
const averageMark = getAverageStudentMark(2);
