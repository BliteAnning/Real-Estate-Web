import { asset, testimonialsData } from "../assets/asset";

const Testimonial = () => {
    return ( 
        <section id="testimonials">
            <div className="testHead">
                <h1>Customer <span>Testimonials</span></h1>
                <p>Read stories of those who found Home with us</p>
            </div>

            <div className="testDiv">
                <div className="tests">
                    {testimonialsData.map((testimonial, index) =>(
                        <div className="eachtest">
                            <img src={testimonial.image} alt={testimonial.alt} />
                            <h1>{testimonial.name} </h1>
                            <p>{testimonial.title}</p>
                            <div>
                                {Array.from({length: testimonial.rating}, (item, index) =>(
                                    <img src={asset.star_icon} alt={testimonial.alt} />
                                ))}
                            </div>
                            
                            <p>{testimonial.text} </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Testimonial;