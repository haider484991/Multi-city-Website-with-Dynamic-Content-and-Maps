export interface State {
  id: string;
  name: string;
  services: Service[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  stateId: string;
}

export interface City {
  id: string;
  name: string;
  stateId: string;
  description: string;
  population: number;
  services: string[]; // Service IDs
}