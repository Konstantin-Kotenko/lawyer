import { FooterWrapper, SocialIcon, SocialIconLink, SocialList } from "./Footer.styled"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from "../Navigation/Navigation.styled";
import { Newsletter } from "../../components/Form/Newsletter/Newsletter";

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
                <Link to='/' style={{
                    display: 'block', textAlign: "center",
                marginTop:'10px'}}>LOGO</Link>
                <Newsletter/>
            </div>
        </FooterWrapper>
    )
}