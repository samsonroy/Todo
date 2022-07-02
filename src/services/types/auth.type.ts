export declare module AuthServiceTypes {
  export interface LoginUserRequest {
    email: string;
    password: string;
  }

  export interface LoginUserResponse {
    user: {
      age: number;
      _id: string;
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    token: string;
  }
}
