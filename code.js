// like function

function like() {
  document.getElementById("nbr_likes").innerHTML = "1";
}
function like2() {
  document.getElementById("nbr_likes2").innerHTML = "1";
}
function like3() {
  document.getElementById("nbr_likes3").innerHTML = "1";
}
function like4() {
  document.getElementById("nbr_likes4").innerHTML = "1";
}

function sidebar() {
  document.getElementById("hiddenbar").style.width = "200px";
  document.getElementById("hiddenbar").style.height = "800px";
  document.getElementById("profile_pic").style.display = "inline";
  document.getElementById("title2").style.display = "inline";
  document.getElementById("webcam").style.display = "inline";
  document.getElementById("calendarr").style.display = "inline";
  document.getElementById("button_text2").style.display = "inline";
  document.getElementById("button_text").style.display = "inline";
  document.getElementById("title").style.display = "inline-block";
  document.getElementById("consultation").style.display = "inline-block";
  document.getElementById("agenda").style.display = "inline-block";
  document.getElementById("consultation_result").style.display = "inline-block";
  document.getElementById("agenda_result").style.display = "inline-block";
}
function hidebar() {
  document.getElementById("hiddenbar").style.width = "0px";
  document.getElementById("hiddenbar").style.height = "0px";
  document.getElementById("profile_pic").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("title2").style.display = "none";
  document.getElementById("webcam").style.display = "none";
  document.getElementById("calendarr").style.display = "none";
  document.getElementById("button_text").style.display = "none";
  document.getElementById("button_text2").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("consultation").style.display = "none";
  document.getElementById("agenda").style.display = "none";
  document.getElementById("consultation_result").style.display = "none";
  document.getElementById("agenda_result").style.display = "none";
}
function Agenda() {
  document.getElementById("agenda_result").innerHTML =
    "No upcoming events found.";
}
function Consultation() {
  document.getElementById("consultation_result").innerHTML =
    "No past consultations found.";
  document.getElementById("button_text2").style.top = "55.5%";
}
