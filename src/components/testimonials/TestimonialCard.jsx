export default function TestimonialCard(props) {
  const {pictureSrc, name, socialLink, title, quote} = props;
  
  return (
    <div className="testimonial-card-wrapper">
      <img 
        className="testimonial-card-image" 
        src={pictureSrc} 
        alt="testimonial person" 
      />
      <span className="testimonial-name">
        {name}
        <a className="social-link" rel="noreferrer" target="_blank" href={socialLink}>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </span>
      <span className="testimonial-role">{title}</span>
      <p className="testimonial-quote">
        "{quote}"
      </p>
    </div>
  )
}
