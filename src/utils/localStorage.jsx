const employees = [
    {
      "employees": [
        {
          "id": 1,
          "email": "employee1@example.com",
          "password": "123",
          "tasks": [
            {
              "task_title": "Data Entry",
              "task_date": "2025-03-26",
              "task_description": "Enter customer data into the CRM system.",
              "category": "Data Management",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            },
            {
              "task_title": "Report Generation",
              "task_date": "2025-03-27",
              "task_description": "Generate monthly sales reports using Power BI.",
              "category": "Reporting",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 2,
          "email": "employee2@example.com",
          "password": "123",
          "tasks": [
            {
              "task_title": "Customer Support Calls",
              "task_date": "2025-03-26",
              "task_description": "Handle customer queries and provide solutions.",
              "category": "Customer Support",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            },
            {
              "task_title": "System Update",
              "task_date": "2025-03-28",
              "task_description": "Update company software to the latest version.",
              "category": "IT Support",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 3,
          "email": "employee3@example.com",
          "password": "123",
          "tasks": [
            {
              "task_title": "Marketing Campaign",
              "task_date": "2025-03-25",
              "task_description": "Launch an email marketing campaign for product promotion.",
              "category": "Marketing",
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true
            },
            {
              "task_title": "Social Media Content",
              "task_date": "2025-03-27",
              "task_description": "Create posts for LinkedIn and Twitter.",
              "category": "Social Media",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 4,
          "email": "employee4@example.com",
          "password": "123",
          "tasks": [
            {
              "task_title": "Database Optimization",
              "task_date": "2025-03-29",
              "task_description": "Optimize database queries for faster performance.",
              "category": "Database Management",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            },
            {
              "task_title": "Bug Fixing",
              "task_date": "2025-03-30",
              "task_description": "Fix critical bugs reported by users.",
              "category": "Development",
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true
            }
          ]
        },
        {
          "id": 5,
          "email": "employee5@example.com",
          "password": "123",
          "tasks": [
            {
              "task_title": "Presentation Preparation",
              "task_date": "2025-03-26",
              "task_description": "Prepare a PowerPoint presentation for client meetings.",
              "category": "Business",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            },
            {
              "task_title": "Documentation Review",
              "task_date": "2025-03-27",
              "task_description": "Review and update technical documentation.",
              "category": "Documentation",
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        }
      ]
    }
  ];
  
  const admin = [
    {
      "admin": {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
    }
  ];
  

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
 
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees)
    
}

