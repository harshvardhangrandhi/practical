function detect() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

const x = document.getElementById('loc');
function showPosition(detect) {
    x.value = detect.coords.latitude + 
    ", " + detect.coords.longitude;
  }

function change(){
    window.location.href = "result.html"
}