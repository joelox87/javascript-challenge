var tableData = data;

var tbody = d3.select("tbody");
var table = d3.select("table"); 
tbody.html("");
table.attr("class", "table table-striped");
tableData.forEach(function(ufoSightEntry){
    console.log(ufoSightEntry);
    var row =tbody.append("tr");

    Object.entries(ufoSightEntry).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var dataFilter = tableData.filter(ufoSightEntry => (ufoSightEntry.datetime ===inputValue));
  console.log(dataFilter);

var tbody = d3.select("tbody");
var table = d3.select("table");
tbody.html("");
table.attr("class", "table table-striped");


if (inputValue!=="") {
dataFilter.forEach(function(ufoSightEntry){
    console.log(ufoSightEntry);
    var row =tbody.append("tr");

    Object.entries(ufoSightEntry).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}
else {
    tableData.forEach(function(ufoSightEntry){
        console.log(ufoSightEntry);
        var row =tbody.append("tr");
    
        Object.entries(ufoSightEntry).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
});