import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/profile";

const items = [
  { key: "github", label: "GitHub", Icon: FaGithub },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedin },
  { key: "twitter", label: "X (Twitter)", Icon: FaXTwitter },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`social d-flex gap-2 ${className}`}>
      {items.map(({ key, label, Icon }) => (
        <a key={key} href={profile.socials[key]} target="_blank" rel="noreferrer" aria-label={`${profile.name} on ${label}`}>
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
