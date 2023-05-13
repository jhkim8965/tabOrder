/*=======================================================================================
    Default Section
=========================================================================================*/
// Get the documentElement (<html>) to display the page in fullscreen
const $docElement = document.documentElement;



/*=======================================================================================
    Funtion Section
=========================================================================================*/
// View in fullscreen
function openFullscreen() {
    if ($docElement.requestFullscreen) {
        $docElement.requestFullscreen();
    } else if ($docElement.webkitRequestFullscreen) { // Safari
        $docElement.webkitRequestFullscreen();
    } else if ($docElement.msRequestFullscreen) { // IE11
        $docElement.msRequestFullscreen();
    }
  }
  
  // Close fullscreen
  function closeFullscreen() {
    if ($docElement.exitFullscreen) {
        $docElement.exitFullscreen();
    } else if ($docElement.webkitExitFullscreen) { // Safari
        $docElement.webkitExitFullscreen();
    } else if ($docElement.msExitFullscreen) { // IE11
        $docElement.msExitFullscreen();
    }
  }



/*=======================================================================================
    Event Section
=========================================================================================*/
$("#btn-main").click(function() {
    sessionStorage.setItem("screen", "");
    window.parent.location.replace("/index.html");
});

$("#btn-fullscreen").click(function() {
    openFullscreen();
    document.getElementById("btn-fullscreen").style.display = "none";
});