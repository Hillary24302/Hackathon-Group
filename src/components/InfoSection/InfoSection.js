import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, InfoStat, Statistics, StatBig, StatSmall } from './InfoSection.elements';

const InfoSection = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description,
     headline, lightText, img, alt, start, bigText, statbig, smallText, statsmall, statbig2, statbig3, statsmall2, statsmall3}) => {
  return (
    <>
        <InfoSec lightBg ={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to= '/sign-up'>
                                
                              <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        <InfoStat>
                            <Statistics>                            
                                <StatBig bigText = {bigText}>{statbig}</StatBig>
                                <StatSmall smallText ={smallText}>{statsmall}</StatSmall>
                            </Statistics>
                            <Statistics>                            
                                <StatBig bigText = {bigText}>{statbig2}</StatBig>
                                <StatSmall smallText ={smallText}>{statsmall2}</StatSmall>
                            </Statistics>
                            <Statistics>                            
                                <StatBig bigText = {bigText}>{statbig3}</StatBig>
                                <StatSmall smallText ={smallText}>{statsmall3}</StatSmall>
                            </Statistics>
                        </InfoStat>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Button } from '../../globalStyles';
// import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements';

// const InfoSection = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description,
//      headline, lightText, TopLine, img, alt, start}) => {
//   return (
//     <>
//         <InfoSec lightBg ={lightBg}>
//             <Container>
//                 <InfoRow imgStart={imgStart}>
//                     <InfoColumn>
//                         <TextWrapper>
//                             <TopLine lightTopLine={lightTopLine}>{TopLine}</TopLine>
//                             <Heading lightText={lightText}>{headline}</Heading>
//                             <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
//                             <Link to= '/sign-up'>
                                
//                               <Button big fontBig primary={primary}>
//                                     {buttonLabel}
//                                 </Button>
//                             </Link>
//                         </TextWrapper>
//                     </InfoColumn>
//                     <InfoColumn>
//                         <ImgWrapper start={start}>
//                             <Img src={img} alt={alt} />
//                         </ImgWrapper>
//                     </InfoColumn>
//                 </InfoRow>
//             </Container>
//         </InfoSec>
//     </>
//   )
// }

// export default InfoSection