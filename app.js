let shipments =
JSON.parse(
localStorage.getItem(
"shipments"
)
)||[];



function saveShipment(){

let shipment={

track:
document
.getElementById(
"track"
).value,

receiver:
document
.getElementById(
"receiver"
).value,

address:
document
.getElementById(
"address"
).value,

status:
document
.getElementById(
"status"
).value,

location:
document
.getElementById(
"location"
).value,

delivery:
document
.getElementById(
"delivery"
).value,

progress:
document.getElementById("progress").value,

history:
document.getElementById("history").value

};



let index=

shipments.findIndex(

x=>

x.track===shipment.track

);



if(index!==-1){

shipments[index]=shipment;

alert(
"Shipment Updated"
);

}

else{

shipments.push(
shipment
);

alert(
"Shipment Created"
);

}



localStorage.setItem(

"shipments",

JSON.stringify(
shipments
)

);

}





function trackParcel(){

shipments=

JSON.parse(

localStorage.getItem(

"shipments"

)

)||[];



let found=

shipments.find(

x=>

x.track===

document
.getElementById(
"search"
)
.value

);



let result=

document
.getElementById(
"result"
);



if(found){

result.innerHTML=`

Tracking:
${found.track}

<br><br>

Receiver:
${found.receiver}

<br><br>

Address:
${found.address}

<br><br>

Status:

<span style="font-weight:bold">

${found.status}

</span>

<br><br>

Current Location:
${found.location}

<br><br>

Estimated Delivery:
${found.delivery}

<br><br>

Shipment Progress:
${found.progress}

<br><br>

Shipment History:

<br>

${found.history}

<br><br>

<iframe

width="100%"

height="350"

style="border:0"

src="https://maps.google.com/maps?q=${encodeURIComponent(found.location)}&output=embed">

</iframe>

`;

}

else{

result.innerHTML=

"Shipment Not Found";

}

}
function logout(){

window.location=

"index.html";

}