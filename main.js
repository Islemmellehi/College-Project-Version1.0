var i = 0; //start point
var images = [];
var time = 2000;

//image list

images[0] = "./Images/image1.jpg";
images[1] = "./Images/image2.jpg";
images[2] = "./Images/image3.jpg";
images[3] = "./Images/image4.jpg";
images[4] = "./Images/image5.jpg";
images[5] = "./Images/image6.jpg";
images[6] = "./Images/image7.jpg";

//changing images

function changeImage() {
  document.getElementById("slideshow").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time);
}

window.onload = changeImage; 
