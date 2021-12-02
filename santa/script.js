function listpage()
{
  document.getElementById("variable").innerHTML = 0;
  window.location = "https://docs.google.com/spreadsheets/d/1LarkNx2mXhVyPpcNnYOoudXu_iCbvS4QyzVXduCJYo4/edit?usp=sharing";
}
function formspage()
{
    document.getElementById("sand").style = "background-image: url('src/bg4.jpg');background-size : auto";
    document.getElementById("forms").style.display = "block";
    document.getElementById("gform").src ="https://docs.google.com/forms/d/e/1FAIpQLSexb_2_5bq4KsMGwUI8Y21SE2ZfXS9OO3yira9jawk-Ofawxg/viewform?embedded=true";
    document.getElementById("initialpage").style.display = "none";
    document.getElementById("k").style.display = "block";
    document.getElementById("variable").innerHTML = 1;
}

function gotoHomePage()
{
   document.getElementById("forms").style.display = "none";
   document.getElementById("initialpage").style.display = "block";
   document.getElementById("k").style.display = "none";
   document.getElementById("variable").innerHTML = 0;
   document.getElementById("sand").style = "background-image: url('src/bg5.jpg');background-size :100vw 100vh";
}

function Mailaddresspage()
{
  window.location = "https://docs.google.com/spreadsheets/d/1Rbxq0qBBwcAWTFeV9dcnzZ7YD8v2y5o2BoQCUiFD8-g/edit?usp=sharing";
}
