# 🧠 AI 기반 설명형 학습 서비스

> 학생이 AI에게 **배운 내용을 설명**하면서 더 깊이 학습하고,  
> 교수자는 학생들의 **이해도와 학습 흐름을 정량적으로 확인**할 수 있는 플랫폼입니다.

<br />

## 🎯 핵심 개념: Protégé Effect

**"내가 남에게 설명할 때 가장 잘 배운다."**

이 프로젝트는 **Protégé Effect(프로테제 효과)**라는 학습 이론에 기반합니다.  
다수의 연구에 따르면, 학습자가 AI나 타인에게 설명하는 과정은 내재적 동기부여와 메타인지 전략을 자극하여 학습 효과를 극대화합니다.

📚 관련 연구:
- [Teachable Agent 연구 (2009)](https://aaalab.stanford.edu/papers/Protege_Effect_Teachable_Agents.pdf)
- [Quality of Learning (1984)](https://psycnet.apa.org/record/1985-29263-001)
- [Expecting to Teach (2014)](https://link.springer.com/article/10.3758/s13421-014-0416-z)
- [Preparing to Teach (2016)](https://psycnet.apa.org/record/2015-38251-001)

<br />

## 💡 주요 기능

### 1. 🧑‍🏫 AI에게 설명하며 배우는 학습 방식
- 학생은 특정 개념을 AI에게 설명합니다.
- AI는 이해도에 맞는 피드백과 질문을 제공합니다.
- 설명 자체가 학습 효과를 유도합니다.

### 2. 📊 학습 데이터 기반 이해도 평가
- 질문이 아닌 "설명" 데이터 수집 → 정성적 이해 수준 파악
- 교수자 입장에서 유의미한 메타데이터 제공

### 3. 📈 교수자·학생용 시각화 보고서
- 학생은 AI 피드백 및 자기 설명 기록을 시각적으로 확인
- 교수자는 전체 학생의 이해도 및 설명 패턴을 표준화된 데이터로 확인

<br />

## 🛠️ 사용 기술 스택

| 영역        | 스택 |
|-------------|------|
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack_Query-ff4154?style=flat&logo=reactquery&logoColor=white) |
| **State**   | ![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat&logo=Zustand&logoColor=white) |
| **AI 연동** | OpenAI GPT API 기반 질문·응답 구성 |
| **Style**   | Tailwind CSS, Responsive Layout |
| **기타**    | Vite, ESLint, Prettier, Husky 등 |

<br />

## 👨‍💻 담당 역할

| 역할         | 상세 내용 |
|--------------|-----------|
| 💬 **채팅 인터페이스 개발** | 학생과 AI가 자연스럽게 대화하며 개념을 설명할 수 있는 인터페이스 구현 |
| 🔌 **API 연동** | GPT 기반 채팅 API 연동 및 대화 상태 관리 |
| 🧠 **이해도 평가 흐름 설계** | 설명형 입력 데이터로부터 학습 평가 결과 도출 구조 설계 |
| 💻 기타 | 프론트엔드 전반 구조 설계 및 상태 관리 흐름 구축 (Zustand 기반) |

<br />

## 📸 미리보기

> 향후 배포 및 스크린샷이 준비된다면 여기에 추가

---

## 📌 향후 계획

- [ ] GPT 답변에 대한 정량화된 피드백 알고리즘 도입
- [ ] 설명-질문-피드백 루프 최적화
- [ ] 교수자용 대시보드 고도화

---

## 🧩 팀 기획 의도

이 서비스는 AI를 단순한 답변 제공 도구가 아닌,  
**“학습을 유도하는 디지털 멘토”**로 활용하고자 기획되었습니다.  
학생은 자신이 이해한 내용을 설명함으로써 학습 효과를 극대화하고,  
교수자는 그 데이터를 통해 학습 진행 상태를 쉽게 파악할 수 있습니다.

---

