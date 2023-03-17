import { FooterWrapper, SocialIcon, SocialIconLink, SocialList, Link } from "./Footer.styled"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaInstagram,
} from 'react-icons/fa';
import { Newsletter } from "../../components/Form/Newsletter/Newsletter";

export const Footer = () => {
    return (
        <FooterWrapper>
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
                    <Newsletter/>
        </FooterWrapper>
    )
}