import React from 'react'
import Image from '../../../../atoms/Image'
import Facebook from '../../../../images/facebook.png';
import Twitter from '../../../../images/twitter.png';
import Linkedin from '../../../../images/linkedin.png';
import Instagram from '../../../../images/instagram.png';
export default function FooterSocialMedia() {
    return (
        <div>
            <div className="footer-right flex flex__center__cross-axis flex__center__main-axis">
                <Image src={Facebook} alt="" />
                <Image src={Twitter} alt="" />
                <Image src={Instagram} alt="" />
                <Image src={Linkedin} alt="" />
            </div>
        </div>
    )
}
