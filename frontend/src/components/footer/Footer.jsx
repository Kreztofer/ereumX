import './footer.scss';
import { LINKS, SOCIAL } from '../../constants';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="footer-logo">
          <h1>ereumX</h1>
          <p>A new way to send ethereum easy, reliable and secure.</p>
        </div>
        <div className="footer-desc">
          {LINKS?.map((item) => (
            <div key={item.id} className="footer-links">
              <h2>{item.title}</h2>
              {item.details?.map((link) => (
                <p key={link.id}>{link.detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p>Copyright @ {year} Dominicua, All Rights Reserved</p>
        <div className="social-links">
          {SOCIAL.map((item) => (
            <img key={item.id} src={item.img} alt="links" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
