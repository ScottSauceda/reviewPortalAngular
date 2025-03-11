import { Image } from "./image";

export interface Profile {
    email: String;
    firstName: String;
    isActive: Boolean;
    lastName: String;
    phone: String;
    profileImage?: Image;
    userName: String;
    userId: number;
}
