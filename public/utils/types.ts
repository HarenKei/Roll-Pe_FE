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