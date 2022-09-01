/**
 * Наявний функціонал для друку оцінок одного студента 
 * Але зі збільшенням кількості студентів постало питання про 
 * розширення його
 * Для цього необхідно створити функцію-конструктор Student,
 * яка буде створювати об'єкт студента та мати ті ж самі методи
 * 
 * - створити за допомогою функції-конструктора ще 2х студентів
 * - вивести оцінки кожного за допомогою метода printGrades
 * - вивести середній бал кожного студента
 * - додати метод, який буде виводити оцінку по заданій технологій
 * наприклад getGrade('html') повинен виводити оцінку студента по html
 * - вивести в консоль оцінку по js першого студента та по python - третього
 *
 * 
 * ADVANCED: 
 * - створити окремо функцію getStudentWithHighestResults, яка буде виводити 
 * ім'я та прізвище студента за найвищим середнім балом
 */

// const student = {
//     firstName: 'Margie',
//     lastName: 'Sullivan',
//     sex: 'female',
//     grades: {
//         html: 90,
//         css: 60,
//         js: 50,
//         python: 45
//     },
//     printGrades() {
//         for (let key in this.grades) {
//             if (this.sex === 'male') {
//                 console.log(`По ${key} ${this.firstName} отримав ${this.grades[key]}`);
//             } else {
//                 console.log(`По ${key} ${this.firstName} отримала ${this.grades[key]}`);
//             }
//         };
//     },
//     average: function () {
//         let sum = 0;
//         let subjectsCount = 0;
//         for (const subject in this.grades) {
//             sum += this.grades[subject];
//             subjectsCount++;
//         }
//         return sum / subjectsCount;
//     }
// };

// student.printGrades();
// console.log("Середній бал: " + student.average());

function Student(firstName, lastName, sex, grades) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.sex = sex;
	this.grades = grades;
}

Student.prototype.printGrades = function() {
	for (let key in this.grades) {
		if (this.sex === 'male') {
			console.log(`По ${key} ${this.firstName} отримав ${this.grades[key]}`);
		} else {
			console.log(`По ${key} ${this.firstName} отримала ${this.grades[key]}`);
		}
	};
}

Student.prototype.average = function() {
	let sum = 0;
	let subjectsCount = 0;
	for (const subject in this.grades) {
		sum += this.grades[subject];
		subjectsCount++;
	}
	return sum / subjectsCount;
}

Student.prototype.getGrade = function(subjectName) {
  return this.grades[subjectName];
}

const harry = new Student("Harry", "Potter", "male", {
		html: 60,
		css: 90,
		js: 40,
		python: 95
	});

const germiona = new Student("Germiona", "Granger", "female", {
    html: 90,
    css: 90,
    js: 70,
    python: 50
  });

const ron = new Student("Ron", "Weasley", "male", {
		html: 40,
		css: 30,
		js: 70,
		python: 30
	});


harry.printGrades();
console.log("Середній бал: " + harry.average());

germiona.printGrades();
console.log("Середній бал: " + germiona.average());

ron.printGrades();
console.log("Середній бал: " + ron.average());

console.log(harry.getGrade("html"));
console.log(ron.getGrade("python"));


//ADVANCED
function getStudentWithHighestResults(student, ...rest) {
	let bestStudent = student;

	for(const current of rest) {
		if(bestStudent.average() < current.average()) {
				bestStudent = current;
		}
	}

	return `Кращий студент - ${bestStudent.firstName} ${bestStudent.lastName}`;
}

console.log(getStudentWithHighestResults(harry, germiona, ron));