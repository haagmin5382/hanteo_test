import Category from "./components/category";
import Slider from "./components/slider";
import Contents from "./components/contents";

function App() {
  /** 기능
   * 1. 상단 탭 메뉴 클릭, 좌<=>우 슬라이드 터치를 통해 이동 카테고리 간 이동
   * 2. 중단 배너 영역은 슬라이드형, 최소 3개의 배너, 무한루프 동작 및 외부 링크 이동
   * 3. 카테고리에 속한 콘텐츠는 리스트형, 무한스크롤 가능한 형태
   * 4.
   */
  return (
    <>
      <Category />
      <Slider />
      <Contents />
    </>
  );
}

export default App;
