import './MainContent.css';
import email from '../../assets/Button.svg';
import linkedin from '../../assets/link_button_one.svg';
import profile from '../../assets/my_img.jpg';

const MainContent = () => {
  return (
    <div>
      <img src={profile} className='header--image' />
      <h1 className='header--name'>Isha Goyal</h1>
      <h5 className='header--title'>Software Engineer</h5>
      <div className='header--button'>
        <a href="mailto: ishagoyal2199@gmail.com" target='_blank'>
          <img src={email} />
        </a>
        <a href="https://www.linkedin.com/in/isha-goyal-761617187/" target='_blank'>
          <img src={linkedin} />
        </a>
      </div>

      <div className='main--content'>
        <label className='main--title'>About</label>
        <label className='main--sub__title'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with best practices, and am always looking for new things to learn.</label>
        <label className='main--title'>Interests</label>
        <label className='main--sub__title'>Food expert. Reader. Creative. Internet fanatic. Website Designer. Dancer. Coffee fanatic.</label>
      </div>
    </div>
  );
};

export default MainContent;