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
