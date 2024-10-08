import React from "react";
import PropTypes from "prop-types";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Fade } from "react-reveal";
import { anchorAttrs, mySocials } from "../constants";

const Socials = ({ className, titles = [], ...props }) => {
  return (
    <div className={`flex flex-wrap gap-4 text-white-primary ${className}`}>
      {[
        {
          icon: CiMail,
          href: `mailto:${mySocials.email}`,
        },
        {
          icon: FiGithub,
          href: mySocials.github,
        },
        {
          icon: FaXTwitter,
          href: mySocials.twitter,
        },
        {
          icon: FaLinkedinIn,
          href: mySocials.linkedIn,
        },
      ].map((s, i) => {
        const title = s.title || titles[i];

        return (
          <Fade bottom key={i} {...props}>
            <a key={i} href={s.href} {...anchorAttrs}>
              <div
                className="bg-white-divider hover:bg-white-paper break-words text-white-primary rounded-3xl p-2 flex items-center gap-2"
                style={{
                  maxWidth: "100%",
                  wordBreak: "break-word",
                }}
              >
                <div>{<s.icon />}</div>

                {title ? <div>{title}</div> : null}
              </div>
            </a>
          </Fade>
        );
      })}
    </div>
  );
};

Socials.propTypes = {};

export default Socials;
