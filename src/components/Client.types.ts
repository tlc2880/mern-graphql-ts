export type Client = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type ClientProps = {
  client: Client;
};

export type ClientType = {
  client: Client;
};