export type Group = {
  id: number;
  userName: string;
  name: string;
  isOpen: boolean;
  explain: string;
};

export interface GroupResponse {
  id: number;
  userName: string;
  name: string;
  isOpen: boolean;
  explain: string;
}

export interface GroupInfoByIdResponse {
  userName: string;
  userEmail: string;
  groupExplain: string;
  groupName: string;
}
