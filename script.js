
function filterCardsGallery(selectedId, buttonElement) {
  const cards = document.querySelectorAll('.life');

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (selectedId === "all" || category === selectedId) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Remove 'active' from all filter buttons
  document.querySelectorAll('.filter-btn-gallery').forEach(btn => {
    btn.classList.remove('active');
  });

  // Add 'active' to the clicked button
  buttonElement.classList.add('active');
}



  function filterCardsCourses(selectedId, buttonElement) {
    const cards2 = document.querySelectorAll('.life2');

    cards2.forEach(card2 => {
      const category = card2.getAttribute('data-category');
      if (selectedId === "all" || category.includes(selectedId)) {
        card2.style.display = "block";
      } else {
        card2.style.display = "none";
      }
    });

    // Remove 'active' from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Add 'active' to clicked button
    buttonElement.classList.add('active');
  }
