export interface SocialIconProps {
  size: string;
  social: string;
}

export interface SocialMediaProps {
  key: string;
  link: string;
}

export interface ContactsProps {
  id: string;
  email: string;
  phone: string;
  title: string;
  image: string;
  address: string;
  description: string;
  socialMedias: ReadonlyArray<SocialMediaProps>;
}
