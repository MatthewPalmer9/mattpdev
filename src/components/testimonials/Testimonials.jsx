import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-testimonials">
      <div className="container">
        <p className="label">TESTIMONIALS</p>
        <h2 className="heading-secondary">
            What have people said about me?
        </h2>

        <div className="grid grid-two-cols">
          <TestimonialCard 
            pictureSrc={"/img/atarri.jfif"}
            name={"Atarri Hall"}
            socialLink={"https://www.linkedin.com/in/atarri-h-28893372/"}
            title={"Lead Business Analyst @ IBM"}
            quote={"Matthew is responsive and is a quick learner. I'm impressed by his progress and how well he has done on my team since joining in such a short time. He handles himself more as an experienced developer and is not afraid to take on a new challenge and communicates very well with the testers and other team members."}
          />

          <TestimonialCard 
            pictureSrc={"/img/marlon.jfif"}
            name={"Marlon Braga"}
            socialLink={"https://linkedin.com/in/marlon-braga"}
            title={"Associate Application Developer @ IBM"}
            quote={"Matthew has a positive attitude in the face of challenging tasks. He just loves what he does and he shows it in every word when sharing his thoughts and ideas with colleagues. [...] I'm grateful to have shared this initial path of my professional development with an individual like Matthew. I hope to always have someone like him in my team. It just makes work feel lighter."}
          />
        </div>

        <div className="grid grid-two-cols">
          <TestimonialCard 
            pictureSrc={"/img/malcolm.jfif"}
            name={"Malcolm Leake"}
            socialLink={"https://linkedin.com/in/malcolmleake"}
            title={"Application Developer @ Deloitte"}
            quote={"Matthew Palmer is very enthusiastic when it comes to writing clean code and helping others. He always finds a way to take time out of his busy schedule to give any advice if needed. He actively shares cutting edge links of the tech sector as well as showing his own personal projects he currently works on. And on top of that, he manages to pull it off while working a full-time job, being a husband, and father to a lovely girl. He's someone I could learn a thing or two from."}
          />
        </div>
      </div>
    </section>
  )
}
