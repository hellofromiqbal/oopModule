export default class Table {
  constructor({columns, data, styles}) {
    this.columns = columns;
    this.data = data;
    this.styles = styles;
  }
};

export const renderTable = ({columns, data, styles}) => {
  const parentElement = document.getElementById("wrapper");
  const tableWrapper = document.createElement("table");
  tableWrapper.style.borderCollapse = 'collapse';
  
  // Table Head Row Generation
  const tableHeadRow = document.createElement("tr");
  columns.forEach(column => {
    const tableHead = document.createElement("th");
    tableHead.style.border = styles.border;
    tableHead.style.backgroundColor = styles.tableHeadBgColor;
    tableHead.style.padding = styles.cellPadding;
    tableHead.innerHTML = column;
    tableHeadRow.append(tableHead);
  });
  tableWrapper.append(tableHeadRow);

  // Table Row Data Generation
  data.forEach(item => {
    const tableRow = document.createElement("tr");
    const itemValues = Object.values(item);
    itemValues.forEach(item => {
      const tableData = document.createElement("td");
      tableData.style.border = styles.border;
      tableData.style.padding = styles.cellPadding;
      tableData.innerHTML = item;
      tableRow.append(tableData);
    });
    tableWrapper.append(tableRow);
  });

  // Append Generated Table into Parent Element
  parentElement.append(tableWrapper);
};