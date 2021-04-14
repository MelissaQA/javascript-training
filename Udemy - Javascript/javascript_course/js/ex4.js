var shipments =
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

document.getElementById("shipments").onchange = function () {

    var select = document.getElementById("shipments");
    var selectedIndex = select.options.selectedIndex;
    var selectedOption = select.options[selectedIndex];

    var order_date = new Date();
    var expected_date;
    var delivery_fee = shipments[selectedOption.value].fee;

    if (selectedOption.value == "standard") {
        expected_date = order_date.getTime() + (7 * 86400000);

    }
    else if (selectedOption.value == "express") {
        expected_date = order_date.getTime() + (3 * 86400000);
    }

    var delivery_date = new Date();
    delivery_date.setTime(expected_date);

    document.getElementById("order_date").innerText = order_date.toISOString().slice(0, 10);
    document.getElementById("delivery_date").innerText = delivery_date.toISOString().slice(0, 10);
    document.getElementById("delivery_fee").innerText = delivery_fee.toFixed(2);

}

var phones =
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "https://consideringapple.com/wp-content/uploads/2020/08/iPhone-12-1.jpg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://leronza.com/wp-content/uploads/2020/07/SM-iPhone-12-Pro-1024x1024.jpg"
    }
};


var radios = document.getElementsByName("product");
console.log(radios);
for (a = 0; a < radios.length; a++) {
    radios[a].onchange = function () {

        for (var b = 0; b < radios.length; b++) {
            if (radios[b].checked) {
                var selectedRadio = radios[b].value;
                //console.log(selectedRadio);
                document.getElementById("phone_image").src = phones[selectedRadio].imageUrl;
                document.getElementById("phone_name").innerText = phones[selectedRadio].name;
                document.getElementById("phone_price").innerText = phones[selectedRadio].currency + " " + phones[selectedRadio].price;
            }
        }

    }
}


var seconds = 0;
var minutes = 0;
var hours = 0;
var milliseconds = "000";
var interval = null;
var time;
var str_minutes, str_seconds, str_hours;

document.getElementById("reset").onclick = function () {
    document.getElementById("stopwatch").innerText = "00:00:00 000";
    seconds = 0;
    minutes = 0;
    hours = 0;
    interval = null;
}

document.getElementById("start_stop").onclick = function () {

    if (interval) {
        clearInterval(interval);
        interval = null;
        console.log("Stop");
    }
    else {
        console.log("Start");
        interval = window.setInterval(function () {

            if (seconds == 59) {
                //console.log( print_clock(hours,minutes, seconds))
                document.getElementById("stopwatch").innerText = print_clock(hours,minutes, seconds);
                seconds = 0;
                minutes = minutes + 1;

                if (minutes == 60) {
                    hours = hours + 1;
                    minutes = 0;
                }

            }
            else{
                //console.log( print_clock(hours,minutes, seconds))
                document.getElementById("stopwatch").innerText = print_clock(hours,minutes, seconds);
                seconds = seconds + 1;    
            }

        }, 1000);
    }


}

function print_clock(hours,minutes, seconds){

    str_seconds = (seconds < 10) ? "0" + seconds : seconds
    str_minutes = (minutes < 10) ? "0" + minutes : minutes
    str_hours = (hours < 10) ? "0" + hours : hours
    return str_hours + ":" + str_minutes + ":" + str_seconds + " " + milliseconds;

}