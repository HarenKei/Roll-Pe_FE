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


export interface MainRollpeCardProps {
  id: number;
  title: string;
  viewStat: boolean;
  receivingStat: number;
  receivingDate: string;
  hostName: string;
  code: string;
  theme: any[];
}

export interface userIntroResponse {
  host: number;
  heart: number;
}

// ! User 관련
export interface User {
  id: string; //uuid
  name: string;
  email: string;
  register: "Apple" | "Google" | "Kakao" | "Email";
}

//! Rollpe 관련
export interface Rollpe {
  id: string;
  title: string;
  host: User;
  startDate: string;
  endDate: string;
  isPublic: boolean;
  writers: User[];
  theme: string;
  size: string;
}

//! Heart 관련
export interface Heart {
  id: string;
  index: number;
  writer: User;
  content: string;
  creratedAt: string;
}