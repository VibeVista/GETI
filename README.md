# GETI

**GETI**는 Gemini API를 기부받아, AI 프로젝트를 진행하고 싶은 사람들에게 무료로 Gemini API를 후원해주는 오픈소스 플랫폼입니다.

---

## 소개

- **기부자**: 본인의 Gemini API Key를 기부하여, 다양한 AI 프로젝트를 지원할 수 있습니다.
- **Proposer**: AI 프로젝트를 제안하고, 투표를 통해 Gemini API Key 후원을 받을 수 있습니다.

GETI는 투명하고 공정한 분배를 목표로 하며, 모든 기부와 후원 내역은 오픈소스로 관리됩니다.

---

## 주요 기능

- Gemini API Key 기부 및 관리
- 프로젝트 제안(Proposal) 및 Github Issue 기반 관리
- 주간 투표(Upvote) 기반 API Key 분배
- 투명한 기부 내역 및 분배 내역 공개

---

## 기술 스택

- **Monorepo**: pnpm 기반
- **Backend**: Node.js, Express, TypeScript, Firebase
- **Frontend**: React, Next.js, Tailwind CSS, shadcn/ui

---

## 설치 및 시작하기

### 1. 레포지토리 클론

```bash
git clone https://github.com/VibeVista/GETI.git
cd GETI
pnpm install
```

### 2. 개발 서버 실행

#### Backend

```bash
cd packages/backend
pnpm dev
```

#### Frontend

```bash
cd packages/frontend
pnpm dev
```

---

## 사용 방법

### 기부자

1. 회원 가입 후 로그인
2. Gemini API Key 입력 및 제출
3. 기부 내역 확인

### Proposer

1. GETI Github 레포지토리의 [Issues](https://github.com/VibeVista/GETI/issues)에서 Proposal 등록
2. 매주 투표(Upvote) 진행
3. 선정된 Proposal에 API Key 자동 분배

---

## 기여 방법

1. 이슈(버그, 기능 제안 등)를 등록하거나, 풀 리퀘스트(PR)를 보내주세요.
2. 코드 컨벤션 및 커밋 메시지 규칙을 지켜주세요.
3. 논의가 필요한 사항은 Discussions 또는 이메일을 이용해주세요.

---

## 라이선스

이 프로젝트는 [MIT License](./LICENSE)를 따릅니다.

---

## 문의

- 이메일: vibevista.cc@gmail.com
- [Github Issues](https://github.com/VibeVista/GETI/issues)를 통해 문의 및 제안 가능 