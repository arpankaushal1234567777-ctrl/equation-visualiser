function plotGraph(type){

let equation = document.getElementById("equation").value;


equation = equation.replace(/y\s*=\s*/, "");

const xValues = [];
const yValues = [];

for(let x = -10; x <= 10; x += 0.5){

xValues.push(x);

try{
yValues.push(eval(equation));
}
catch(error){
alert("Invalid equation. Use JavaScript math syntax like x**2 or Math.sin(x)");
return;
}

}

let mode = "lines";

if(type === "scatter"){
mode = "markers";
}

const data = [{
x: xValues,
y: yValues,
mode: mode,
type: "scatter"
}];

const layout = {
title: "y = " + equation
};

Plotly.newPlot("graph", data, layout);

}

function clearGraph(){
Plotly.purge("graph");
}