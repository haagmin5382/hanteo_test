import { useEffect } from "react";

const useIntersectionObserver = (
  target: string | React.RefObject<Element>,
  onEnter: () => void,
  onLeave: () => void,
  options?: IntersectionObserverInit
) => {
  /** callback
   * 첫번째 parameter entries : element 배열,
   * 두번째 parameter observer : 자기 자신 */
  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target); // 더 이상 관찰하지 않음
        onEnter();
      } else {
        onLeave();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target.current;
    if (!element) return;

    observer.observe(element!); // target이 null일 수 있으므로 non-null assertion 사용
    return () => {
      observer.disconnect(); // cleanup
    };
  }, []);
  return;
};

export default useIntersectionObserver;
