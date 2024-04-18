// Get the input element
const searchInput = document.getElementById('searchInput');

// Get all products
const products = document.querySelector('.product');

// Add event listener for input
searchInput.addEventListener('input', function() {
const searchText = searchInput.value.toLowerCase();

// Loop through all products
products.forEach(product => {
const title = product.querySelector('h3').innerText.toLowerCase();
const description = product.querySelector('p:last-child').innerText.toLowerCase();

// Show/hide products based on search query
if (title.includes(searchText) || description.includes(searchText)) {
product.style.display = 'block';
} else {
product.style.display = 'none';
}
});
});