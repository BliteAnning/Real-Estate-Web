import Img from '../assets/brand_img.png';

const About = () => {
    return ( 
        <section id="about">
            <div className="aboutHeading">
                <h1 className="Heading1">About Us <span className="Brand">Our Brand</span></h1>
                <p>Passionate about properties, Dedicated to your vision</p>
            </div>
            <div className="desc">
                <img src={Img} alt="" className="img1" />
                <div className="experience">
                    <div className="exp">
                        <div className="eachExp">
                            <h2>10+</h2>
                            <p>Years of Excellence</p>
                        </div>
                        <div className="eachExp">
                            <h2>20+</h2>
                            <p>Projects completed</p>
                        </div>
                        <div className="eachExp">
                            <h2>30+</h2>
                            <p>Ongoing project</p>
                        </div>
                        <div className="eachExp">
                            <h2>25+</h2>
                            <p>Mn sq Ft. delivered</p>
                        </div>
                    </div>
                    <div className="expDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro fuga eum! Tempora distinctio voluptate magnam, 
                        atque tenetur vero facilis veniam corporis vel cumque odit deleniti quidem, at, aut fuga?
                    </div>
                    <button className='learnMore'>Learn more</button>
                    
                </div>
            </div>
        </section>
     );
}
 
export default About;