import IUser from '../../models/user.model';

export interface ISUsers {
  loading: boolean;
  users: IUser[];
  error?: any;
}
