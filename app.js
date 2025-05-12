document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form Submitted Successfully!');
    this.reset();
  });
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const itemsPerLoad = 4;
  
    // Initialize each section
    document.querySelectorAll(".product-section").forEach(section => {
      const productRows = section.querySelectorAll(".product-row");
      const loadMoreBtn = section.querySelector(".load-more"); // Corrected selector
  
      // Loop through each product row and hide excess cards
      productRows.forEach(row => {
        const cards = row.querySelectorAll(".card");
        
        // Hide all cards except the first batch
        for (let i = itemsPerLoad; i < cards.length; i++) {
          cards[i].style.display = "none";
        }
        
        // Show more cards on button click
        loadMoreBtn.addEventListener("click", () => {
          const hiddenCards = Array.from(cards).filter(card => card.style.display === "none");
          hiddenCards.slice(0, itemsPerLoad).forEach(card => {
            card.style.display = "block";
          });
  
          // Hide the button if all cards are shown
          if (hiddenCards.length <= itemsPerLoad) {
            loadMoreBtn.style.display = "none";
          }
        });
      });
    });
  });
  