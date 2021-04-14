
// Mobile Menu
document.getElementById("hamburguer-icon").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unselectedColor = "#646872";
var selectedColor = "#2A2D34";


var tabs = document.getElementsByClassName("single-tab");
for (var a = 0; a < tabs.length; a++) {

  tabs[a].onclick = function () {
    
    var clickedValue = this.innerHTML;
    console.log(clickedValue)

    for(var b = 0; b<tabs.length; b++){
      tabs[b].style['background-color'] = unselectedColor;
      tabs[b].style['font-weight'] = "";
    }


    this.style['background-color'] = selectedColor;
    this.style['font-weight'] = "bold";
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue];

  }
}


// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }

];

var index = 0;

document.getElementById("service-next").onclick = function(){
  console.log("clicked!");
  
    if(index == 2){
      
      index = 0;
      console.log(index);
      document.getElementById("service-title").innerText = ourServices[index].title;
      document.getElementById("service-text").innerText = ourServices[index].text;
    }
    else{
      document.getElementById("service-title").innerText = ourServices[index+1].title;
      document.getElementById("service-text").innerText = ourServices[index+1].text;
      index = index+1;
      console.log(index);
    }
  
}

document.getElementById("service-previous").onclick = function(){
  console.log("clicked!");
  
    if(index == 2){
      document.getElementById("service-title").innerText = ourServices[0].title;
      document.getElementById("service-text").innerText = ourServices[0].text;
      index = 0;
      console.log(index);
    }
    else{
      index = index+1;
      console.log(index);
      console.log(ourServices.length)
      document.getElementById("service-title").innerText = ourServices[ourServices.length-index].title;
      document.getElementById("service-text").innerText = ourServices[ourServices.length-index].text;
      
    }
  
}

//Contact form
document.getElementById("submit_form").onclick = function(){
  var name = document.getElementsByName("subject").innerText;
  var full_name = document.getElementsByName("extra_fullName").innerText;
  var email = document.getElementsByName("extra_email").innerText;
  var message = document.getElementsByName("text").innerText;

  console.log(full_name);

}


// Footer

var date = new Date();
document.getElementById("current_year").innerText = date.getFullYear();





