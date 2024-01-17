let count = document.getElementById("count").innerText;
document.getElementById("add").addEventListener("mouseover", () => {
  count++;
  document.getElementById("count").innerText = count;
});
