import React,{useEffect,useState} from 'react';
import './Nav.css'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

function Nav(props) {
    const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  window.addEventListener("scroll", (event) => {
    if (toggleMenu) {
      setToggleMenu(false);
    }
  });
  const handleonclick = () => {
    setToggleMenu(false);
  };
    return (
        <div className="studentnav">
            <div style={{ height: 'auto', width: 'auto', overflow: 'hidden', padding: '18px' }}>
                <img style={{ maxHeight: '100%', width: '91px', overflow: 'hidden', margin: 'auto',marginRight:'10px' }} src="https://i.ibb.co/6mNnF3y/preview.jpg" alt="logo" />
            </div>
            <p style={{ marginLeft: '43px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '25px', lineHeight: '37px', color: '#000000' }}>School Name</p>
            <div style={{ height: '40px', marginLeft: '25px', borderRight: '1px solid #000000' }}></div>
            <p style={{ marginLeft: '21px',marginRight:'20px', fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '300', fontSize: '18px', lineHeight: '21px', color: '#000000' }}>Powered By Company</p>
            {(toggleMenu || screenWidth > 720) &&(
            <div className="collapsed-nav">
              <button style={{  borderRadius: '15px', padding: '15px', background: '#6755D9', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', fontSize: '20px', lineHeight: '23px', color: '#FFFFFF',margin:'auto',border:'none' }}>View Performance Analytics</button>
              <hr/>
              <NotificationsRoundedIcon className="notificationicon" style={{fontSize:'32px'}} />
              <hr/>
              <p>A</p>            
            </div>
            )}
            <button onClick={toggleNav}className="navbarbtn" >
            <MenuIcon style={{ verticalAlign: "middle", color: "#035473" }} />
          </button>
        </div>
    );
}

export default Nav;