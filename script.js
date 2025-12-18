const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const copyTicker = document.getElementById("copyTicker");
if (copyTicker) {
  copyTicker.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("RAT");
      copyTicker.textContent = "Copied";
      setTimeout(() => (copyTicker.textContent = "Copy ticker"), 1200);
    } catch {
      alert("Copy not supported on this device.");
    }
  });
}

const CONTRACT = "PASTE_CONTRACT_HERE";

const contractValue = document.getElementById("contractValue");
const toggleContract = document.getElementById("toggleContract");
const copyContract = document.getElementById("copyContract");

let revealed = false;

function renderContract() {
  if (!contractValue) return;
  contractValue.textContent = revealed ? CONTRACT : "Hidden";
  if (toggleContract) toggleContract.textContent = revealed ? "Hide contract" : "Reveal contract";
}

if (toggleContract) {
  toggleContract.addEventListener("click", () => {
    revealed = !revealed;
    renderContract();
  });
}

if (copyContract) {
  copyContract.addEventListener("click", async () => {
    if (!CONTRACT || CONTRACT === "PASTE_CONTRACT_HERE") {
      alert("Add your contract first.");
      return;
    }
    try {
      await navigator.clipboard.writeText(CONTRACT);
      copyContract.textContent = "Copied";
      setTimeout(() => (copyContract.textContent = "Copy contract"), 1200);
    } catch {
      alert("Copy not supported on this device.");
    }
  });
}

renderContract();
