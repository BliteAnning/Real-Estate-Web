import Navbar from "./Navbar";

const Home = () => {
    const direct = () =>{
        document.getElementById('projects').scrollIntoView({behavior: "smooth"})
    };
    const direct2 = ()=>{
        document.getElementById('contact').scrollIntoView({behavior: "smooth"})
    };

    return ( 
        <section id="homePage">
            <Navbar />
            <div className="headtext">
                <span >Explore homes that fit your dream</span>
                <div className="Btns">
                    <button className ='Btn'onClick={direct}>Project</button>
                    <button className ='Btn2'onClick={direct2}>Connect with us</button>
                </div>
            </div>
            
            
            
               
            
        </section>

    );
}
 
export default Home;