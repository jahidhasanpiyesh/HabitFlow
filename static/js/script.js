// Function to Toggle Modal Visibility
function toggleModal() {
    const modal = document.getElementById('habitModal');
    if (modal) {
        modal.classList.toggle('hidden');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('habitModal');
    if (event.target == modal) {
        toggleModal();
    }
}