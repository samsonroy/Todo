import {NetworkManager} from '../network/NetworkManager';
import {HttpMethod} from '../network/types';
import {AuthServiceTypes} from './types/auth.type';

export const loginUser = (data: AuthServiceTypes.LoginUserRequest) => {
  return NetworkManager.getInstance().appRequest<AuthServiceTypes.LoginUserResponse>(
    {method: HttpMethod.POST, url: '/user/login', data},
  );
};
