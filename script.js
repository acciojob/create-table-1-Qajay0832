let table=document.getElementById("sampleTable");

function insert_Row() {
    let row=table.insertRow(0)
    var cell1=row.insertCell(0)
    var cell2=row.insertCell(1)
    cell1.innerText="New Cell1";
    cell2.innerText="New Cell2";
}

