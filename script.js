// Button Click
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button clicked!');
});

// Hover
document.getElementById('hoverBtn').addEventListener('mouseover', () => {
  document.getElementById('hoverBtn').style.backgroundColor = 'lightgreen';
});

// Double Click
document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('🎉 Secret unlocked!');
});

// Keypress Detection
document.getElementById('keyInput').addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Slideshow Logic
const images = ['img/cat1.jpg', 'img/cat2.jpg'];
let index = 0;
document.getElementById('nextSlide').addEventListener('click', () => {
  index = (index + 1) % images.length;
  document.getElementById('slideImage').src = images[index];
});

// Tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    document
      .querySelectorAll('.tabContent')
      .forEach((el) => el.classList.remove('active'));
    document
      .getElementById(`tabContent${tab.dataset.tab}`)
      .classList.add('active');
  });
});

// Form Validation
document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('formFeedback');

  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = 'Invalid email format!';
    feedback.style.color = 'red';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters!';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Form submitted successfully!';
  feedback.style.color = 'green';
});

// Real-time feedback
document.getElementById('password').addEventListener('input', function () {
  const feedback = document.getElementById('formFeedback');
  if (this.value.length < 8) {
    feedback.textContent = 'Password too short!';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = 'Looks good!';
    feedback.style.color = 'blue';
  }
});
