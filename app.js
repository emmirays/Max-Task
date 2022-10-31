prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      "You love each other like Julliet loves Romeo."
  );

  if (loveScore > 30 && loveScore <= 70) {
    alert("Your loveScore is " + loveScore + "%");
  }

  if (loveScore <= 30) {
    alert(
      "Your loveScore is " +
        loveScore +
        "%" +
        "You go toghether like oil and water"
    );
  }
} else {
  alert("Your love score is " + loveScore + "%");
}
