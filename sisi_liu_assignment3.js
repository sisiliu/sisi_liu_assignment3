//Q1  implement the table dynamically
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455-983-0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455-983-0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455-345-0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321-345-0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
//create table
let div1 = document.querySelector("#Q1");
let table = document.createElement("table");
div1.appendChild(table);

//create thead
let thead = document.createElement("thead");
table.appendChild(thead);

//create th
let th = tableInfo.tableHeader.map((tableHeader) => {
  let th = document.createElement("th");
  th.textContent = tableHeader;
  thead.appendChild(th);
});

//create tbody
let tbody = document.createElement("tbody");
table.appendChild(tbody);
let contents = tableInfo.tableContent;
let tableRow = contents.map((row) => {
  // create tr
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  //create td
  Object.values(row).forEach((ele) => {
    let td = document.createElement("td");
    td.textContent = ele;
    console.log(td);
    tr.appendChild(td);
  });
});

//Q2 generate order list and unordered list dynamically
//ol
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let div2 = document.querySelector("#Q2");
let ol = document.createElement("ol");
div2.appendChild(ol);
let orderList = list.map((ele) => {
  return createList(ele);
});
ol.append(...orderList);

//ul
let ul = document.createElement("ul");
div2.appendChild(ul);
let unorderList = list.map((ele) => {
  return createList(ele);
});
ul.append(...unorderList);

//create li
function createList(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

//Q3  implement a dropdown list with the following options dynamically
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
let div3 = document.querySelector("#Q3");
let select = document.createElement("select");
div3.appendChild(select);
const options = dropDownList.forEach(({ value, content }) => {
  select.add(createOption(value, content));
});

function createOption(value, name) {
  let option = document.createElement("option");
  option.value = value;
  option.textContent = name;
  return option;
}
