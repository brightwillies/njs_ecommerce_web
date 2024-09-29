import "./Hero.scss";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS  ONLIY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>New </p>
                        <img src={hand_icon} alt="" />
                    </div>

                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>

                <div className="hero-latest-btn">
                    <div>
                        Latest Collection
                        <span></span>
                        {/* <img src={arrow_icon} alt="" /> */}
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
