export interface PartnerProps {
  img: string;
  name: string;
}

export interface PartnersProps {
  id: string;
  title: string;
  description: string;
  partners: ReadonlyArray<PartnerProps>;
}
