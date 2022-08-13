import React from 'react';
import { Container } from '../../globalStyles';
import  UserImg  from '../../Images/hack3.png';
import  UserIcon1  from '../../Images/icon1.png';
import  UserIcon2  from '../../Images/icon2.png';
import  UserIcon3  from '../../Images/icon3.png';
import  UserIcon4  from '../../Images/icon4.png';
import  UserIcon5  from '../../Images/icon5.png';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, 
    ImgWrapper, Img, ImgTextWrapper, ImageInfor, Image, Text } from './ChooseUs.elements';

const ChooseUs = () => {
  return (
    <>
        <InfoSec>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading>Why choose us</Heading>
                            <Subtitle>Our expert team of medical personnel are committed to providing good quality and cost efficient health care and are available 24/7 to monitor patients progress</Subtitle>
                        </TextWrapper>
                        <ImgTextWrapper>
                            <ImageInfor>
                                <Image
                                    src = {UserIcon1} 
                                        alt ="jack"
                                />
                                <Text>Over 20 years of experience</Text>
                            </ImageInfor>
                            <ImageInfor>
                                <Image
                                    src = {UserIcon2} 
                                        alt ="jack"
                                />
                                <Text>Highly qualified doctors and surgeons</Text>
                            </ImageInfor>
                            <ImageInfor>
                                <Image
                                    src = {UserIcon3} 
                                        alt ="jack"
                                />
                                <Text>Modern medical equipment</Text>
                            </ImageInfor>
                            <ImageInfor>
                                <Image
                                    src = {UserIcon4} 
                                        alt ="jack"
                                />
                                <Text>Legal and psychological support</Text>
                            </ImageInfor>
                            <ImageInfor>
                                <Image
                                    src = {UserIcon5} 
                                        alt ="jack"
                                />
                                <Text>Individual medical programs</Text>
                            </ImageInfor>
                        </ImgTextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper>
                            <Img
                                src = {UserImg} 
                                    alt ="jack"
                            />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default ChooseUs



