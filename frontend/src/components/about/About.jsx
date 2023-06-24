import './about.scss';
import eth from '../../images/eth 1.png';
import { ABOUT } from '../../constants';

const About = () => {
  return (
    <div id="About" className="about">
      <h1 className="about-title">
        About <span>ereumX</span>
      </h1>
      <p className="about-p">
        Our team is committed to providing the best online experience for our
        users with a careful laid out methodology to identify the best payment
        methods most likely to fit your needs. We examine annual percentage
        rates, interest.
      </p>
      <div className="about-details">
        <div className="eth-wrapper">
          <img className="eth" src={eth} alt="eth-gold" />
        </div>
        <div className="eth-details">
          {ABOUT.map((about) => (
            <div key={about.id} className="icon-details">
              <div className="icon-holder">
                <img src={about.img} alt="" />
              </div>
              <div className="icon-texts">
                <h2>{about.title}</h2>
                <p>{about.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
