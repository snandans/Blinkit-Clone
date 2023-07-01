import React from 'react'
import { downloadApp } from '../../constants/footer.copyRightText'
import Playstore from '../../../../images/playstore.png';
import Appstore from '../../../../images/appstore.png';
import Image from '../../../../atoms/Image';
export default function FooterDownloadApp() {
    return (
        <div>
            <div className="footer-left flex">
                <p className="footer-left-text flex">{downloadApp}</p>
                <div className="footer-left-img flex flex__center__cross-axis flex__center__main-axis">
                    <Image src={Playstore} alt="" />
                    <Image src={Appstore} alt="" />
                </div>
            </div>
        </div>
    )
}
