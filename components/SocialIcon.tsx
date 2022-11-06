type SocialIconProps = {
  href: string;
  icon: JSX.Element;
};

export default function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a className="social__a" target="_blank" href={href} rel="noreferrer">
      {icon}
    </a>
  );
}
