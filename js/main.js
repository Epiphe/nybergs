

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("menyDropdown").classList.toggle("show");
  document.getElementById("dropDownBtn").setAttribute('aria-expanded','true');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menyButton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    document.getElementById("dropDownBtn").setAttribute('aria-expanded','false');
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
