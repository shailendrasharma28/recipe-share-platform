
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `toast show ${type}`;

  // Show toast for 5 seconds
  setTimeout(() => {
    toast.className = `toast hidden`;
  }, 3000);
}

module.exports = {showToast};