import { MarkerType } from "@/types/markerType";
import { http, HttpResponse } from "msw";

export const dummyMarkers: MarkerType[] = [
  {
    position: { lat: 37.551154, lng: 127.07557 },
    content: "삼육가",
  },
  {
    position: { lat: 37.551589, lng: 127.076053 },
    content: "안암동 국밥",
  },
  {
    position: { lat: 37.550928, lng: 127.075894 },
    content: "명랑식당",
  },
  {
    position: { lat: 37.550675, lng: 127.075172 },
    content: "해물찜전문점",
  },
  {
    position: { lat: 37.550465, lng: 127.07481 },
    content: "세종 족발",
  },
  {
    position: { lat: 37.550711, lng: 127.07637 },
    content: "김밥천국 세종대점",
  },
  {
    position: { lat: 37.550122, lng: 127.075629 },
    content: "화로구이",
  },
  {
    position: { lat: 37.550285, lng: 127.076054 },
    content: "부대찌개 전문점",
  },
  {
    position: { lat: 37.550838, lng: 127.076583 },
    content: "삼겹살 맛집",
  },
  {
    position: { lat: 37.551112, lng: 127.075418 },
    content: "스시 전문점",
  },
];

const dummyData = {
  message: "이곳은 어떤가요?",
  position: dummyMarkers,
};

export const MessageHandlers = [
  http.post("http://localhost:5173/message", ({ request }) => {
    const requestBody = request.body;
    console.log("응답 요청 모킹", requestBody);

    return HttpResponse.json({
      data: dummyData,
    });
  }),
];
