//Declaring global variable
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const calcBtn = document.getElementById("calc-btn");
const form = document.getElementById("form");
const cgpaDiv = document.getElementById("cgpa-div");
const gradeSelect = document.getElementById("grade-select");
const courseCode = document.getElementById("course-code").value;
const courseCounter = document.getElementById("course-counter");

const units = [];
const grades = [];
let counter = 0;

addBtn.addEventListener("click", () => {
  const courseCode = document.getElementById("course-code").value;
  const creditUnit = document.getElementById("credit-unit").value;
  units.push(creditUnit);
  const score = gradeCalc(gradeSelect.value, creditUnit);
  grades.push(score);
  counter++;
  courseCounter.textContent = `Courses: ${counter}`;

  const newCourseList = document.createElement("div");
  newCourseList.id = `new-course-list${counter}`;
  newCourseList.textContent = `${courseCode} ${creditUnit} ${gradeSelect.value}`;
  newCourseList.className =
    "bg-black text-white flex justify-center my-2 py-3 mx-10";
  form.appendChild(newCourseList);
});

removeBtn.addEventListener("click", () => {
  const newCourseList = document.getElementById(`new-course-list${counter}`);
  counter--;
  if (counter < 0) {
    return (counter = 0);
  }
  courseCounter.textContent = `Courses: ${counter}`;
  newCourseList.remove();
  units.pop();
  grades.pop();
  // console.log({ units });
  // console.log({ grades });
});

//Conditions for grading system
const gradeCalc = (grade, unit) => {
  if (grade == "A") {
    return 5 * unit;
  } else if (grade == "B") {
    return 4 * unit;
  } else if (grade == "C") {
    return 3 * unit;
  } else if (grade == "D") {
    return 2 * unit;
  } else if (grade == "E") {
    return 1 * unit;
  } else if (grade == "F") {
    return 0 * unit;
  }
};

//calculate cgpa
const calculateCGPA = () => {
  const totalUnits = units.reduce((nextUnit, currentUnit) => {
    return Number(nextUnit) + Number(currentUnit);
  });

  const totalGrades = grades.reduce((nextUnit, currentUnit) => {
    return Number(nextUnit) + Number(currentUnit);
  });

  const sum = totalGrades / totalUnits;
  cgpaDiv.innerHTML = `<h1 class="text-center text-white bg-black py-5">
                 Your CGPA is: ${sum.toFixed(2)}
             </h1>`;
};

calcBtn.addEventListener("click", () => {
  calculateCGPA();
});

//Basic calculator for university undergraduates' usage.
//Major tools used includes - TailwindCss.
