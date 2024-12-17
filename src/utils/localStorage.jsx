const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    firstName: "Arjun",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare sales report",
        taskDescription: "Compile and analyze sales data for Q1.",
        taskDate: "2024-12-06",
        category: "Sales",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update client database",
        taskDescription: "Update all client contact details in the CRM system.",
        taskDate: "2024-12-07",
        category: "Administration",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-12-04",
        category: "Meetings",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Priya",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design new brochure",
        taskDescription:
          "Work on the layout and content for the new product brochure.",
        taskDate: "2024-12-10",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review marketing strategy",
        taskDescription:
          "Analyze and provide feedback on the marketing strategy document.",
        taskDate: "2024-12-01",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client follow-up",
        taskDescription: "Reach out to clients for feedback on services.",
        taskDate: "2024-12-03",
        category: "Client Relations",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Rohan",
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Organize files",
        taskDescription: "Sort and organize project files on the shared drive.",
        taskDate: "2024-12-08",
        category: "Administration",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop feature",
        taskDescription: "Create a new feature for the mobile app.",
        taskDate: "2024-12-09",
        category: "Development",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Anjali",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit report",
        taskDescription: "Submit the monthly progress report.",
        taskDate: "2024-12-01",
        category: "Reports",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Coordinate event",
        taskDescription: "Coordinate with the team to plan the annual event.",
        taskDate: "2024-12-12",
        category: "Events",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Deepak",
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update software",
        taskDescription: "Install the latest updates for all office software.",
        taskDate: "2024-12-05",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Train interns",
        taskDescription:
          "Provide training for the new interns on company policies.",
        taskDate: "2024-12-02",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit expense report",
        taskDescription: "Submit the expense report for approval.",
        taskDate: "2024-12-04",
        category: "Finance",
      },
    ],
  },
];

const admins = [
  {
    id: 1,
    email: "a@a.com",
    password: "123",
    firstName: "Admin",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admins", JSON.stringify(admins));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admins"));

  return { employees, admins };
};