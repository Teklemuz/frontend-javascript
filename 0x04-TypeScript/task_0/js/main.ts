interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Selam',
    lastName: 'Bitew',
    age: 24,
    location: 'Addis Ababa',
  };
  
  const student2: Student = {
    firstName: 'Teklemuz',
    lastName: 'Tesfay',
    age: 30,
    location: 'Mekelle',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  function renderStudentTable() {
    const tableBody = document.getElementById('students-table-body');
    if (tableBody) {
      studentsList.forEach(student => {
        const row = document.createElement('tr');
        
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
  
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
  
        tableBody.appendChild(row);
      });
    }
  }
  
  window.onload = renderStudentTable;