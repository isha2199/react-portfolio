import './Footer.css';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import github from '../../assets/github.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://twitter.com/IshaGoy46818469' target='_blank'><img src={twitter} /></a>
      <a href='https://www.facebook.com/Ishagoyal2199' target='_blank'><img src={facebook} /></a>
      <a href='https://www.instagram.com/_.iishuu__/' target='_blank'><img src={instagram} /></a>
      <a href='https://github.com/isha2199' target='_blank'><img src={github} /></a>
    </div>
  );
}

export default Footer;