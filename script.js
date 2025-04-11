
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

/**
 * Mobile Menu Toggle
 */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});






// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {
    e.preventDefault();
                
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
                
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    });
});
        
// Add active class to navigation items based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
            
    let current = '';
            
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
            
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
