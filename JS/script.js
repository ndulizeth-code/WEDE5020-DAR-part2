// WEDE5020 Part 2 - JavaScript for DAR

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile hamburger menu toggle - Part 2 requirement
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if(hamburger){
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show'); // Toggles mobile menu
    });
  }

  // 2. Form validation and submission - Part 2 requirement
  const form = document.getElementById('enquiryForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevents page reload
      // Simple validation is done by 'required' in HTML, this is feedback
      alert('Thank you! Your enquiry has been sent to Durban Animal Rescue. We will contact you within 24 hours. 🐾');
      form.reset(); // Clears form after submit
    });
  }
});