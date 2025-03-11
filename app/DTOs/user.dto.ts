export default class UserDTO {
  id: number;
  name: string;
  email: string;
  imgId: number | null;

  constructor(user: {
    id: number;
    name: string;
    email: string;
    imgId: number | null;
  }) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.imgId = user?.imgId;
  }
}
