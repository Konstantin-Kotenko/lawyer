import { HeroSection,HeroWrapper, HeroText,TitleHeroSection,HeroButton } from "./Hero.styled"

export const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
            <TitleHeroSection>
                Our Independence Makes the Difference
            </TitleHeroSection>
            <HeroText>
                Nationally Established. Internationally Recognized
            </HeroText>
            <HeroButton>Free Consultation</HeroButton>   
        </HeroWrapper>
        </HeroSection>        
    )
}