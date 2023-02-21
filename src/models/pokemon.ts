export interface Pokemon {
  id: number | 0;
  name: string;
  url: string | "";
  image?: string;
  types?: [
    {
      type: {
        name: string;
      };
    },
  ];
  favorite: boolean | false;
}
