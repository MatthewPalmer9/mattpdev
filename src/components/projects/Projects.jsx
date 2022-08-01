import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section className="section-projects" id="projects">
            <div className="container">
                <p className="label">PROJECTS</p>
                <h2 className="heading-secondary">What have I built?</h2>
                <div className="grid grid-three-cols">
                    <ProjectCard 
                        link={"https://quirky-jennings-58c09b.netlify.app/"}
                        imgSrc={"/img/website-thumbnail.PNG"}
                        title={"MattPDev"}
                        description={"Let's start here! This portfolio, and all of my projects here, are not built with Bootstrap. This website is designed from scratch to reinforce foundational knowledge!"}
                    />
                    <ProjectCard 
                        link={"https://quirky-jennings-58c09b.netlify.app/"}
                        imgSrc={"/img/omnifood.PNG"}
                        title={"Omnifood"}
                        description={"A fake, AI-powered food subscription and delivery business that aims to make eating healthy convenient, effortless and automated."}
                    />
                    <ProjectCard 
                        link={"https://grand-hotel-silk.vercel.app/"}
                        imgSrc={"/img/grand-hotel.PNG"}
                        title={"Grand Hotel"}
                        description={"A pseudo-luxurious hotel service that aims help to anyone achieve the most absolute royal experience they are looking for... Of course, for a price!"}
                    />
                </div>
            </div>
        </section>
    );
}
