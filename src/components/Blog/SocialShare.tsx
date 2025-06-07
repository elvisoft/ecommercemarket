"use client";
import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";

const SocialShare = ({ slug }: { slug: { current: string } }) => {
  return (
    <div className="flex gap-3">
      <FacebookShareButton
        url='/#'
      >
        <FacebookIcon size={35} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
         url='/#'
      >
        <TwitterIcon size={35} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton
         url='/#'
      >
        <LinkedinIcon size={35} round={true} />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
