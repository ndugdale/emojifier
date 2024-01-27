import { useState } from "react";
import GitHubLogo from "../../assets/github-mark.svg";
import GitHubLogoHover from "../../assets/github-mark-hover.svg";

type GitHubButtonProps = {
  url: string;
  openInNewTab?: boolean;
  className?: string;
};

const GitHubButton = ({
  url,
  openInNewTab = false,
  className,
}: GitHubButtonProps) => {
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
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered ? GitHubLogoHover : GitHubLogo} alt="GitHub Logo" />
    </a>
  );
};

export default GitHubButton;
