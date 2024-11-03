document.getElementById("reviewForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
    
    // Retrieve current reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    
    // Add new review
    reviews.push({ name, review });
    
    // Save updated reviews back to localStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));
    
    // Clear the form and reload the reviews
    document.getElementById("reviewForm").reset();
    loadReviews();
});

function loadReviews() {
    // Retrieve reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    
    const reviewsContainer = document.getElementById("reviews");
    reviewsContainer.innerHTML = "";
    
    // Display each review
    reviews.forEach(({ name, review }) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `<h4>${name}</h4><p>${review}</p>`;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Load reviews on page load
loadReviews();
