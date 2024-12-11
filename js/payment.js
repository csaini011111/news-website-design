function initializePayment() {
    const paymentForms = document.querySelectorAll('.payment-form');
    const gpayButton = document.querySelector('.gpay-button');

    paymentForms.forEach(form => {
        form.addEventListener('submit', handlePayment);
    });

    if (gpayButton) {
        gpayButton.addEventListener('click', handlePayment);
    }
}

function handlePayment(e) {
    e.preventDefault();
    
    showConfirmationPopup();
}

function showConfirmationPopup() {
    const popup = document.createElement('div');
    popup.className = 'payment-popup';
    
    popup.innerHTML = `
        <div class="popup-content">
            <div class="success-icon">✓</div>
            <h2>Payment Successful!</h2>
            <p>Thank you for subscribing to CZUNews!</p>
            <a href="/" class="btn">Return to Homepage</a>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Trigger animation
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
}

document.addEventListener('DOMContentLoaded', initializePayment);