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

const contractEl = document.getElementById("contract");
const copyContract = document.getElementById("copyContract");

if (copyContract) {
  copyContract.addEventListener("click", async () => {
    const addr = (contractEl?.textContent || "").trim();
    if (!addr || addr === "Coming soon") return alert("Add contract first.");
    try {
      await navigator.clipboard.writeText(addr);
      copyContract.textContent = "Copied";
      setTimeout(() => (copyContract.textContent = "Copy contract"), 1200);
    } catch {
      alert("Copy not supported on this device.");
    }
  });
}
