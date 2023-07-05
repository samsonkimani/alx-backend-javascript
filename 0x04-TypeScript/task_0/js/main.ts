interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentList: Student[] = [
	{firstName: 'samson', lastName: 'kimani', age: 20, location: 'Nairobi' },
	{firstName: 'dovine', lastName: 'owuor', age: 12, location: 'Kisumu' }
]

document.addEventListener("DOMContentLoaded", () => {
	const table = document.createElement("table");
	const thead = table.insertRow();
	const nameHead = thead.insertCell();
	const locationHead = thead.insertCell();

	nameHead.textContent = "FirstName";
	locationHead.textContent = "Location";

	studentList.forEach((student) => {
		const row = table.insertRow();
		const firstNameCell = row.insertCell();
		const locationCell = row.insertCell();

		firstNameCell.textContent = student.firstName;
		locationCell.textContent = student.location;
	});

	document.body.appendChild(table);
});
