export interface Housing {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  rating: number;
  status: string;
  type?: string;
  // yang menggunakan tanda tanya artinya opsional dia digunakan atau tidak
  description?: string;
  postedDays?: number;
}
