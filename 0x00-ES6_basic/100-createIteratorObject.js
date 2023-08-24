// export default function createIteratorObject(report) {
// 	let currentDepIndex = 0;
// 	let currentEmpIndex = 0;

// 	const departments = Object.keys(report);

// 	return {
// 		next() {
// 			const currentDep = departments[currentDepIndex];
// 			const employees = report[currentDep];
// 			const employee = employees[currentEmpIndex];

// 			if (employee) {
// 				currentEmpIndex++;
// 				return { value: employee, done: false};
// 			}

// 			if (currentDepIndex < departments.length - 1) {
// 				currentDepIndex++;
// 				currentEmpIndex = 0;
// 				return this.next();
// 			}

// 			return {done : true}
// 		},
// 		[Symbol.iterator](){
// 			return this;
// 		},
// 	};
// }

export default function createIteratorObject(report) {
	let departments = Object.values(report);

	let currentDepartmentIndex = 0;
	let currentEmployeeIndex = 0;

	return {
	  [Symbol.iterator]() {
		return this;
	  },
	  next() {
		if (currentDepartmentIndex >= departments.length) {
		  return { done: true };
		}

		const department = departments[currentDepartmentIndex];
		const employees = Object.values(department);

		if (currentEmployeeIndex >= employees.length) {
		  currentDepartmentIndex++;
		  currentEmployeeIndex = 0;
		  return this.next();
		}

		const employee = employees[currentEmployeeIndex];
		currentEmployeeIndex++;

		return { value: employee, done: false };
	  },
	};
}
