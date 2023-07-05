interface Teacher {
	readonly firstName: string;
	fullTimeEmployee: boolean;
	readonly lastName: string;
	yearsOfExperience?: number;
	location: string;
	[key: string ]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}



function printTeacher(firstName, lastName): string {
	return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInterface {
	new (firstName: string , lastName: string): StudentClass;
}

interface StudentClass {
	workOnHomeWork(): string;
	displayName(): string;
}

class StudentClass {
	constructor(private firstName: string, private lastName: string) {}

	workOnHomeWork() : string {
		return "Currently working";
	}

	displayName() : string {
		return this.firstName;
	}

}

console.log(printTeacher("john", "Doe"));

const student = new StudentClass("john", "doe");

console.log(student.workOnHomeWork());
console.log(student.displayName());

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
