const totalLevel = document.querySelector("#total-level");
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



$("#myBtn").click(function () {
  let level = $("#total-level").val();
  let achievementTier = $(".achieve").val();
  let combatTier = $(".combat").val();
  let memberYears = $("#age").val();
  let inGameName = $("#ign").val();

  
  if (level >= 1500 && achievementTier >= 2 && combatTier >= 1 )
    modalContent.textContent = `${inGameName}, You meet the REQs for SQUIRE. You have been a member of GOAT for ${memberYears} Years`;
  else if (level >= 1750 && achievementTier == 2 && combatTier == 3)
    modalContent.textContent = `${inGameName}, You meet the REQs for EXPERT. You have been a member of GOAT for ${memberYears} Years`;
  else if (level >= 2000 && achievementTier == 3 && combatTier == 4)
    modalContent.textContent = `${inGameName}, You meet the REQs for KNIGHT. You have been a member of GOAT for ${memberYears} Years`;
  else if (level >= 2200 && achievementTier == 4 && combatTier == 5)
    modalContent.textContent = `${inGameName}, You meet the REQs for PALADIN. You have been a member of GOAT for ${memberYears} Years`;
  
  else modalContent.textContent = `Welcome ${inGameName}, You dont quite meet the Requirements for Squire, but you are still welcome to join.`;
});
