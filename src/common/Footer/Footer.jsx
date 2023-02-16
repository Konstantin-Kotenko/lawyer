import { FooterWrapper, SocialIcon, SocialIconLink, SocialList } from "./Footer.styled"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from "../Navigation/Navigation.styled";

export const Footer = () => {
    return (
        <FooterWrapper>
            <div>
            <SocialList>
                    <SocialIcon>
                    <SocialIconLink>
                        <FaLinkedinIn/>
                    </SocialIconLink>
                </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink>
                        <FaFacebookF/>
                    </SocialIconLink>
                </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink>
                        <FaTwitter/>
                    </SocialIconLink>
                </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink>
                        <FaSkype/>
                    </SocialIconLink>
                </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink>
                        <FaInstagram/>
                    </SocialIconLink>
                </SocialIcon>
                </SocialList>
                <Link to='/'>LOGO</Link>
            </div>
        </FooterWrapper>
    )
}