// Live Preview Modal Functions
function openPreviewModal(title, description) {
    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('previewTitle');
    const modalDesc = document.getElementById('previewDesc');
    
    if (modal && modalTitle && modalDesc) {
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Global Modal Functions
const serviceDataGlobal = {
    'daily-puja': {
        title: 'Daily Puja Services',
        description: 'Experience the divine rhythm of daily worship at Jela Para Durga Mandir. Our priests perform traditional puja ceremonies twice daily, inviting devotees to participate in the sacred rituals that have been conducted for generations.',
        images: [
            'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
            'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-piaflcgjdx.jpg',
            'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
            'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-cjPBuNWp27.jpg'
        ],
        features: [
            'Morning Arti at 8:00 AM',
            'Evening Arti at 6:00 PM',
            'Bhajan and Kirtan sessions',
            'Prasad distribution after puja',
            'Special puja on full moon days',
            'Online puja booking available'
        ],
        timings: 'Daily: 8:00 AM - 1:00 PM & 4:00 PM - 9:00 PM'
    },
    'festive-celebrations': {
        title: 'Festive Celebrations',
        description: 'Join us in celebrating the grand festivals that bring our community together in devotion and joy. From the spectacular Durga Puja to the illuminating Kali Puja, each festival is a testament to our rich cultural heritage and spiritual traditions.',
        images: [
            'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-piaflcgjdx.jpg',
            'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
            'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
            'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-kgjhalbd5g.jpg'
        ],
        features: [
            'Durga Puja - 5 days of grand celebration',
            'Kali Puja - Divine power worship',
            'Saraswati Puja - For students and knowledge',
            'Mahashivratri - Lord Shiva night vigil',
            'Janmashtami - Lord Krishna birthday',
            'Traditional folk performances and cultural programs'
        ],
        timings: 'October: Durga Puja | November: Kali Puja | January: Saraswati Puja'
    },
    'temple-tours': {
        title: 'Temple Tours',
        description: 'Visit our sacred temple and immerse yourself in the spiritual ambiance that has drawn devotees for over a century. Our guided tours offer insights into the temple history, architecture, and the divine legends associated with Goddess Durga.',
        images: [
            'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
            'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-cjPBuNWp27.jpg',
            'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
            'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-kgjhalbd5g.jpg'
        ],
        features: [
            'Guided temple tour (1-2 hours)',
            'History and architecture explanation',
            'Darshan of the main deity',
            'Visit to subsidiary shrines',
            'Temple premises garden walk',
            'Photograph opportunities outside sanctum'
        ],
        timings: 'Tours available: 9:00 AM - 12:00 PM & 3:00 PM - 6:00 PM'
    }
};

function openServiceModal(serviceKey) {
    console.log('Opening modal for:', serviceKey);
    
    const service = serviceDataGlobal[serviceKey];
    const modal = document.getElementById('serviceModal');
    
    console.log('Service:', service);
    console.log('Modal:', modal);
    
    if (service && modal) {
        document.getElementById('modalTitle').textContent = service.title;
        document.getElementById('modalDescription').textContent = service.description;
        document.getElementById('modalMainImage').src = service.images[0];
        
        // Set thumbnails
        const thumbnailsContainer = document.getElementById('modalThumbnails');
        thumbnailsContainer.innerHTML = '';
        service.images.forEach((img, index) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.alt = 'Gallery Image ' + (index + 1);
            thumb.className = (index === 0 ? 'active' : '');
            thumb.onclick = function() {
                document.getElementById('modalMainImage').src = img;
                document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            };
            thumbnailsContainer.appendChild(thumb);
        });
        
        // Set features
        document.getElementById('modalFeatures').innerHTML = '<h4>What We Offer</h4><ul>' + 
            service.features.map(f => '<li>' + f + '</li>').join('') + 
            '</ul>';
        
        // Set timings
        document.getElementById('modalTimings').innerHTML = '<h4>Timings</h4><p>' + service.timings + '</p>';
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        console.log('Modal activated');
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const heroSlider = document.getElementById('hero-slider');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrev = document.getElementById('hero-prev');
    const heroNext = document.getElementById('hero-next');
    const newsletterForm = document.querySelector('.newsletter-form');

    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 5000;

    // Navbar scroll effect
    const isHomePage = document.getElementById('hero-slider') !== null;
    
    function updateNavbar() {
        if (isHomePage) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        } else {
            navbar.classList.add('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Desktop Dropdown with hover and timeout
    const desktopDropdown = document.querySelector('.dropdown');
    let dropdownTimeout;

    if (desktopDropdown && window.innerWidth > 1024) {
        const dropdownContent = desktopDropdown.querySelector('.dropdown-content');
        
        desktopDropdown.addEventListener('mouseenter', function() {
            clearTimeout(dropdownTimeout);
            this.classList.add('dropdown-open');
        });

        desktopDropdown.addEventListener('mouseleave', function() {
            const self = this;
            dropdownTimeout = setTimeout(function() {
                self.classList.remove('dropdown-open');
            }, 300);
        });

        if (dropdownContent) {
            dropdownContent.addEventListener('mouseenter', function() {
                clearTimeout(dropdownTimeout);
            });

            dropdownContent.addEventListener('mouseleave', function() {
                const parent = desktopDropdown;
                dropdownTimeout = setTimeout(function() {
                    parent.classList.remove('dropdown-open');
                }, 300);
            });
        }
    }

    // Mobile dropdown toggle
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropbtn = dropdown.querySelector('.dropbtn');
        dropbtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }

    // Close mobile menu on link click
    if (navMenu) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Live Preview Modal for More Info buttons
    const previewModal = document.getElementById('previewModal');
    const previewClose = document.getElementById('previewClose');
    const previewCloseBtn = document.getElementById('previewCloseBtn');
    
    // Open preview modal
    document.querySelectorAll('.more-info-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('data-title');
            const desc = this.getAttribute('data-desc');
            openPreviewModal(title, desc);
        });
    });

    // Close preview modal
    if (previewClose) {
        previewClose.addEventListener('click', closePreviewModal);
    }
    if (previewCloseBtn) {
        previewCloseBtn.addEventListener('click', closePreviewModal);
    }
    if (previewModal) {
        previewModal.addEventListener('click', function(e) {
            if (e.target === previewModal || e.target.classList.contains('preview-overlay')) {
                closePreviewModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePreviewModal();
        }
    });

    // Hero Slider Functions
    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        
        // Update indicators
        const indicators = document.querySelectorAll('.hero-indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, slideDelay);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Create indicators
    const heroIndicators = document.getElementById('heroIndicators');
    if (heroIndicators && heroSlides.length > 0) {
        heroSlides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'hero-indicator' + (index === 0 ? ' active' : '');
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                stopSlider();
                startSlider();
            });
            heroIndicators.appendChild(indicator);
        });
    }

    // Hero slider controls
    heroNext.addEventListener('click', () => {
        nextSlide();
        stopSlider();
        startSlider();
    });

    heroPrev.addEventListener('click', () => {
        prevSlide();
        stopSlider();
        startSlider();
    });

    // Touch/Swipe support for mobile and tablet
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

    heroSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isDragging = true;
        stopSlider();
    }, { passive: true });

    heroSlider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        touchEndX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSlider.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startSlider();
    }, { passive: true });

    // Start hero slider
    startSlider();

    // Pause slider on hover (desktop only)
    if (window.innerWidth > 1024) {
        heroSlider.addEventListener('mouseenter', stopSlider);
        heroSlider.addEventListener('mouseleave', startSlider);
    }

    // Multi-step Donation Form
    const donationSteps = document.querySelectorAll('.donation-step');
    const donationAmountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.querySelector('.custom-amount-input');
    const customAmountField = document.getElementById('customAmount');
    const step1Next = document.getElementById('step1Next');
    const step2Back = document.getElementById('step2Back');
    const step3Next = document.getElementById('step3Next');
    const startNewDonation = document.getElementById('startNewDonation');
    const donationDetailsForm = document.getElementById('donationDetailsForm');
    
    let selectedAmount = 0;
    let donorName = '';

    // Function to go to specific step
    function goToStep(stepNumber) {
        donationSteps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) === stepNumber) {
                step.classList.add('active');
            }
        });
    }

    // Step 1: Amount selection buttons
    if (donationAmountBtns.length > 0) {
        donationAmountBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                donationAmountBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                if (this.dataset.amount === 'custom') {
                    customAmountInput.style.display = 'block';
                    customAmountField.focus();
                    selectedAmount = 0;
                } else {
                    customAmountInput.style.display = 'none';
                    selectedAmount = parseInt(this.dataset.amount);
                }
            });
        });
    }

    // Custom amount input change
    if (customAmountField) {
        customAmountField.addEventListener('input', function(e) {
            if (e.target.value) {
                selectedAmount = parseInt(e.target.value) || 0;
            }
        });
    }

    // Step 1 - Next button
    if (step1Next) {
        step1Next.addEventListener('click', function(e) {
            e.preventDefault();
            
            let amountSelected = false;
            donationAmountBtns.forEach(btn => {
                if (btn.classList.contains('active')) {
                    if (btn.dataset.amount === 'custom') {
                        const customVal = parseInt(customAmountField.value);
                        if (customVal > 0) {
                            selectedAmount = customVal;
                            amountSelected = true;
                        }
                    } else {
                        selectedAmount = parseInt(btn.dataset.amount);
                        amountSelected = true;
                    }
                }
            });
            
            if (amountSelected && selectedAmount > 0) {
                goToStep(2);
            } else {
                alert('Please select or enter a donation amount');
            }
        });
    }

    // Step 2 - Back button
    if (step2Back) {
        step2Back.addEventListener('click', function(e) {
            e.preventDefault();
            goToStep(1);
        });
    }

    // Step 2 - Form submission
    if (donationDetailsForm) {
        donationDetailsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(donationDetailsForm);
            donorName = formData.get('firstName') || 'Devotee';
            
            document.getElementById('selectedAmount').textContent = '₹' + selectedAmount;
            goToStep(3);
        });
    }

    // Step 3 - I've Donated button
    if (step3Next) {
        step3Next.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('thankYouAmount').textContent = '₹' + selectedAmount;
            document.getElementById('donorNameDisplay').textContent = donorName;
            goToStep(4);
        });
    }

    // Step 4 - Start new donation
    if (startNewDonation) {
        startNewDonation.addEventListener('click', function(e) {
            e.preventDefault();
            donationDetailsForm.reset();
            donationAmountBtns.forEach(b => b.classList.remove('active'));
            customAmountInput.style.display = 'none';
            customAmountField.value = '';
            selectedAmount = 0;
            donorName = '';
            goToStep(1);
        });
    }

    // Old donation form handling removed - now using multi-step

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Welcome to the Vihara community! Check your email for updates.');
        newsletterForm.reset();
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.program-card, .blog-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Gallery lightbox effect
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 10px 50px rgba(0,0,0,0.5);
            `;
            
            lightbox.appendChild(img);
            document.body.appendChild(lightbox);
            
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
            
            lightbox.addEventListener('click', () => {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    lightbox.remove();
                }, 300);
            });
        });
    });

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // Add keyboard navigation for hero slider
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopSlider();
            startSlider();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopSlider();
            startSlider();
        }
    });

    // Navbar link hover effect enhancement
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
        });
    });

    // Progress bar animation on scroll
    const progressBar = document.querySelector('.progress-fill');
    const donationSection = document.querySelector('.donation');
    
    if (progressBar && donationSection) {
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
            });
        }, { threshold: 0.5 });
        
        progressObserver.observe(donationSection);
    }

    // Modal Functionality
    const modal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');
    const moreInfoBtns = document.querySelectorAll('.more-info-btn');

    // Service data
    const serviceData = {
        'daily-puja': {
            title: 'Daily Puja Services',
            description: 'Experience the divine rhythm of daily worship at Jela Para Durga Mandir. Our priests perform traditional puja ceremonies twice daily, inviting devotees to participate in the sacred rituals that have been conducted for generations.',
            images: [
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-piaflcgjdx.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-cjPBuNWp27.jpg'
            ],
            features: [
                'Morning Arti at 8:00 AM',
                'Evening Arti at 6:00 PM',
                'Bhajan and Kirtan sessions',
                'Prasad distribution after puja',
                'Special puja on full moon days',
                'Online puja booking available'
            ],
            timings: 'Daily: 8:00 AM - 1:00 PM & 4:00 PM - 9:00 PM'
        },
        'festive-celebrations': {
            title: 'Festive Celebrations',
            description: 'Join us in celebrating the grand festivals that bring our community together in devotion and joy. From the spectacular Durga Puja to the illuminating Kali Puja, each festival is a testament to our rich cultural heritage and spiritual traditions.',
            images: [
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-piaflcgjdx.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-kgjhalbd5g.jpg'
            ],
            features: [
                'Durga Puja - 5 days of grand celebration',
                'Kali Puja - Divine power worship',
                'Saraswati Puja - For students and knowledge',
                'Mahashivratri - Lord Shiva night vigil',
                'Janmashtami - Lord Krishna birthday',
                'Traditional folk performances and cultural programs'
            ],
            timings: 'October: Durga Puja | November: Kali Puja | January: Saraswati Puja'
        },
        'temple-tours': {
            title: 'Temple Tours',
            description: 'Visit our sacred temple and immerse yourself in the spiritual ambiance that has drawn devotees for over a century. Our guided tours offer insights into the temple history, architecture, and the divine legends associated with Goddess Durga.',
            images: [
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-cjPBuNWp27.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-kgjhalbd5g.jpg'
            ],
            features: [
                'Guided temple tour (1-2 hours)',
                'History and architecture explanation',
                'Darshan of the main deity',
                'Visit to subsidiary shrines',
                'Temple premises garden walk',
                'Photograph opportunities outside sanctum'
            ],
            timings: 'Tours available: 9:00 AM - 12:00 PM & 3:00 PM - 6:00 PM'
        }
    };

    // Open modal
    moreInfoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceKey = this.getAttribute('data-service');
            const service = serviceData[serviceKey];
            
            if (service) {
                document.getElementById('modalTitle').textContent = service.title;
                document.getElementById('modalDescription').textContent = service.description;
                
                // Set main image
                document.getElementById('modalMainImage').src = service.images[0];
                
                // Set thumbnails
                const thumbnailsContainer = document.getElementById('modalThumbnails');
                thumbnailsContainer.innerHTML = '';
                service.images.forEach((img, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = img;
                    thumb.alt = 'Gallery Image ' + (index + 1);
                    thumb.classList.add(index === 0 ? 'active' : '');
                    thumb.addEventListener('click', () => {
                        document.getElementById('modalMainImage').src = img;
                        document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                    thumbnailsContainer.appendChild(thumb);
                });
                
                // Set features
                const featuresContainer = document.getElementById('modalFeatures');
                featuresContainer.innerHTML = '<h4>What We Offer</h4><ul>' + 
                    service.features.map(f => `<li>${f}</li>`).join('') + 
                    '</ul>';
                
                // Set timings
                document.getElementById('modalTimings').innerHTML = 
                    '<h4>Timings</h4><p>' + service.timings + '</p>';
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Console welcome message
    console.log('%c🙏 Welcome to Jela Para Durga Mandir - Temple & Yoga Retreat', 'font-size: 20px; color: #5B2C3A; font-family: Playfair Display;');
    console.log('%cFind your inner peace...', 'font-size: 14px; color: #F05A4F;');
});

// Global function for modal (called from onclick)
function openServiceModal(serviceKey) {
    console.log('Opening modal for:', serviceKey);
    
    const serviceData = {
        'daily-puja': {
            title: 'Daily Puja Services',
            description: 'Experience the divine rhythm of daily worship at Jela Para Durga Mandir. Our priests perform traditional puja ceremonies twice daily, inviting devotees to participate in the sacred rituals that have been conducted for generations.',
            images: [
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-piaflcgjdx.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-cjPBuNWp27.jpg'
            ],
            features: [
                'Morning Arti at 8:00 AM',
                'Evening Arti at 6:00 PM',
                'Bhajan and Kirtan sessions',
                'Prasad distribution after puja',
                'Special puja on full moon days',
                'Online puja booking available'
            ],
            timings: 'Daily: 8:00 AM - 1:00 PM & 4:00 PM - 9:00 PM'
        },
        'festive-celebrations': {
            title: 'Festive Celebrations',
            description: 'Join us in celebrating the grand festivals that bring our community together in devotion and joy. From the spectacular Durga Puja to the illuminating Kali Puja, each festival is a testament to our rich cultural heritage and spiritual traditions.',
            images: [
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-piaflcgjdx.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-kgjhalbd5g.jpg'
            ],
            features: [
                'Durga Puja - 5 days of grand celebration',
                'Kali Puja - Divine power worship',
                'Saraswati Puja - For students and knowledge',
                'Mahashivratri - Lord Shiva night vigil',
                'Janmashtami - Lord Krishna birthday',
                'Traditional folk performances and cultural programs'
            ],
            timings: 'October: Durga Puja | November: Kali Puja | January: Saraswati Puja'
        },
        'temple-tours': {
            title: 'Temple Tours',
            description: 'Visit our sacred temple and immerse yourself in the spiritual ambiance that has drawn devotees for over a century. Our guided tours offer insights into the temple history, architecture, and the divine legends associated with Goddess Durga.',
            images: [
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-1zeqyiahtp.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-cjPBuNWp27.jpg',
                'https://content3.jdmagicbox.com/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-purulia-03beq4maa9.jpg',
                'https://content3.jdmagicbox.com/v2/comp/purulia/u9/9999p3252.3252.181127232641.d5u9/catalogue/jelia-para-durga-mandir-para-purulia-temples-kgjhalbd5g.jpg'
            ],
            features: [
                'Guided temple tour (1-2 hours)',
                'History and architecture explanation',
                'Darshan of the main deity',
                'Visit to subsidiary shrines',
                'Temple premises garden walk',
                'Photograph opportunities outside sanctum'
            ],
            timings: 'Tours available: 9:00 AM - 12:00 PM & 3:00 PM - 6:00 PM'
        }
    };

    const service = serviceData[serviceKey];
    const modal = document.getElementById('serviceModal');
    
    if (service && modal) {
        document.getElementById('modalTitle').textContent = service.title;
        document.getElementById('modalDescription').textContent = service.description;
        document.getElementById('modalMainImage').src = service.images[0];
        
        // Set thumbnails
        const thumbnailsContainer = document.getElementById('modalThumbnails');
        thumbnailsContainer.innerHTML = '';
        service.images.forEach((img, index) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.alt = 'Gallery Image ' + (index + 1);
            thumb.classList.add(index === 0 ? 'active' : '');
            thumb.onclick = function() {
                document.getElementById('modalMainImage').src = img;
                document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            };
            thumbnailsContainer.appendChild(thumb);
        });
        
        // Set features
        document.getElementById('modalFeatures').innerHTML = '<h4>What We Offer</h4><ul>' + 
            service.features.map(f => '<li>' + f + '</li>').join('') + 
            '</ul>';
        
        // Set timings
        document.getElementById('modalTimings').innerHTML = '<h4>Timings</h4><p>' + service.timings + '</p>';
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Global function to close modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Add close event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('serviceModal');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeServiceModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeServiceModal();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    });
});
