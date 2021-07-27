# 0. 설치 및 실행

1. `git clone https://github.com/simian114/infiniteScroll && cd ./infiniteScroll`
2. `npm install && npm run start`

# 1. 과제 설명

> Implement the user's comment data list with infinite scrolling by getting more 10 comments repeatedly.

10개의 댓글을 반복적으로 가져와 무한 스크롤로 사용자의 댓글 데이터 목록을 구현합니다.

# 2. 기술 스택 (사용한 라이브러리와 그 이유...)

1. `styled-components`
   - `css in js` 를 위해 사용했습니다.
2. `styled-reset`
   - 브라우저의 기본 `css` 를 제거하기 위해 사용했습니다.
3. `axios`
   - `api` 를 쉽게 사용하고 관리하기 위해 사용했습니다.

# 3. 구현 목록

- [x] axios를 이용한 데이터 Fetching
- [x] Figma를 참고하여 css 구현
- [x] IntersectionObserver를 이용한 무한스크롤 구현

# 4. 파일 구조

```
src/
ㄴ hooks/
  ㄴ useIntersectionObserver.jsx
ㄴ services/
  ㄴ apis/
    ㄴ axiosInstance.js
    ㄴ comment.js
  ㄴ CommentWorker.js
ㄴ views/
  ㄴ Home/
    ㄴ CardList/
      ㄴ Card/
        ㄴ index.jsx
      ㄴ index.jsx
    ㄴ index.jsx
ㄴ App.js
ㄴ GlobalStyle.js
ㄴ index.js
```

# 5. 데모
![inf scroll](https://user-images.githubusercontent.com/49119625/127108225-bc0cdcee-b003-455d-a023-cefe15da196e.gif)

