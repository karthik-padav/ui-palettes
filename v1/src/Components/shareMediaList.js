import React, { Component } from 'react';
import '../css/shareMediaList.css';
import {
    FacebookShareButton, FacebookIcon,
    LinkedinShareButton, LinkedinIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    PinterestShareButton, PinterestIcon,
    VKShareButton, VKIcon,
    RedditShareButton, RedditIcon,
    TumblrShareButton, TumblrIcon,
    MailruShareButton, MailruIcon,
    ViberShareButton, ViberIcon,
    // WorkplaceShareButton, WorkplaceIcon,
    EmailShareButton, EmailIcon
} from 'react-share';
import exampleImage from '../utilities/images/logo.png';

class ShareMediaList extends Component {
    render() {
        const shareUrl = 'https://karthik-padav.github.io';
        const title = 'GitHub';
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <FacebookShareButton url={shareUrl} className="share-w" quote={title}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>

                </li>
                <li className="list-group-item">
                    <LinkedinShareButton url={shareUrl} className="share-w" quote={title}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>

                </li>
                <li className="list-group-item">
                    <TwitterShareButton url={shareUrl} className="share-w" quote={title}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                </li>
                <li className="list-group-item">
                    <WhatsappShareButton url={shareUrl} className="share-w" quote={title}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                </li>
                <li className="list-group-item">
                    <PinterestShareButton url={shareUrl} className="share-w"

                        media={`${String(window.location)}/${exampleImage}`}
                        quote={title}>
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>

                </li>
                <li className="list-group-item">
                    <VKShareButton url={shareUrl} className="share-w" quote={title}>
                        <VKIcon size={32} round />
                    </VKShareButton>

                </li>
                <li className="list-group-item">
                    <RedditShareButton url={shareUrl} className="share-w" quote={title}>
                        <RedditIcon size={32} round />
                    </RedditShareButton>

                </li>
                <li className="list-group-item">
                    <TumblrShareButton url={shareUrl} className="share-w" quote={title}>
                        <TumblrIcon size={32} round />
                    </TumblrShareButton>

                </li>
                <li className="list-group-item">
                    <MailruShareButton url={shareUrl} className="share-w" quote={title}>
                        <MailruIcon size={32} round />
                    </MailruShareButton>

                </li>
                <li className="list-group-item">
                    <ViberShareButton url={shareUrl} className="share-w" quote={title}>
                        <ViberIcon size={32} round />
                    </ViberShareButton>

                </li>
                <li className="list-group-item">

                    <EmailShareButton url={shareUrl} className="share-w" quote={title}>
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </li>
            </ul>
        )
    }
}

export default ShareMediaList;