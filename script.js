// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const formMessage = document.getElementById('formMessage');
    const submitButton = form.querySelector('.submit-button');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        organization: document.getElementById('organization').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // For now, we'll use mailto as a fallback
    // In production, you'd send this to a server/email service
    const mailtoLink = `mailto:your-email@sneakpeakllc.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Organization: ${formData.organization || 'N/A'}\n` +
        `Phone: ${formData.phone || 'N/A'}\n\n` +
        `Message:\n${formData.message}`
    )}`;
    
    // Show success message
    formMessage.className = 'form-message success';
    formMessage.textContent = 'Thank you for your inquiry! Please check your email client to send the message, or contact us directly.';
    formMessage.style.display = 'block';
    
    // Reset form
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'Send Inquiry';
    
    // Optional: Open email client
    // window.location.href = mailtoLink;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 10000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});
