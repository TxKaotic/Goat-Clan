const totalLevel = document.querySelector("#total-level")
const modalContent = document.querySelector(".modal-content")

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  
}

modalContent.textContent = totalLevel

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
}

$("#myBtn").click(function () {
    let level = $("#total-level").val();
    let achievementTier = $("#achieve").val();
    let combatTier = $("#achieve").val();
    let memberYears = $("#age").val();
    let str = "Your Total Level is: " + level
        + " Achievement Diary Tier is: " + achievementTier 
        + " Combat Tier is: " + combatTier
        + " You have been a member for: " + memberYears + "years.";
    $(".modal-content").html(str);
});
