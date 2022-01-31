import React, { useLayoutEffect } from 'react';
import About from './components/about/About.jsx';
import WorkExperience from './components/experience/WorkExperience.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Projects from './components/projects/Projects.jsx';

function App() {

  useLayoutEffect(() => {
    const sectionHeroEl = document.querySelector(".section-hero");
        const header = document.querySelector(".header");

        const obs = new IntersectionObserver(
        function (entries) {
            const ent = entries[0];
            console.log(ent);

            if (ent.isIntersecting === false) {
            header.classList.add("sticky");
            }

            if (ent.isIntersecting === true) {
            header.classList.remove("sticky");
            }
        },
        {
            // In the viewport
            root: null,
            threshold: 0,
            rootMargin: "-80px",
        }
        );
        obs.observe(sectionHeroEl);

        // smooth scrolling
        const allLinks = document.querySelectorAll("a:link");

        allLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            const href = link.getAttribute("href");
            if(href.startsWith("#")) {
              e.preventDefault();
            }

            // Scroll back to top
            if (href === "#top")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            // Scroll to other links
            if (href !== "#top" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
            }

            // Close mobile naviagtion
            if (link.classList.contains("main-nav-link"))
            header.classList.toggle("nav-open");
        });
        });
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="shadow">
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/mattpdev" className="social-link linkedin">
            <ion-icon className="social-icon" name="logo-linkedin"></ion-icon>
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/mattpdev" className="social-link twitter">
            <ion-icon className="social-icon" name="logo-twitter"></ion-icon>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/matthewpalmer9" className="social-link github">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>

      <Header />
      <Main />
      <About />
      <WorkExperience />
      <Projects />
    </>
  );
}

export default App;
