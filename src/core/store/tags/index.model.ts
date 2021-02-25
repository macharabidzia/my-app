import ITag from '../../models/tag.model';

export interface ISTags {
  loading: boolean;
  tags: ITag[];
  error?: any;
}
