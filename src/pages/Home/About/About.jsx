import Image from '../../../img/about-min.jpg'
import {AboutFirstSpan, AboutTitle, AboutFirstText, AboutImage,AboutSecondText, AboutName, AboutSeondSpan,AboutSecondTextFirstLatter, AboutContainer, FirstTextWrapper, SecondTextWrapper} from './Abaut.styled'

export const About = () => {
    return (
        <>
            <AboutContainer>
                <FirstTextWrapper>
                    <AboutFirstSpan>
                    About juristic
                </AboutFirstSpan>
                <AboutTitle>
                    We Are The Most Populer Law Firm With Various Law Services!
                </AboutTitle>
                <AboutFirstText>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum
                </AboutFirstText>
                </FirstTextWrapper>
                <div>
                    <AboutImage src={Image} alt="" />
                </div>    
                <SecondTextWrapper>
                    <AboutSecondText>
                    <AboutSecondTextFirstLatter>
                        M
                    </AboutSecondTextFirstLatter>aecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero
                </AboutSecondText>
                <AboutName>
                    Michel Jhon
                </AboutName>
                <AboutSeondSpan>
                    - CEO of the company
                </AboutSeondSpan>
                </SecondTextWrapper>
            </AboutContainer>
        </>    
    )
}