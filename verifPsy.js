function verifPassword() {
  if (
    document.getElementById("input9").value !=
    document.getElementById("input10").value
  ) {
    alert("Passwords have to be identical ");
  }
}

function vérification_name() {
  var chname = document.getElementById("input1").value.toUpperCase();
  for (var i = 0; i < chname.length; i++) {
    if (chname[i] < "A" || chname[i] > "Z")
      alert("Name has to be only in letters");
  }
}

function vérification_lastname() {
  var chlast_name = document.getElementById("input2").value.toUpperCase();
  for (var i = 0; i < chlast_name.length; i++) {
    if (chlast_name[i] < "A" || chlast_name[i] > "Z")
      alert(" Last Name has to be only in letters");
  }
}
function degg() {
  var dg = document.getElementById("input12").value.toUpperCase();
  for (var i = 0; i < dg.length; i++) {
    if (dg[i] < "A" || dg[i] > "Z")
      alert(" Degree has to be only in letters");
  }
}
function spec() {
  var special = document.getElementById("input13").value.toUpperCase();
  for (var i = 0; i < special.length; i++) {
    if (special[i] < "A" || special[i] > "Z")
      alert(" Speciality has to be only in letters");
  }
}
function uni() {
  var univ = document.getElementById("input11").value.toUpperCase();
  for (var i = 0; i < univ.length; i++) {
    if (univ[i] < "A" || univ[i] > "Z")
      alert(" University has to be only in letters");
  }
}
