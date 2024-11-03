// Load existing reviews from localStorage on page load
window.onload = function() {
    displayReviews();
};

function submitReview() {
    const name = document.getElementById('reviewerName').value.trim();
    const text = document.getElementById('reviewText').value.trim();

    if (name === "" || text === "") {
        alert("Please enter your name and review.");
        return;
    }

    const newReview = {
        name: name,
        text: text,
        date: new Date().toLocaleString()
    };

    // Get existing reviews from localStorage or create an empty array if none exist
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Add the new review
    reviews.push(newReview);

    // Save the updated reviews back to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Clear input fields
    document.getElementById('reviewerName').value = '';
    document.getElementById('reviewText').value = '';

    // Display updated reviews
    displayReviews();
}

function displayReviews() {
    const reviewsContainer = document.getElementById('reviewsList');
    reviewsContainer.innerHTML = '';

    // Get reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Display each review
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        reviewElement.innerHTML = `
            <p class="review-name">${review.name} <span class="review-date">(${review.date})</span></p>
            <p class="review-text">${review.text}</p>
        `;

        reviewsContainer.appendChild(reviewElement);
    });
}
