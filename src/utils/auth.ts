import {getCookie, removeCookie, setCookie} from '@utils/cookies.ts';

const LoginCookieName = "user-cookie";

/***
 * @description: 로그인 여부를 확인하는 함수
 * @return: 로그인 여부
 */
export function isLogin() {
    return !!getCookie(LoginCookieName);
}

/***
 * @description: 로그인 함수
 * @param id: 사용자 아이디
 * @return: 없음
 */
export function login(id: string) {
  setCookie(LoginCookieName, id);
}

/***
  * @description: 사용자 아이디 가져오는 함수
  * @return: 사용자 아이디
  */
export function getUserId() {
  return getCookie(LoginCookieName);
}

/***
 * @description: 로그아웃 함수
 * @return: 없음
 */
export function logout() {
  removeCookie(LoginCookieName);
}