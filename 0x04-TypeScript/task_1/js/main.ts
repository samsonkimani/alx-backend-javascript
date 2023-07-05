interface Teacher {
	readonly firstName: string;
	fullTimeEmployee: boolean;
	readonly lastName: string;
	yearsOfExperience?: number;
	location: string;
	[key: string ]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
