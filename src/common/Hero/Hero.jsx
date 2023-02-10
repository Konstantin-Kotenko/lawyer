import { HeroSection, HeroText,TitleHeroSection,HeroButton } from "./Hero.styled"

export const Hero = () => {
    return (
        <HeroSection>
            <TitleHeroSection>HERO</TitleHeroSection>
            <HeroText>Hey guest</HeroText>
            <HeroButton>Free Consultation</HeroButton>   
        </HeroSection>        
    )
}