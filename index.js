const modalContent = document.querySelector(".modal-content");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  let inGameName = document.querySelector("#ign").value;
  if (
    document.getElementById("squireReq1").checked &&
    document.getElementById("squireReq2").checked
  ) {
    setRank("Squire");
  } else if (
    document.getElementById("expertReq1").checked &&
    document.getElementById("expertReq3").checked &&
    document.getElementById("expertReq3").checked
  ) {
    setRank("Expert");
  } else if (
    document.getElementById("knightReq1").checked &&
    document.getElementById("knightReq3").checked &&
    document.getElementById("knightReq3").checked
  ) {
    setRank("Knight");
  } else if (
    document.getElementById("paladinReq1").checked &&
    document.getElementById("paladinReq2").checked &&
    document.getElementById("paladinReq3").checked
  ) {
    setRank("Paladin");
  } else if (
    document.getElementById("astralReq1").checked &&
    document.getElementById("astralReq2").checked
  ) {
    setRank("Astral");
  } else if (
    document.getElementById("skulledReq1").checked &&
    document.getElementById("skulledReq2").checked &&
    document.getElementById("skulledReq3").checked &&
    document.getElementById("skulledReq4").checked
  ) {
    setRank("Skulled");
  } else if (
    document.getElementById("maxedReq1").checked &&
    document.getElementById("maxedReq2").checked
  ) {
    setRank("Maxed");
  } else if (
    document.getElementById("beastReq1").checked &&
    document.getElementById("beastReq2").checked &&
    document.getElementById("beastReq3").checked
  ) {
    setRank("Beast");
  } else if (
    document.getElementById("lieutReq1").checked &&
    document.getElementById("lieutReq2").checked
  ) {
    setRank("Lieutenant");
  } else if (
    document.getElementById("captReq1").checked &&
    document.getElementById("captReq2").checked
  ) {
    setRank("Captain");
  } else if (
    document.getElementById("genReq1").checked &&
    document.getElementById("genReq2").checked
  ) {
    setRank("General");
  } else
    modalContent.textContent = `Welcome, ${inGameName}, make sure you only check the boxes for a section you have the reqs for!`;
};

const setRank = function (rank) {
  let inGameName = document.querySelector("#ign").value;
  modalContent.textContent = `Welcome, ${inGameName}. Your rank is: ${rank}`;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
