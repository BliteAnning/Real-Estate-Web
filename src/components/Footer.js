import { asset } from "../assets/asset";

const Footer = () => {
    return (
        <section id="footer">
            <div className="all-divs">
                <div className="estateDiv1">
                    <div className="estateImg">
                        <img src={asset.logo_dark} alt="" />
                    </div>
                    <div className="estateDesc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab ex, ipsam a veniam aut sed quisquam ipsa commodi
                            repudiandae rem atque iusto tempore corporis vel</p>
                    </div>
                </div>
                <div className="estateDiv2">
                    <h3>Company</h3>
                    <div className="LastDiv">
                        <a href="#homePage">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#">Privacy policy</a>
                    </div>
                </div>

                <div className="subscription">
                    <h3>Subscribe to our newsletters</h3>
                    <div className="subDesc">
                        <p>The latest news and updates sent to your inbox weekly</p>
                        <div className="mail">
                            <input type="text" placeholder="Enter your email" />
                            <button className="subBtn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>All rights reserved 2024 &copy;</p>
            </div>


        </section>
    );
}

export default Footer;