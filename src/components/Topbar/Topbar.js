import React, {useState, useEffect} from 'react'
import { FaTimes, FaBars} from 'react-icons/fa';
import { Top, TopbarContainer, TopbarLeft, TopbarLogo,TopbarCenter, CenterSpan,
      MobileIcon, CenterLinks, TopItemBtm, TopBtmLink } from './Topbar.elements'
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';


const Topbar = () => {
  const [click, setClick] = useState(false)

  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  }

  useEffect(() => {
      showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value = {{color: "#ff0000"}}>
        <Top>
          <TopbarContainer>
              <TopbarLeft>
                <TopbarLogo to="/">MediCare</TopbarLogo>
              </TopbarLeft>
              <MobileIcon onClick={handleClick} >{click ? <FaTimes /> : <FaBars />}</MobileIcon>
                  <TopbarCenter onClick={handleClick} click = {click}>
                    <CenterSpan>
                      <CenterLinks to ="/">Home</CenterLinks>
                    </CenterSpan>
                    <CenterSpan>
                      <CenterLinks to ="/research">Research</CenterLinks>
                    </CenterSpan>
                    <CenterSpan>
                      <CenterLinks to ="/create-appointment">Book Appointment</CenterLinks>
                    </CenterSpan>
                    <CenterSpan>
                      <CenterLinks to ="/health">Health Topics</CenterLinks>
                    </CenterSpan>
                    <TopItemBtm>
                        {button ? (
                            <TopBtmLink to="/sign-up">
                            <Button primary>SIGN UP</Button>
                            </TopBtmLink>
                        ) : (
                            <TopBtmLink to="/sign-up">
                                <Button  fontBig primary>
                                    SIGN UP
                                </Button>
                            </TopBtmLink>
                        )}
                    </TopItemBtm>
                  </TopbarCenter>
          </TopbarContainer>
        </Top>
      </IconContext.Provider>
    </>
  )
}

export default Topbar