document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const payNowButton = document.getElementById('pay-now');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

        // You can add your payment processing logic here
        // For demonstration, we'll simulate a successful payment
        setTimeout(() => {
            alert('Payment successful! You will be redirected.');
            window.location.href = 'main2.html'; // Redirect after payment
        }, 1000); // Simulate a 2-second payment process
    });
});
