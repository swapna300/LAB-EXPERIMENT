<script>
        document.addEventListener('DOMContentLoaded', function () {
            const pages = document.querySelectorAll('.page');
            const navLinks = document.querySelectorAll('.nav-links a');
            const mobileMenu = document.getElementById('mobile-menu');
            const navList = document.querySelector('.nav-links');

            // Navigation between pages
            navLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    pages.forEach(page => {
                        if (page.id === targetId) {
                            page.classList.add('active');
                        } else {
                            page.classList.remove('active');
                        }
                    });
                });
            });

            // Mobile menu toggle
            mobileMenu.addEventListener('click', function () {
                navList.classList.toggle('active');
            });

            // Form submission handling
            document.getElementById('loginForm').addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Login Successful!');
            });

            document.getElementById('registerForm').addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Registration Successful!');
            });
        });
    </script>
