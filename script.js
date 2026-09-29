// 1. CHANGE YOUR SECRET 4-DIGIT PASSCODE HERE
const CORRECT_PASSCODE = "1234"; 

// 2. CHANGE YOUR START DATE HERE (Year, Month - 1, Day)
// January is 0, February is 1, March is 2, April is 3, May is 4, etc.
const START_DATE = new Date(2024, 0, 15); 

function checkPasscode() {
  const input = document.getElementById("passcodeInput").value;
  const errorMsg = document.getElementById("errorMessage");

  if (input === CORRECT_PASSCODE) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startCounter();
  } else {
    errorMsg.textContent = "Wrong passcode! Try again ❤️";
  }
}

function startCounter() {
  function update() {
    const now = new Date();
    const diff = now - START_DATE;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
  }
  update();
  setInterval(update, 60000);
}
