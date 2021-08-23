export interface PartnerProps {
  name: string;
  img: string;
}

export interface PartnersProps {
  id: string;
  title: string;
  description: string;
  partners: ReadonlyArray<PartnerProps>;
}
