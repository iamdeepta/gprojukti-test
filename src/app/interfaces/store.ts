export interface IStoreData {
  district: {
    id: number;
    name: string;
  };
  name: string;
  type: string;
  slug: string;
  address: string;
  primary_phone: string;
  secondary_phone: string;
  location: string;
  map_link: string;
  opening_time: string;
  closing_time: string;
  shown_in_website: boolean;
  off_days: string[];
  area: number;
  region: number;
}
