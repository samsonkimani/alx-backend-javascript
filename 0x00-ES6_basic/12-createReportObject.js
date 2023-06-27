export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(emploList) {
      return Object.keys(emploList).length;
    },
  };
}
