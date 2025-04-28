This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Hanteo test 프로젝트 시작하기

CLI 터미널에서 해당 프로젝트를 시작합니다.

```bash
npm run dev
```

브라우저 내에서 http://localhost:3000 로 접속하시면 해당 프로젝트 내용을 보실 수 있습니다.

## Hanteo test 프로젝트 설명

# 구조

- 하나의 레이아웃(뷰)으로만 구성되어 있습니다.
- 각 페이지마다 내용은 달라야하지만 다른 페이지의 경우 guide가 제시되어 있지 않아 하나의 페이지로만 구성하고 페이지 전환 시 페이지 구분을 위해 해당 페이지의 params 값이 category navigation bar 아래에 보여집니다.

# category (navigation bar)

- 기본적으로 페이지를 이동시키는 기능을 하는 navigation 기능입니다.
- 차트, whook, 이벤트, 뉴스, 스토어 ,충전소 카테고리가 있습니다.
- 각 카테고리를 클릭 or 모바일 내에서는 좌우 스와이프를 통해 페이지를 이동할 수 있습니다.

# slider

- 정보, 이벤트, 소식 등을 전해주는 slider입니다.
- 해당 컴포넌트에서는 5초마다 다음 슬라이드로 전환해서 보여줍니다.
- 외부 라이브러리 없이 useEffect, useRef, useState 등의 react hook들 만을 이용해서 구현했습니다.

# contents

- 차트 순위를 보여주는 contents입니다.
- 멜론 차트를 크롤링해서 보여주려고 했으나, 데이터 보호에 대한 윤리적 이슈로 기존 크롤링으로 가져온 데이터를 사용하지 않고, 더미데이터를 사용했습니다.
- 무한 스크롤의 핵심은 데이터를 필요한만큼만 가져와서 보여주는 것이라 생각했기 때문에 Next.js내에 api server를 만들어서 최대한 서버에서 데이터를 가져오는 구조를 흉내냈습니다.
- 무한 스크롤의 기능은 TanstackQuery의 useInfiniteQuery와 IntersectionObserver를 이용해서 페이지 내 마지막 순위 곡이 보이게 되면 다음 순위의 곡 10개를 불러오는 기능을 구현했습니다.

## Deploy on Vercel

# vercel 배포 링크

- https://hanteo-test-omega.vercel.app/chart
