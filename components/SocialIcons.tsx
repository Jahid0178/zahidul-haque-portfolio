import React from "react";
import Icon from "./Icon";
import { Button } from "./ui/button";
import { socialLinkType } from "@/types/types";
import Link from "next/link";

type SocialIconProps = {
  socialLinks: socialLinkType[];
};

const SocialIcons = ({ socialLinks }: SocialIconProps) => {
  return (
    <div className="space-x-2">
      {socialLinks.map((socialLink: socialLinkType) => {
        return (
          <Button
            key={socialLink.id}
            variant="outline"
            size="icon"
            asChild
          >
            <Link
              href={socialLink.href}
              target="_blank"
            >
              <Icon
                name={socialLink.icon}
                size={18}
              />
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialIcons;
