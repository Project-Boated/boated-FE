# boated-FE

## Branch Rules

### master

- 제품으로 출시될 수 있는 브랜치

### develop

- master에서 분기
- 다음 출시 버전을 개발하는 브랜치
- 기능 개발이 완료된 코드를 관리하는 브랜치
- feature에서 기능 개발이 완료되는 코드를 merge

### release

- master에서 분기
- 이번 출시 버전을 준비하는 브랜치
- develop에 rebase한 이후에 master에 merge

### hotfix

- master에서 분기
- 배포된 서비스에 문제가 생기는 경우, 빠르게 수정해야할 때 사용

### feat

- develop에서 분기
- 새로운 기능 추가

### fix

- develop에서 분기
- 버그 및 코드 수정

### design

- develop에서 분기
- CSS 등 사용자 UI 디자인 변경

### refactor

- develop에서 분기
- 코드 리팩토링

### chore

- develop에서 분기
- 라이브러리 추가, 수정, 삭제
- 패키지 매니저 관리

### docs

- develop에서 분기
- 문서 수정

<hr />

## Commit Rules

- feat: 기능 추가
- fix: 버그 및 코드 수정
- design: css 관련
- refact: 리팩토링
- chore: 라이브러리 추가, 수정, 삭제
- docs: 문서 수정

### 제목 규칙

1. 제목의 처음은 동사
2. 50자 이내
3. 마지막에 특수문자 삽입 X
   (ex) feat: Add FactoryCreatePage
   or feat: 업체 생성 페이지 추가

### 본문 규칙

1. 본문은 한 줄당 72자 이내로 작성
2. 상세히 작성
3. 무엇을 변경했는디 혹은 왜 변경했는지에 대해 작성
4. 변경한 내역에 대해서 숫자로 라벨링하여 작성
   (ex) 1. api 추가

### 꼬리말 규칙

1. 해당 이슈 넘버를 작성
   (ex) #45

<hr/>

## Reference

[branch rules](https://techblog.woowahan.com/2553/)

[commit rules](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
