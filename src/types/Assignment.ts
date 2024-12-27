export interface SettingInterface {
  name: string; // 주차 이름
  id: number; // 그룹의 아이디
  focusOne: string; // 중점1
  focusTwo: string; // 중점2
  focusThree: string; // 중점3
}

export interface AssignmentRequest {
  name: string;
  groupId: number;
  focusOne: string;
  focusTwo: string;
  focusThree: string;
}