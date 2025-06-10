// script.js
// Optional: Add interactivity, e.g., show module details on click
document.querySelectorAll('.plasmid').forEach((el, idx) => {
  el.addEventListener('click', () => {
    alert(`You clicked on Module ${idx + 1}!`);
    // You can replace this with navigation or custom logic
  });
});
