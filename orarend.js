//import input from "../input.js";
function collectStudentData() {
    const numberOfStudents = parseInt(prompt("Hány adatot szeretnél megadni?"), 10);
    const students = [];
    for (let i = 0; i < numberOfStudents; i++) {
      const name = prompt(`Add meg ${i + 1}. tanuló nevét:`);
      const email = prompt(`Add meg ${i + 1}. tanuló e-mail címét:`);
  
      const student = {
        name: name,
        email: email
      };
      students.push(student);
    }
  
    console.log("A tanulók adatai:");
    students.forEach(student => {
      console.log(`Név: ${student.name}, E-mail: ${student.email}`);
    });
  }
  
  collectStudentData();

  
  function collectStudentData() {
    const numberOfStudents = parseInt(document.getElementById("numStudents").value, 10);
    const students = [];
    let studentDataHTML = "<h3>A megadott tanulók adatai:</h3><ul>";

    for (let i = 0; i < numberOfStudents; i++) {
      const name = prompt(`Add meg ${i + 1}. tanuló nevét:`);
      const email = prompt(`Add meg ${i + 1}. tanuló e-mail címét:`);

      const student = {
        name: name,
        email: email
      };

      students.push(student);
      studentDataHTML += `<li><strong>${student.name}</strong>, E-mail: ${student.email}</li>`;
    }

    studentDataHTML += "</ul>";
    document.getElementById("studentData").innerHTML = studentDataHTML;
  }

  function displayTimetable() {
    const timetable = {
      hétfő: ["Matematika", "Történelem", "Fizika", "Angol"],
      kedd: ["Magyar", "Biológia", "Informatika", "Kémia"],
      szerda: ["Tesi", "Fizika", "Kémia", "Matematika"],
      csütörtök: ["Angol", "Történelem", "Biológia", "Földrajz"],
      péntek: ["Magyar", "Informatika", "Történelem", "Tesi"]
    };

    let timetableHTML = "<h3>Heti órarend:</h3><ul>";
    for (const day in timetable) {
      timetableHTML += `<li><strong>${day.charAt(0).toUpperCase() + day.slice(1)}</strong>: ${timetable[day].join(", ")}</li>`;
    }
    timetableHTML += "</ul>";

    document.getElementById("timetable").innerHTML = timetableHTML;
  }