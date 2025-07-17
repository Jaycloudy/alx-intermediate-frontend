// Define Student 
interface  Student {
    firstName: string;
    lastName: string;
    age: number
    location: string;

}

// Create student using interface
const student1: Student = {
    firstName: 'Jacob',
    lastName: 'John',
    age: 20,
    location: 'Lagos',
}

const student2: Student = {
    firstName: 'Micheal',
    lastName: 'Edit',
    age: 21,
    location: 'Akwa-Ibom',
}

// putting Student list in an array
const studentsList: Student[] = [student1, student2];

// Create a <table> element using JavaScript
const table: HTMLTableElement = document.createElement('table');

//Add a header row with four columns: "First Name, Last Name, Age and Location"
const headerRow: HTMLTableRowElement =  table.insertRow();

const headers = ['First Name', 'Last Name', 'Age', 'Location'];
headers.forEach((text) => {
    const th: HTMLTableCellElement = document.createElement("th");
    th.textContent = text;
    th.style.border = '1px solid black';
    th.style.padding = '8px';
    headerRow.appendChild(th);
});

//Add each student as a row

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();

  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const lastNameCell = row.insertCell();
  lastNameCell.textContent = student.lastName;

  const ageCell = row.insertCell();
  ageCell.textContent = student.age.toString();

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;

  // Optional: add border styling to each cell
  [firstNameCell, lastNameCell, ageCell, locationCell].forEach((cell) => {
    cell.style.border = '1px solid gray';
    cell.style.padding = "8px";
  });
});

//Add the table to the document body
table.style.borderCollapse = 'collapse'; // cleaner table look
document.body.appendChild(table);