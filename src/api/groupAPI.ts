import api from '@/api/index.ts';
import {getUserId} from '@/utils/auth.ts';

/***
  * @description 그룹 생성 API
  * @param name 그룹 이름
 * @param explain 그룹 설명
 * @param isOpen 그룹 공개 여부
 * @param password 그룹 비밀번호
*/
export async function createGroup(name: string, explain: string, isOpen: boolean, password: string) {
    const { data } = await api.post("/api/group", {
        name,
        explain,
        isOpen,
        password,
        token: getUserId(),
    });
    return data;
}

/***
  * @description 그룹 리스트 API
*/
export async function getGroupList() {
    const { data } = await api.get("/api/groups");
    return data;
}

// Todo: Get API 에, body 되는지 확인하기
/***
  * @description 그룹 검색 API - 유저 이름 기반
  * @param name 유저 이름
*/
export async function searchGroup(name: string) {
    const { data } = await api.get(`/api/groups/search/user${name}`);
    return data;
}

/***
  * @description 그룹 검색 API - 그룹 이름 기반
  * @param groupName 그룹 이름
*/
export async function searchGroupByName(groupName: string) {
    const { data } = await api.get(`/api/groups/search?groupName=${groupName}`);
    return data;
}