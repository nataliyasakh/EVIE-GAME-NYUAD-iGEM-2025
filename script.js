document.querySelectorAll('.plasmid').forEach((el, idx) => {
  el.addEventListener('click', () => {
    alert(`You clicked on Module ${idx + 1}!`);
  });
});
