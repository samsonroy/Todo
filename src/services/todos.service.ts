import {NetworkManager} from '../network/NetworkManager';
import {HttpMethod} from '../network/types';

export const getTasks = () => {
  return NetworkManager.getInstance().appRequest<any>({
    method: HttpMethod.GET,
    url: '/task',
  });
};
