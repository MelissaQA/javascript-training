let initialDate = new Date("2020-03-26");
let deliverDate = new Date("2020-04-02");

let resultTime = deliverDate.getTime() - initialDate.getTime();
document.getElementById("delivery_time").innerText = (resultTime / 86400000).toString() + " days left to delivery" ;