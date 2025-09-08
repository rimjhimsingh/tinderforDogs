// main.js

// Back-to-top button logic
const backToTopBtn = document.getElementById("btn-back-to-top");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Bootstrap scrollspy refresh in case of dynamic content
const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));

dataSpyList.forEach(el => {
  bootstrap.ScrollSpy.getOrCreateInstance(el).refresh();
});

// Simple signup form handler (replace with real backend)
const signUpForm = document.getElementById("signup-form");
if (signUpForm) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    try {
      // Placeholder: send to serverless endpoint or service
      console.log("Collected email:", email);
      signUpForm.reset();
      bootstrap.Modal.getInstance(document.getElementById("signupModal")).hide();
      alert("Thanks! We'll keep you posted.");
    } catch (err) {
      alert("Sorry, something went wrong. Please try again later.");
    }
  });
}