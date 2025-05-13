document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form Submitted Successfully!');
    this.reset();
  });
  


 document.addEventListener("DOMContentLoaded", function () {
    const cards = Array.from(document.querySelectorAll(".product-row .col-sm-6"));
    const loadMoreButton = document.querySelector(".load-more");
    const itemsToShow = 8;
    let currentlyVisible = itemsToShow;

    // Initially hide all cards except the first 8
    cards.forEach((card, index) => {
        if (index >= itemsToShow) {
            card.classList.add("hidden");
        }
    });

    // Load More function
    function loadMore() {
        const hiddenCards = cards.slice(currentlyVisible, currentlyVisible + 4);
        hiddenCards.forEach(card => card.classList.remove("hidden"));
        currentlyVisible += 4;

        // Hide the button if no more items to show
        if (currentlyVisible >= cards.length) {
            loadMoreButton.style.display = "none";
        }
    }

    // Attach the function to the button click
    loadMoreButton.addEventListener("click", loadMore);
});
