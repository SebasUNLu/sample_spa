export default class UserDTO {
  id: number;
  name: string;
  email: string;
  imgId: number | null;
  createdAt: Date;

  constructor(user: {
    id: number;
    name: string;
    email: string;
    imgId: number | null;
    createdAt: Date
  }) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.imgId = user?.imgId;
    this.createdAt = user.createdAt
  }
}
