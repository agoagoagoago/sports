// SportsConduct Main JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNavigation.classList.toggle('active');
        });
    }
    
    // Dropdown Menu for Mobile
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    
    function setupDropdowns() {
        dropdownItems.forEach(item => {
            const link = item.querySelector('a');
            
            // Remove existing event listeners
            link.replaceWith(link.cloneNode(true));
            const newLink = item.querySelector('a');
            
            if (window.innerWidth <= 768) {
                newLink.addEventListener('click', function(e) {
                    // Only prevent default for dropdown parent links, not regular anchor links
                    if (item.querySelector('.sub-menu')) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            } else {
                // On desktop, allow the "How To Watch" main link to work
                newLink.addEventListener('click', function(e) {
                    if (item.querySelector('.sub-menu') && newLink.getAttribute('href') !== '#') {
                        // Allow the main "How To Watch" link to navigate
                        return true;
                    }
                });
            }
        });
    }
    
    setupDropdowns();
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mainNavigation.classList.contains('active')) {
                        mainNavigation.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                    }
                } else {
                    // If target doesn't exist, scroll to the parent section (How To Watch)
                    const howToWatchSection = document.querySelector('#how-to-watch');
                    if (howToWatchSection) {
                        e.preventDefault();
                        const headerHeight = document.querySelector('.site-header').offsetHeight;
                        const targetPosition = howToWatchSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (mainNavigation.classList.contains('active')) {
                            mainNavigation.classList.remove('active');
                            mobileMenuToggle.classList.remove('active');
                        }
                    }
                }
            }
        });
    });
    
    // Sticky Header Enhancement
    let lastScroll = 0;
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
            
            if (currentScroll > lastScroll) {
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });
    
    // Lazy Loading for Images
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Search Functionality (Basic Implementation)
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = this.querySelector('input[type="search"]').value;
            
            if (searchTerm) {
                // In a real implementation, this would perform an actual search
                console.log('Searching for:', searchTerm);
                alert('Search functionality would be implemented here for: ' + searchTerm);
            }
        });
    }
    
    // Analytics Event Tracking (Placeholder)
    const trackEvent = function(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    };
    
    // Track clicks on streaming guide cards
    const guideCards = document.querySelectorAll('.guide-card');
    
    guideCards.forEach(card => {
        card.addEventListener('click', function() {
            const platform = this.querySelector('h3').textContent;
            trackEvent('Streaming Guide', 'Click', platform);
        });
    });
    
    // Track read more clicks
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function() {
            const articleTitle = this.closest('article').querySelector('h3').textContent;
            trackEvent('Article', 'Read More', articleTitle);
        });
    });
    
    // Handle Window Resize
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Reset mobile menu on resize to desktop
            if (window.innerWidth > 768) {
                mainNavigation.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                
                // Reset dropdown active states
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
            
            // Reinitialize dropdowns for new screen size
            setupDropdowns();
        }, 250);
    });
    
    // Form Validation (if forms are added)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
    // Add CSS for dynamic header states
    const style = document.createElement('style');
    style.textContent = `
        .site-header.scrolled {
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .site-header.hide {
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
        }
        
        .site-header {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
        }
        
        .error {
            border-color: #ff0000 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Performance optimization - Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Initialize
    console.log('SportsConduct website initialized');
});