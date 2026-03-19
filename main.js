// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
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
  const input = form.querySelector('input');
  input.value = '';
  const p = document.createElement('p');
  p.style.cssText = 'color:var(--accent);font-size:0.9rem;margin-top:0.5rem;text-align:center;';
  p.textContent = '🙌 You\'re in! Watch your inbox.';
  if (!form.nextElementSibling?.tagName === 'P') form.after(p);
  else form.after(p);
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
