export interface ServiceProps {
  name: string;
  image: string;
  order: number;
}

export interface ServicesProps {
  id: string;
  title: string;
  image: string;
  buttonText: string;
  description: string;
  services: ReadonlyArray<ServiceProps>;
}
