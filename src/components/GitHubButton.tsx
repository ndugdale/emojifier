import GitHubLogo from "../assets/github-mark.svg";

type GitHubButtonProps = {
  url: string;
  className?: string;
};

const GitHubButton = ({ url, className }: GitHubButtonProps) => {
  return (
    <a href={url} className={className}>
      <img src={GitHubLogo} alt="GitHub Logo" />
    </a>
  );
};

export default GitHubButton;
