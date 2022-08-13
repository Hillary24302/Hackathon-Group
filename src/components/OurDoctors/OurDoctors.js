import React from 'react'
import  Profile  from '../../Images/hack3.png';
import { Doctors, DocLabel, Container, DoctorsWrapper, ImageInfor, Wrapper, Name, TextInfor, Image,
Specialization, StarsWrap, Stars, TimeWrap, TimeIcon, Time, CalenderIcon, Calender,
NameDisc } from './OurDoctors.elements'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import { AiFillStar } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);


const OurDoctors = () => {

  return (
    <>
        <Doctors>
            <DocLabel>Our best doctors</DocLabel>
            <Container>
                <DoctorsWrapper>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <Wrapper>
                            <ImageInfor>
                                    <Image
                                        src = {Profile} 
                                            alt ="jack"
                                    />
                            </ImageInfor>
                            <TextInfor>
                                <NameDisc>
                                    <Name>Dr. Jideofor </Name>
                                    <Specialization>Cardiologist</Specialization>
                                </NameDisc>
                                <StarsWrap>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                </StarsWrap>
                                <TimeWrap>
                                    <TimeIcon><IoIosTimer /><Time>8:00-19:00</Time></TimeIcon>
                                    <CalenderIcon><AiOutlineCalendar /><Calender>Mon/Fri</Calender></CalenderIcon>  
                                </TimeWrap>
                            </TextInfor>
                        </Wrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Wrapper>
                            <ImageInfor>
                                    <Image
                                        src = {Profile} 
                                            alt ="jack"
                                    />
                            </ImageInfor>
                            <TextInfor>
                                <NameDisc>
                                    <Name>Dr. Francis </Name>
                                    <Specialization>Cardiologist</Specialization>
                                </NameDisc>
                                <StarsWrap>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                </StarsWrap>
                                <TimeWrap>
                                    <TimeIcon><IoIosTimer /><Time>8:00-19:00</Time></TimeIcon>
                                    <CalenderIcon><AiOutlineCalendar /><Calender>Mon/Fri</Calender></CalenderIcon>  
                                </TimeWrap>
                            </TextInfor>
                        </Wrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Wrapper>
                            <ImageInfor>
                                    <Image
                                        src = {Profile} 
                                            alt ="jack"
                                    />
                            </ImageInfor>
                            <TextInfor>
                                <NameDisc>
                                    <Name>Dr. Jideofor </Name>
                                    <Specialization>Cardiologist</Specialization>
                                </NameDisc>
                                <StarsWrap>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                </StarsWrap>
                                <TimeWrap>
                                    <TimeIcon><IoIosTimer /><Time>8:00-19:00</Time></TimeIcon>
                                    <CalenderIcon><AiOutlineCalendar /><Calender>Mon/Fri</Calender></CalenderIcon>  
                                </TimeWrap>
                            </TextInfor>
                        </Wrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Wrapper>
                            <ImageInfor>
                                    <Image
                                        src = {Profile} 
                                            alt ="jack"
                                    />
                            </ImageInfor>
                            <TextInfor>
                                <NameDisc>
                                    <Name>Dr. Jideofor </Name>
                                    <Specialization>Cardiologist</Specialization>
                                </NameDisc>
                                <StarsWrap>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                </StarsWrap>
                                <TimeWrap>
                                    <TimeIcon><IoIosTimer /><Time>8:00-19:00</Time></TimeIcon>
                                    <CalenderIcon><AiOutlineCalendar /><Calender>Mon/Fri</Calender></CalenderIcon>  
                                </TimeWrap>
                            </TextInfor>
                        </Wrapper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Wrapper>
                            <ImageInfor>
                                    <Image
                                        src = {Profile} 
                                            alt ="jack"
                                    />
                            </ImageInfor>
                            <TextInfor>
                                <NameDisc>
                                    <Name>Dr. Jideofor </Name>
                                    <Specialization>Cardiologist</Specialization>
                                </NameDisc>
                                <StarsWrap>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                    <Stars><AiFillStar /></Stars>
                                </StarsWrap>
                                <TimeWrap>
                                    <TimeIcon><IoIosTimer /><Time>8:00-19:00</Time></TimeIcon>
                                    <CalenderIcon><AiOutlineCalendar /><Calender>Mon/Fri</Calender></CalenderIcon>  
                                </TimeWrap>
                            </TextInfor>
                        </Wrapper>
                    </SwiperSlide>
                    ...
                </Swiper>    
                    
                </DoctorsWrapper>
            </Container>
        </Doctors>
    </>
  )
}

export default OurDoctors