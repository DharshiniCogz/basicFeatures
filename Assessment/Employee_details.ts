const department = [
  {
    id: 1,
    name: "Human Resources",
    location: "Building A",
    skills: {
      name: "communication",
      proficiency: "100",
    },
  },
  {
    id: 2,
    name: "Engineering",
    location: "Building B",
    skills: {
      name: "civil engineering",
      proficiency: "50",
    },
  },
  {
    id: 3,
    name: "Marketing",
    location: "Building C",
    rewards: {
      name: "MBA in marketing",
      points: "10",
    },
  },
];

const employees = [
  {
    empid: 101,
    name: "Alice Johnson",
    departmentId: 1,
    position: "HR Manager",
  },
  {
    empid: 102,
    name: "Bob Smith",
    departmentId: 2,
    position: "Software Engineer",
  },
  {
    empid: 103,
    name: "Charlie Brown",
    departmentId: 3,
    position: "Marketing Specialist",
  },
];

//part - 1
console.log("EmpId with corresponding department names");
employees.forEach((employee) => {
  department.forEach((dept) => {
    if (employee.departmentId === dept.id) {
      console.log(
        `EmpId: ${employee.empid} is working on department ${dept.name}`
      );
    }
  });
});

//Part - 2
console.log("*************************************");
console.log("Emp name with corresponding department names");
employees.forEach((employee) => {
  department.forEach((dept) => {
    if (employee.departmentId === dept.id) {
      console.log(
        `EmpName: ${employee.name} is working on department ${dept.name}`
      );
    }
  });
});

//Part - 3
console.log("*************************************");
console.log("Emp position with corresponding department names");
employees.forEach((employee) => {
  department.forEach((dept) => {
    if (employee.departmentId === dept.id) {
      console.log(
        `EmpPosition: ${employee.position} is working on department ${dept.name}`
      );
    }
  });
});

//Part - 4
console.log("*************************************");
console.log(
  "Emp name and department names of those who work on civil engineering skills"
);
department.forEach((dept) => {
  employees.forEach((employee) => {
    if (dept.skills?.name.toLowerCase().includes("civil")) {
      console.log(
        `Employee name: ${employee.name} is working on department ${dept.name} is working with civil engineering skills`
      );
    }
  });
});
