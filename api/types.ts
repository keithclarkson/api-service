// types.ts
import { Record } from 'typescript-record';

export type UserId = number;
export type UserEmail = string;
export type Username = string;
export type Password = string;
export type Role = 'admin' | 'moderator' | 'user';

export interface User {
  id: UserId;
  email: UserEmail;
  username: Username;
  password: Password;
  role: Role;
}

export interface ErrorResponse {
  error: string;
  message: string;
}

export type UserResponse = User | ErrorResponse;

export type PostId = number;
export type PostTitle = string;
export type PostContent = string;

export interface Post {
  id: PostId;
  title: PostTitle;
  content: PostContent;
  userId: UserId;
}

export type PostResponse = Post | ErrorResponse;

export interface AuthRequest {
  email: UserEmail;
  password: Password;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export type Token = string;