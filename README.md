# Moment of Memory

![Group 1](https://user-images.githubusercontent.com/87301268/163972033-a8a0d3e1-4732-43d3-95c0-c3dca131aa48.png)

<br>

## 🌟 Moment of Memory 소개

- OTT 서비스가 대중화 되면서 수 많은 사람들이 하루에 영화, 드라마 등 많이 챙겨 봅니다.
- 누군가에겐 그저 보고 흘러가는 순간 일 수 있지만, 또 다른 누군가는 그 때의 감정과 순간을<br> 기록 하고 싶을 수 있습니다.
- **Moment of Memory** 는 그 순간의 기억과 감정을 기록할 수 있게 도와주는 웹 앱 입니다.
- URL : https://moment-of-memory.web.app

<br>

## 💄 Moment of Memory 초기 디자인

![bandicam 2022-04-19 18-31-43-114](https://user-images.githubusercontent.com/87301268/163974704-bdf73c78-3c06-45a6-b1d0-19b5a1192e21.jpg)
![bandicam 2022-04-19 18-32-07-398](https://user-images.githubusercontent.com/87301268/163974707-20a762a4-7ab4-4c1d-871b-4d06b441f716.jpg)
![bandicam 2022-04-19 18-32-11-459](https://user-images.githubusercontent.com/87301268/163974712-d260f548-1093-476a-9929-510bd3f1d607.jpg)
![bandicam 2022-04-19 18-32-16-829](https://user-images.githubusercontent.com/87301268/163974717-116eac24-f7e6-40a5-8b7f-15d0665e4930.jpg)
![bandicam 2022-04-19 18-32-23-987](https://user-images.githubusercontent.com/87301268/163974721-9c836ff3-e8a8-4c84-a858-d5aff12ce7e8.jpg)

<br>

## 💻 개발 환경 및 기술

- Visual Studio Code
- React
- Figma ( 디자인 )
- Firebase ( 배포 )

<br>

## ✨ 기능

- React-Router를 사용해서 **SPA** 로 만들어 페이지 전환 시에 로딩 시간이 없습니다.
- 사용자가 자신의 기억을 **저장** 할 수 있습니다.
- 저장한 기억을 **조회, 수정, 삭제** 할 수 있습니다.
- 정렬 기준을 **최신 순** 또는 **오래된 순** 으로 변경 할 수 있습니다.
- 화면에 그 때의 기억에 따라 **좋은 기억**, **슬픈 기억** 으로 나누어 필터링 할 수 있습니다.
- **해당 년도, 월에 알맞게 사용자가 저장한 기억이 표시** 됩니다.
- **모든 데이터는 사용자의 LocalStorage 에 저장 합니다.**
- 웹의 화면은 **반응형** 으로 제작하여 기기에 상관 없이 접근이 가능 합니다.
- **Open Graph** 를 적용하여 링크 공유 시 웹에 대한 정보가 보여집니다.

<br>

## 🚧 문제점

- 2022년 4월 30일 기준 새로운 기억을 작성 할 때 화면에 나타나지 않는 경우
  - 다른 날에는 정상적으로 화면에 나타남
  - 매 월 마지막 날짜로 저장할 때 만 나타나지 않는 버그 ( LocalStorage에는 저장됨 )

<br>

- Firebase 와 Github 연동
  - 배포를 하기 위해 Firebase 를 사용
  - 배포는 성공적으로 되었으나 Github 와의 연동에서 문제점이 발생

<br>

## 🔥 어려웠던 부분 & 느낀 점

### useContext 사용

- 초기에 App에서 props 로 각 함수와 데이터를 직접 전달 하였으나, 크기가 커질수록 props 드릴링이 심해져<br>
  어느 순간 에러가 발생하면 그것을 찾기 힘들었습니다.
- useContext 를 적절하게 사용하여 위의 문제를 해결 할 수 있었고, 코드의 가독성 또한 얻을 수 있었습니다.
- 처음 공부 할 때는 중요성을 많이 느끼지 못했는데 프로젝트를 진행 하면서 올바른 Data 전달이<br>프로젝트의 성공 여부와 진행 속도에 많은 영향을 준다고 느끼게 되었습니다.

<br>

### className 을 만들 때, join 메서드를 사용

- 공통된 컴포넌트를 제작 할 때 props 받는 type 별로 요소의 스타일을 만들고 싶었습니다.
- 이 때, className 을 배열과 템플릿 리터럴을 사용해서 만들면<br> 들어오는 props 에 따라서 원하는 스타일을 적용 할 수 있습니다.
- 또한 boolean 타입의 데이터를 props로 받고 삼항 연산자와 같이 결합하여 더욱 폭 넓게 사용 할 수도 있었습니다.

<br>

### 배열에 대한 이해

- Data 를 배열 형식으로 전달하고 바꾸고 하면서 find, map, filter 등 사용했는데<br> 아직 이해가 많이 부족하여 수 차례 에러가 발생하고, 반환이 어떻게 되는지 헤맸습니다.
- 또한 sort 를 사용하며 배열을 나열하는데 오름차순, 내림차순에 대한 공식과 배열에 직접 사용하지 않고, <br> 따로 복사를 하여 사용하는 개념 등에 마주쳤습니다.
- 배열에 대해 많이 부족하다고 느꼈고, 공부를 다시 할 것 입니다.
