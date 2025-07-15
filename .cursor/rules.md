# GETI 프로젝트 개발 규칙 (Cursor Rules)

## 1. 폴더 구조

- **Monorepo** 구조를 유지합니다.
  - `/packages/backend` : Node.js, Express, TypeScript, Firebase
  - `/packages/frontend` : React, Next.js, Tailwind CSS, shadcn/ui

## 2. 패키지 매니저

- pnpm을 사용합니다.
- 새로운 패키지 추가 시 반드시 pnpm 명령어를 사용하세요.

## 3. 코드 스타일

- **Backend**:  
  - TypeScript 사용  
  - Prettier, ESLint 적용  
  - 파일명은 `camelCase` 또는 `PascalCase` 사용
- **Frontend**:  
  - TypeScript, React  
  - Prettier, ESLint 적용  
  - 컴포넌트 파일명은 `PascalCase` 사용

## 4. 커밋 메시지 규칙

- [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 스타일을 따릅니다.
  - 예시:  
    - `feat: 기부자 회원가입 기능 추가`
    - `fix: proposal 투표 버그 수정`
    - `docs: README 업데이트`

## 5. 브랜치 전략

- `main` 브랜치는 항상 배포 가능한 상태를 유지합니다.
- 기능 개발은 `feature/기능명`, 버그 수정은 `fix/버그명` 브랜치에서 작업합니다.
- PR(Merge Request) 시 코드리뷰를 거칩니다.

## 6. 이슈 및 PR

- 모든 기능/버그는 Github Issue로 관리합니다.
- PR에는 관련 이슈 번호를 반드시 연결합니다.
- PR 설명에 변경사항과 테스트 방법을 명확히 작성합니다.

## 7. 환경 변수 및 시크릿

- API Key 등 민감 정보는 `.env` 파일에 저장하고, `.env.example`을 반드시 최신화합니다.
- `.env` 파일은 git에 커밋하지 않습니다.

## 8. 기타

- 문서화가 필요한 부분은 `/docs` 폴더에 정리합니다.
- 질문/논의는 Github Discussions 또는 이메일(vibevista.cc@gmail.com)로 진행합니다.

---

이 규칙은 프로젝트 상황에 따라 업데이트될 수 있습니다. 