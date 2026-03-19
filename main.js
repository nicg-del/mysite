// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) navLinks.classList.remove('open');
  });
}

// Blog category filter
const filterBtns = document.querySelectorAll('.filter-btn');
const blogItems = document.querySelectorAll('.blog-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    blogItems.forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
    });
  });
});

// Subscribe form
function handleSubscribe(e) {
  e.preventDefault();
  const form = e.target;
  form.querySelector('input').value = '';
  const msg = document.createElement('p');
  msg.style.cssText = 'color:#16a34a;font-size:0.875rem;margin-top:0.75rem;text-align:center;';
  msg.textContent = '🙌 You\'re in! Watch your inbox.';
  form.after(msg);
  setTimeout(() => msg.remove(), 4000);
}

// Contact form
function handleContact(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  if (status) {
    status.textContent = '✅ Message sent! I\'ll get back to you soon.';
    e.target.reset();
  }
}
