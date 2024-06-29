// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.


const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = [];
for (let course1 of student1Courses) {
    console.log(course1);
    for(let course2 of student2Courses){
        if(course1 === course2) commonCourses.push(course1);
    }
}
console.log("Los cursos en común son: " + commonCourses);