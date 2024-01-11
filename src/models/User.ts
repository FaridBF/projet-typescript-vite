export interface UserInterface {
  id: number;
  name: string;
  email: string;
  bio: string;
  images: {
    profile: string;
    banner: string;
  };
}

export interface AdminUserInterface extends UserInterface {
  role: string[];
}
