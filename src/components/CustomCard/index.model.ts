import IUser from '../../core/models/user.model';

export default interface ICustomCard {
  data: any;
  onClick: (e?: any, value?: string, id?: number) => void;
  title: string;
  type: string;
  children?: any;
  user?: IUser;
}
