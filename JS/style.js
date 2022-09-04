var ary = new Array(4);

function addBloodGroup() {
  for (let getValues = 0; getValues < 1; getValues++) {
    ary[0] = prompt("Enter Your Name : ");
    ary[1] = prompt("Enter Your Father Name : ");
    ary[2] = prompt("Enter Your Phone Number : ");
    ary[3] = prompt("Enter Your Blood Group : ");
  }
}

function tableValues() {
  for (let a = 0; a < 1; a++) {
    for (let b = 0; b < 1; b++) {}
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTable");
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(1);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    // Add some text to the new cells:
    cell1.innerHTML = ary[0];
    cell2.innerHTML = ary[1];
    cell3.innerHTML = ary[2];
    cell4.innerHTML = ary[3];
  }
}
