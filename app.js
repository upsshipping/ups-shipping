let shipments =
JSON.parse(
localStorage.getItem("shipments")
) || [];

// SAVE SHIPMENT
function saveShipment() {
alert("saveShipment running")
let shipment = {

track:
document.getElementById("track").value,

sender:
document.getElementById("sender").value,

receiver:
document.getElementById("receiver").value,

location:
document.getElementById("location").value,

delivery:
document.getElementById("delivery").value,

progress:
document.getElementById("progress").value,

history:
document.getElementById("history").value

};

shipments.push(shipment);
alert("shipment added")
localStorage.setItem(
"shipments",
JSON.stringify(shipments)
);

alert("Shipment created!");

}

// TRACK SHIPMENT
function trackParcel(){

alert("track running")

let code=
document.getElementById(
"search"
).value;

let shipments=
JSON.parse(
localStorage.getItem(
"shipments"
)
)||[];

let found=
shipments.find(
x=>x.track===code
);

if(found){

document.getElementById(
"result"
).innerHTML=
"Shipment Found";

}else{

document.getElementById(
"result"
).innerHTML=
"Shipment not found";

}



let code=
document.getElementById(
"trackInput"
).value;

let shipments=
JSON.parse(
localStorage.getItem(
"shipments"
)
)||[];

let found=
shipments.find(
x=>x.track===code
);

if(found){

document.getElementById(
"result"
).innerHTML=

"Shipment Found";

}else{

document.getElementById(
"result"
).innerHTML=

"Shipment not found";

}

}