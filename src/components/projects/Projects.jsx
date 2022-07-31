import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section className="section-projects" id="projects">
            <div className="container">
                <p className="label">PROJECTS</p>
                <h2 className="heading-secondary">What have I built?</h2>
                <div className="grid grid-three-cols">
                    {/* OMNIFOOD */}
                    <ProjectCard 
                        link={"https://quirky-jennings-58c09b.netlify.app/"}
                        imgSrc={"/img/omnifood.PNG"}
                        title={"Omnifood"}
                        description={"A fake, AI-powered food subscription and delivery business that aims to make eating healthy convenient, effortless and automated."}
                    />
                    <ProjectCard 
                        link={"https://quirky-jennings-58c09b.netlify.app/"}
                        imgSrc={"/img/omnifood.PNG"}
                        title={"Omnifood"}
                        description={"A fake, AI-powered food subscription and delivery business that aims to make eating healthy convenient, effortless and automated."}
                    />
                    <ProjectCard 
                        link={"https://quirky-jennings-58c09b.netlify.app/"}
                        imgSrc={"/img/omnifood.PNG"}
                        title={"Omnifood"}
                        description={"A fake, AI-powered food subscription and delivery business that aims to make eating healthy convenient, effortless and automated."}
                    />
                </div>
            </div>
        </section>
    );
}
