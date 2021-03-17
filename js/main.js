const bounce = document.querySelector("#new_box_content img");
bounce.classList.add("animate__animated", "animate__bounce");
const bounce2 = document.querySelector("#new_box_content2 img");
bounce2.classList.add("animate__animated", "animate__bounce");

// Book now button
const funcBookNow = document.getElementById("bookNow");

// Reservation Form
function validate() {
  if (document.myForm.name.value == "") {
    alert("Please enter your name! :)");
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.date.value == "") {
    alert("Please select the date for reservation! :)");
    document.myForm.date.focus();
    return false;
  }
  if (document.myForm.phone.value == "") {
    alert("Please enter your phone number! :)");
    document.myForm.phone.focus();
    return false;
  }

  return true;
}

function btnSend() {
  alert(`Confirm your reservation!
Have a nice day :)`);
}

// Initialize and add the map
function initMap() {
  // The location of Vips restaurant

  const vips = { lat: 37.51863068390181, lng: 127.12896460530476 };
  // The map, centered at restaurant
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: vips,
  });
  // The marker, positioned at restaurant
  const marker = new google.maps.Marker({
    position: vips,
    map: map,
  });
}
