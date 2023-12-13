import Table, { renderTable } from "./sub.js";

const table1 = new Table({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    { name: 'Pedro', email: 'pedro@email.com', phoneNumber: '123' },
    { name: 'Enrique', email: 'enrique@email.com', phoneNumber: '231' },
    { name: 'Machado', email: 'machado@email.com', phoneNumber: '312' },
    { name: 'Alejandro', email: 'alejandro@email.com', phoneNumber: '000' },
  ],
  styles: {
    cellPadding: '5px 10px',
    tableHeadBgColor: 'magenta',
    border: '1px solid black'
  }
});

renderTable(table1);