import React from 'react';
import { FooterDownloadApp } from './molecules/footerDownloadApp';
import '../../styles/style.css'
import { copyRight } from "./constants/footer.copyRightText"
import { FooterSocialMedia } from './molecules/footerSocialMedia';
function Footer() {
   return (
      <footer class="footer flex flex__center__cross-axis flex__center__main-axis">
         <p className="flex">{copyRight}</p>
         <FooterDownloadApp />
         <FooterSocialMedia />
      </footer>
   );
}

export default Footer;
