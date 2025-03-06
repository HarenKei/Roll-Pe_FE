import { StaticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

//! Rollpe List 관련
export interface RollpeListItemProps {
  rollpeId: string;
  rollpeTitle: string;
  rollpeOwner: string;
  createdAt: string;
  dDay: number;
  isPublic: boolean;
  thumbnail: string;
}

export interface RollpeListProps {
  rollpeList: RollpeListItemProps[];
  resultText: string;
}

export interface userIntroResponse {
  host: number;
  heart: number;
}

//! Rollpe 관련
// export interface Rollpe {
//   id: string;
//   code: string;
//   title: string;
//   host: User;
//   createdAt: Date;
//   receivingDate: string;
//   receivingStatus: string;
//   receiver: User;
//   isPublic: boolean;
//   hearts: Heart[];
//   authors: User[];
//   theme: string;
//   size: string;
//   ratio: string;
//   isVip: boolean;
//   version: string;
// }

export interface Rollpe {
  code: string;
  createdAt: string;
  host: User;
  id: number;
  ratio: string;
  receiver: User;
  receivingDate: string;
  receivingStat: number;
  size: string;
  theme: string;
  title: string;
  viewStat: boolean;
}

//! Heart 관련
export interface Heart {
  id: string;
  index: number;
  author: User;
  content: string;
  createdAt: string;
  color: string;
  version: string;
}

// ! User 관련
export interface User {
  id: number;
  code?: string;
  identifyCode: string;
  name: string;
  email: string;
  provider: "Apple" | "Google" | "Kakao" | "Email" | null;
}

