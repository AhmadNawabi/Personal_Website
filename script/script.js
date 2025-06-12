       // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      scrollProgress.style.width = `${scrolled}%`;
    });
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    // Function to animate all sections
    function animateOnScroll(elements, offset = 100) {
      elements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - offset) {
          setTimeout(() => {
            el.classList.add("animate");
          }, index * 150);
        }
      });
    }
    // Initialize animations for all sections
    function initializeAnimations() {
      const skillCategories = document.querySelectorAll(".skill-category");
      const contactItems = document.querySelectorAll(".contact-item");
      const projectCards = document.querySelectorAll(".project-card");
      animateOnScroll(skillCategories);
      animateOnScroll(contactItems);
      animateOnScroll(projectCards);
      // Update progress bars after animation
      skillCategories.forEach(category => {
        const skillBars = category.querySelectorAll(".skill-progress");
        skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
      });
    }
    // Scroll event listener for animations
    window.addEventListener("scroll", () => {
      initializeAnimations();
    });
    // Initial call on page load
    window.addEventListener("load", () => {
      initializeAnimations();
      document.getElementById("year").textContent = new Date().getFullYear();
    });
    // Contact form submission
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.querySelector(".form-feedback");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formFeedback.classList.remove("error");
      formFeedback.classList.add("success");
      formFeedback.textContent = "Your message has been sent successfully!";
      formFeedback.style.display = "block";
      contactForm.reset();
      setTimeout(() => {
        formFeedback.style.display = "none";
      }, 5000);
    });
    // Floating elements animation
    const floatingElements = document.querySelectorAll(".floating-element");
    floatingElements.forEach(el => {
      el.style.animationDuration = `${Math.random() * 10 + 10}s`;
      el.style.animationDelay = `${Math.random() * 5}s`;
    });
    // Initialize particles.js
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: "#6C63FF"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.7,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 180,
          color: "#6C63FF",
          opacity: 0.4,
          width: 1.5
        },
        move: {
          enable: true,
          speed: 3
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 180
          },
          push: {
            particles_nb: 6
          }
        }
      },
      retina_detect: true
    });
    // 3D Avatar Implementation
    const init3DAvatar = () => {
      const container = document.getElementById("avatar-container");
      if (!container) return;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      const geometry = new THREE.SphereGeometry(1, 64, 64);
      const material = new THREE.MeshPhongMaterial({
        color: 0x6C63FF,
        emissive: 0x6C63FF,
        emissiveIntensity: 0.2,
        specular: 0xffffff,
        shininess: 50,
        wireframe: true,
        transparent: true,
        opacity: 0.9
      });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
      const pointLight = new THREE.PointLight(0x6C63FF, 1, 100);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);
      camera.position.z = 2.5;
      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
        sphere.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.05;
        sphere.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.05;
        sphere.scale.z = 1 + Math.sin(Date.now() * 0.001) * 0.05;
        renderer.render(scene, camera);
      };
      animate();
      container.addEventListener("mousemove", (e) => {
        sphere.rotation.y = (e.clientX / window.innerWidth) * Math.PI * 2;
        sphere.rotation.x = (e.clientY / window.innerHeight) * Math.PI * 2;
      });
      window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    };
    init3DAvatar();
    // CV Download Functionality
    document.getElementById("downloadCV").addEventListener("click", function () {
      const link = document.createElement("a");
      const cvContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Ahmad Nawabi - CV</title>
          <style>
            body {
              font-family: 'Poppins', sans-serif;
              line-height: 1.6;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
              color: #333;
            }
            h1, h2 {
              font-family: 'Raleway', sans-serif;
              color: #6C63FF;
            }
            .section {
              margin-bottom: 2rem;
              padding-bottom: 1rem;
              border-bottom: 1px solid #eee;
            }
            .contact-info {
              margin-bottom: 1.5rem;
            }
            .skills-list {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1rem;
            }
            .experience-item {
              margin-bottom: 1.5rem;
            }
            .experience-title {
              font-weight: 600;
              margin-bottom: 0.5rem;
            }
            .experience-date {
              color: #666;
              font-size: 0.9rem;
              margin-bottom: 0.5rem;
            }
          </style>
        </head>
        <body>
          <h1>Ahmad Nawabi</h1>
          <p>Full Stack Developer & UI/UX Specialist</p>
          <div class="contact-info">
            <p><strong>Email:</strong> ahmad@example.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
            <p><strong>Location:</strong> Tulsa, Oklahoma, USA</p>
            <p><strong>Portfolio:</strong> https://ahmadnawabi.com</p>
            <p><strong>GitHub:</strong> github.com/ahmadnawabi</p>
          </div>
          <div class="section">
            <h2>Professional Summary</h2>
            <p>Innovative Full Stack Developer with 5+ years of experience designing and building web applications...</p>
          </div>
          <div class="section">
            <h2>Technical Skills</h2>
            <div class="skills-list">
              <div>
                <h3>Frontend</h3>
                <ul>
                  <li>React.js (Advanced)</li>
                  <li>JavaScript/ES6+</li>
                  <li>HTML5 & CSS3</li>
                  <li>Redux & Context API</li>
                  <li>Styled Components</li>
                  <li>GSAP Animations</li>
                </ul>
              </div>
              <div>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Authentication (JWT)</li>
                </ul>
              </div>
              <div>
                <h3>Tools & Other</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>AWS Services</li>
                  <li>CI/CD Pipelines</li>
                  <li>Agile Methodologies</li>
                  <li>UI/UX Principles</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;
      const blob = new Blob([cvContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = "Ahmad_Nawabi_CV.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      alert("CV download started!");
    });
    // Initialize the CV download button
