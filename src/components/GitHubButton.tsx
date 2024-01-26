import { useState } from "react";
import GitHubLogo from "../assets/github-mark.svg";
import GitHubLogoHover from "../assets/github-mark-hover.svg";

type GitHubButtonProps = {
  url: string;
  className?: string;
};

const GitHubButton = ({ url, className }: GitHubButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={url}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered ? GitHubLogoHover : GitHubLogo} alt="GitHub Logo" />
    </a>
  );
};

export default GitHubButton;
