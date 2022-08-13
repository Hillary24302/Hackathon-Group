import React from 'react';
import  Profile  from '../../Images/map.png';
import { Location, LocationWrapper, Wrapper, TextWrapper, Heading, Subtitle, ImgWrapper, Img, TimeIcon, Time, CalenderIcon, Calender } from './Location.elements';
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

const LocateUs = () => {
  return (
    <>
        <Location>
                <LocationWrapper>
                    <Wrapper>
                        <TextWrapper>
                            <Heading>Main office</Heading>
                            <Subtitle>Location</Subtitle>
                        </TextWrapper>
                        <TextWrapper>
                                <TimeIcon><GoLocation /><Time>Maintain trail 40</Time></TimeIcon>
                                <CalenderIcon><AiOutlineCalendar /><Calender>Mon / Sun: 9:00-17:00</Calender></CalenderIcon>  
                        </TextWrapper>
                    </Wrapper>
                    <Wrapper>
                        <ImgWrapper>
                            <Img src = {Profile} 
                                        alt ="jack"/>
                        </ImgWrapper>
                    </Wrapper>
                </LocationWrapper>
        </Location>
    </>
  )
}

export default LocateUs



