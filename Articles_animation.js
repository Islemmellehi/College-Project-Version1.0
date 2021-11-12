var timeout = 2500;
var Images1 = [];
var Images2 = [];
var Images3 = [];
var Images4 = [];
var i=0;
var j=0;
var k=0;
var m=0;

Images1[0] = "./Images/Quote1-1.jpg" ;
Images1[1] = "./Images/Quote1-2.jpg" ;
Images1[2] = "./Images/Quote1-3.jpg" ;
Images1[3] = "./Images/Quote1-4.jpg" ;

Images2[0] = "./Images/Quote2-1.jpg" ;
Images2[1] = "./Images/Quote2-2.jpg" ;
Images2[2] = "./Images/Quote2-3.jpg" ;
Images2[3] = "./Images/Quote2-4.jpg" ;

Images3[0] = "./Images/Quote3-1.jpg" ;
Images3[1] = "./Images/Quote3-2.jpg" ;
Images3[2] = "./Images/Quote3-3.jpg" ;
Images3[3] = "./Images/Quote3-4.jpg" ;

Images4[0] = "./Images/Quote4-1.jpg" ;
Images4[1] = "./Images/Quote4-2.jpg" ;
Images4[2] = "./Images/Quote4-3.jpg" ;
Images4[3] = "./Images/Quote4-4.jpg" ;

function changeImage1() {
    document.getElementById("img1").src = Images1[i] ;
    if (i < Images1.length - 1 ){
        i++ ; 
    } else {
        i = 0 ;
    }
    setTimeout("changeImage1()", timeout) ;
}

function changeImage2() {
    document.getElementById("img2").src = Images2[j] ;
    if (j < Images2.length - 1 ){
        j++ ; 
    } else {
        j = 0 ;
    }
    setTimeout("changeImage2()", timeout) ;
}

function changeImage3() {
    document.getElementById("img3").src = Images3[k] ;
    if (k < Images3.length - 1 ){
        k++ ; 
    } else {
        k = 0 ;
    }
    setTimeout("changeImage3()", timeout) ;
}

function changeImage4() {
    document.getElementById("img4").src = Images4[m] ;
    if (m < Images4.length - 1 ){
        m++ ; 
    } else {
        m = 0 ;
    }
    setTimeout("changeImage4()", timeout) ;
}
