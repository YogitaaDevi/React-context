import { UserType } from "../types/UserType";
import user1 from "../assets/images/user1.avif"
import user2 from "../assets/images/user2.avif"
export const users: UserType[] = [
    {id:1, mail: "ravi@gmail.com" , name: "Ravi", password: "ravi2003", contact: 9876543210, location: "Guindy", image:user1},
    {id:2, mail: "yogi@gmail.com", name: "Yogi", password: "yogi2003", contact: 9876543210, location: "T.Nagar", image:user2}
]