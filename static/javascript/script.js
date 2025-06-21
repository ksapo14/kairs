// Modal content data
const modalData = {
    'smart-tracking': {
        title: 'Smart Tracking Technology',
        content: `
            <h3>Revolutionary Fitness Monitoring</h3>
            <p>Kairs Smart Tracking uses advanced AI-powered sensors and machine learning algorithms to provide the most accurate and comprehensive fitness monitoring available today.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>Real-time Movement Analysis</h4>
                    <p>Track every rep, step, and movement with precision using our advanced motion sensors and computer vision technology.</p>
                </div>
                <div class="feature-item">
                    <h4>Form Correction</h4>
                    <p>Get instant feedback on your exercise form to prevent injuries and maximize workout effectiveness.</p>
                </div>
                <div class="feature-item">
                    <h4>Progress Visualization</h4>
                    <p>See your fitness journey unfold with detailed charts, graphs, and progress tracking that motivate you to reach new goals.</p>
                </div>
                <div class="feature-item">
                    <h4>Predictive Analytics</h4>
                    <p>Our AI predicts your performance trends and suggests optimal workout timing for maximum results.</p>
                </div>
            </div>
            
            <p>Experience the future of fitness tracking with technology that understands your body better than ever before. Every workout becomes a step toward your optimal self.</p>
        `
    },
    'adaptive-training': {
        title: 'Adaptive Training System',
        content: `
            <h3>Personalized Workout Evolution</h3>
            <p>Our Adaptive Training System creates dynamic, personalized workout plans that evolve with your progress, ensuring you never hit a plateau.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>AI-Powered Personalization</h4>
                    <p>Workouts automatically adjust based on your performance, goals, and recovery status for optimal results.</p>
                </div>
                <div class="feature-item">
                    <h4>Progressive Overload</h4>
                    <p>Intelligent progression that challenges you at the right pace to build strength and endurance safely.</p>
                </div>
                <div class="feature-item">
                    <h4>Multi-Goal Optimization</h4>
                    <p>Whether you want to lose weight, build muscle, or improve endurance, our system balances multiple goals effectively.</p>
                </div>
                <div class="feature-item">
                    <h4>Injury Prevention</h4>
                    <p>Smart load management and recovery tracking help prevent overtraining and reduce injury risk.</p>
                </div>
            </div>
            
            <p>Never follow a static workout plan again. Let Kairs create a training experience that grows with you, keeping you challenged and motivated every step of the way.</p>
        `
    },
    'biometric-analysis': {
        title: 'Advanced Biometric Analysis',
        content: `
            <h3>Comprehensive Health Insights</h3>
            <p>Deep biometric analysis provides unprecedented insights into your body's response to exercise, recovery, and overall health.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>Heart Rate Variability</h4>
                    <p>Monitor your autonomic nervous system to optimize training intensity and recovery periods.</p>
                </div>
                <div class="feature-item">
                    <h4>Muscle Activation Mapping</h4>
                    <p>Visualize which muscle groups are working during exercises to ensure balanced development.</p>
                </div>
                <div class="feature-item">
                    <h4>Metabolic Tracking</h4>
                    <p>Real-time calorie burn and metabolic rate monitoring for accurate energy balance calculations.</p>
                </div>
                <div class="feature-item">
                    <h4>Recovery Metrics</h4>
                    <p>Track sleep quality, stress levels, and recovery readiness to optimize your training schedule.</p>
                </div>
            </div>
            
            <p>Transform raw data into actionable insights that help you understand your body better and make informed decisions about your fitness journey.</p>
        `
    },
    'virtual-coaching': {
        title: 'AI Virtual Coaching',
        content: `
            <h3>Your Personal Trainer, Always Available</h3>
            <p>Experience personalized coaching from AI-powered virtual trainers who provide expert guidance, motivation, and real-time feedback during every workout.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>Real-time Form Correction</h4>
                    <p>Get instant feedback on your exercise technique to prevent injuries and maximize effectiveness.</p>
                </div>
                <div class="feature-item">
                    <h4>Motivational Coaching</h4>
                    <p>AI coaches provide encouragement, push you through tough moments, and celebrate your achievements.</p>
                </div>
                <div class="feature-item">
                    <h4>Adaptive Instruction</h4>
                    <p>Coaching style adapts to your personality, learning preferences, and motivation triggers.</p>
                </div>
                <div class="feature-item">
                    <h4>Expert Knowledge Base</h4>
                    <p>Access to vast knowledge from certified trainers, sports scientists, and fitness experts.</p>
                </div>
            </div>
            
            <p>Never work out alone again. With Kairs Virtual Coaching, you have a knowledgeable, supportive trainer by your side 24/7, helping you achieve your fitness goals safely and effectively.</p>
        `
    },
    'social-fitness': {
        title: 'Social Fitness Community',
        content: `
            <h3>Connect, Compete, and Motivate</h3>
            <p>Join a vibrant community of fitness enthusiasts, share your journey, and stay motivated through social connections and friendly competition.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>Global Challenges</h4>
                    <p>Participate in worldwide fitness challenges and compete with users from around the globe.</p>
                </div>
                <div class="feature-item">
                    <h4>Friend Networks</h4>
                    <p>Connect with friends, share workouts, and encourage each other on your fitness journeys.</p>
                </div>
                <div class="feature-item">
                    <h4>Achievement Sharing</h4>
                    <p>Celebrate milestones and share your success stories with the Kairs community.</p>
                </div>
                <div class="feature-item">
                    <h4>Group Workouts</h4>
                    <p>Join virtual group workouts and train together with people who share your fitness goals.</p>
                </div>
            </div>
            
            <p>Fitness is more fun with friends. Build connections, find workout partners, and stay accountable through our engaging social platform that makes every sweat session a shared victory.</p>
        `
    },
    'nutrition-tracking': {
        title: 'Smart Nutrition Tracking',
        content: `
            <h3>Fuel Your Fitness Journey</h3>
            <p>Comprehensive nutrition monitoring with AI-powered meal recognition and personalized dietary recommendations to complement your fitness goals.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>Photo Food Recognition</h4>
                    <p>Simply snap a photo of your meal and let AI identify and log nutritional information automatically.</p>
                </div>
                <div class="feature-item">
                    <h4>Macro Optimization</h4>
                    <p>Get personalized macronutrient targets based on your fitness goals and training schedule.</p>
                </div>
                <div class="feature-item">
                    <h4>Meal Planning</h4>
                    <p>AI-generated meal plans that align with your dietary preferences and fitness objectives.</p>
                </div>
                <div class="feature-item">
                    <h4>Hydration Tracking</h4>
                    <p>Monitor your water intake and get reminders to stay properly hydrated throughout the day.</p>
                </div>
            </div>
            
            <p>Nutrition is half the battle in achieving your fitness goals. Let Kairs simplify healthy eating with intelligent tracking and personalized recommendations that fuel your success.</p>
        `
    },
    'recovery-optimization': {
        title: 'Recovery Optimization',
        content: `
            <h3>Rest Smart, Train Harder</h3>
            <p>Smart recovery tracking monitors sleep patterns, stress levels, and muscle recovery to optimize your rest periods and prevent overtraining.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>Sleep Quality Analysis</h4>
                    <p>Track sleep stages, duration, and quality to understand how rest affects your performance.</p>
                </div>
                <div class="feature-item">
                    <h4>Stress Monitoring</h4>
                    <p>Monitor stress levels throughout the day and learn how they impact your training capacity.</p>
                </div>
                <div class="feature-item">
                    <h4>Recovery Readiness</h4>
                    <p>Get daily readiness scores that help you decide when to push hard or take it easy.</p>
                </div>
                <div class="feature-item">
                    <h4>Active Recovery Plans</h4>
                    <p>Personalized recovery routines including stretching, meditation, and light activity recommendations.</p>
                </div>
            </div>
            
            <p>Recovery is when your body actually gets stronger. Optimize your rest periods with data-driven insights that ensure you're always ready for your next workout.</p>
        `
    },
    'gamification': {
        title: 'Fitness Gamification',
        content: `
            <h3>Make Fitness Fun and Engaging</h3>
            <p>Transform your fitness journey into an engaging game with achievements, levels, rewards, and challenges that keep you motivated and coming back for more.</p>
            
            <div class="modal-features">
                <div class="feature-item">
                    <h4>Achievement System</h4>
                    <p>Unlock badges and trophies for reaching milestones, completing challenges, and maintaining consistency.</p>
                </div>
                <div class="feature-item">
                    <h4>Level Progression</h4>
                    <p>Advance through fitness levels as you improve, with each level unlocking new features and challenges.</p>
                </div>
                <div class="feature-item">
                    <h4>Reward Points</h4>
                    <p>Earn points for every workout and redeem them for real-world rewards and premium features.</p>
                </div>
                <div class="feature-item">
                    <h4>Daily Quests</h4>
                    <p>Complete daily fitness quests and mini-challenges to keep your routine fresh and exciting.</p>
                </div>
            </div>
            
            <p>Who says fitness has to be boring? With Kairs gamification, every workout becomes an adventure, every goal becomes a quest, and every achievement becomes a celebration.</p>
        `
    }
};

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const tabObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach((tab, index) => {
                if (index > 0) {
                    setTimeout(() => {
                        tab.classList.add('visible');
                    }, index * 150);
                }
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

const videoContainer = document.getElementById('video-container');
const thresholds = [];
for (let i = 0; i <= 100; i += 2) {
    thresholds.push(i / 100);
}

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = Math.min(entry.intersectionRatio, 1);
            if (progress >= 0.5) {
                const normalizedProgress = Math.min((progress - 0.5) * 2, 1);
                const scale = 0.7 + (normalizedProgress * 0.3);
                const borderRadius = 100 - (normalizedProgress * 100);
                const opacity = 0.8 + (normalizedProgress * 0.2);
                
                videoContainer.style.transform = `translateY(-50%) scale(${scale})`;
                videoContainer.style.borderRadius = `${borderRadius}px`;
                videoContainer.style.opacity = opacity;
            } else {
                videoContainer.style.transform = `translateY(-50%) scale(0.7)`;
                videoContainer.style.borderRadius = `100px`;
                videoContainer.style.opacity = 1;
            }
        } else {
            videoContainer.style.transform = `translateY(-50%) scale(0.7)`;
            videoContainer.style.borderRadius = `100px`;
            videoContainer.style.opacity = 1;
        }
    });
}, {
    threshold: thresholds,
    rootMargin: '0px'
});

// IN CASE WE WANT VIDEO OVERLAy

// // Add this to your existing script.js
// const overlayTexts = document.querySelectorAll('.overlay-text');
// const videoSection = document.querySelector('.video-section');

// function updateOverlayText() {
//     if (!videoSection) return;

//     const scrollPosition = window.scrollY - videoSection.offsetTop;
//     const sectionHeight = videoSection.offsetHeight;
//     const scrollProgress = Math.min(Math.max(scrollPosition / sectionHeight, 0), 1); // Clamp between 0 and 1

//     // Determine which text should be visible
//     overlayTexts.forEach(text => {
//         const textId = parseInt(text.getAttribute('data-text'));
//         let opacity = 0;

//         // Define when each text appears (0-0.3, 0.3-0.6, 0.6-1)
//         if (textId === 1 && scrollProgress <= 0.3) {
//             opacity = 1;
//         }

//         text.style.opacity = opacity;
//     });
// }

// // Run on initial load and scroll
// window.addEventListener('load', updateOverlayText);
// window.addEventListener('scroll', updateOverlayText);

// Tab navigation functionality
let currentTabIndex = 0;
const scrollContainer = document.getElementById('scrollContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const tabs = document.querySelectorAll('.tab');
const indicators = document.querySelectorAll('.indicator');
const tabWidth = 340;

function updateTabNavigation() {
    prevBtn.disabled = currentTabIndex === 0;
    nextBtn.disabled = currentTabIndex === tabs.length - 1;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentTabIndex);
    });
    
    const scrollPosition = currentTabIndex * tabWidth;
    scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

function goToTab(index) {
    if (index >= 0 && index < tabs.length) {
        currentTabIndex = index;
        updateTabNavigation();
    }
}

function nextTab() {
    if (currentTabIndex < tabs.length - 1) {
        currentTabIndex++;
        updateTabNavigation();
    }
}

function prevTab() {
    if (currentTabIndex > 0) {
        currentTabIndex--;
        updateTabNavigation();
    }
}

// Modal functionality
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(tabType) {
    const data = modalData[tabType];
    if (data) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.content;
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-active');
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    if (videoContainer) {
        videoObserver.observe(videoContainer);
    }

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(el => observer.observe(el));

    const shrinkElements = document.querySelectorAll('.shrink-element');
    shrinkElements.forEach(el => observer.observe(el));

    const firstTab = document.getElementById('tab1');
    if (firstTab) {
        tabObserver.observe(firstTab);
    }

    // Tab navigation
    nextBtn.addEventListener('click', nextTab);
    prevBtn.addEventListener('click', prevTab);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToTab(index));
    });

    // Tab click handlers for modal
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.getAttribute('data-tab');
            if (tabType && modalData[tabType]) {
                openModal(tabType);
            }
        });
    });

    // Modal close handlers
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    updateTabNavigation();
    document.documentElement.style.scrollBehavior = 'auto';

    let scrollTimeout;
    scrollContainer.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollLeft = scrollContainer.scrollLeft;
            const newIndex = Math.round(scrollLeft / tabWidth);
            if (newIndex !== currentTabIndex && newIndex >= 0 && newIndex < tabs.length) {
                currentTabIndex = newIndex;
                prevBtn.disabled = currentTabIndex === 0;
                nextBtn.disabled = currentTabIndex === tabs.length - 1;
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentTabIndex);
                });
            }
        }, 150);
    });

    // Animate stats numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateNumbers = () => {
        statNumbers.forEach(stat => {
            const target = stat.textContent;
            const isPercentage = target.includes('%');
            const hasPlus = target.includes('+');
            const isTime = target.includes('/');
            
            if (isTime) return; // Skip 24/7
            
            let numericValue = parseInt(target.replace(/[^\d]/g, ''));
            let current = 0;
            const increment = numericValue / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current);
                if (numericValue >= 1000000) {
                    displayValue = (displayValue / 1000000).toFixed(1) + 'M';
                } else if (numericValue >= 1000) {
                    displayValue = (displayValue / 1000).toFixed(0) + 'K';
                }
                
                stat.textContent = displayValue + (isPercentage ? '%' : '') + (hasPlus ? '+' : '');
            }, 50);
        });
    };

    // Trigger animation when stats section is visible
    const statsSection = document.querySelector('.stats-section');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    
    document.getElementById('productsContainer').addEventListener('click', () => {
        window.location.href = "product.html"
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_bz0vsym', 'template_vav03hd', this)
      .then(() => {
        document.querySelector('.status').style.display = 'flex';
        document.querySelector('.status').style.flexDirection = 'column';
        document.querySelector('.status').style.justifyContent = 'center';
        document.querySelector('.status').style.alignItems = 'center';
        // Optional: Reset the form
        this.reset();
      }, (error) => {
        alert('FAILED...' + error.text);
      });
  });

  