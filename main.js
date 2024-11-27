class PrecareLabsApp {
    constructor() {
        this.initEventListeners();
        this.initPreloader();
    }

    initEventListeners() {
        document.getElementById('access-report-btn').addEventListener('click', this.accessReport);
        document.querySelectorAll('.main-navigation a').forEach(link => {
            link.addEventListener('click', this.navigateToSection);
        });
    }

    initPreloader() {
        window.addEventListener('load', () => {
            document.getElementById('preloader').style.display = 'none';
        });
    }

    accessReport() {
        const reportReference = document.getElementById('report-reference').value;
        if (reportReference) {
            // Simulated report access
            fetch(`/api/reports/${reportReference}`)
                .then(response => response.json())
                .then(data => {
                    // Handle report display
                    console.log(data);
                });
        }
    }

    navigateToSection(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
}
  document.addEventListener('DOMContentLoaded', () => {
      // Common JavaScript functionality
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
              // Add active state or tracking
          });
      });
  });
});