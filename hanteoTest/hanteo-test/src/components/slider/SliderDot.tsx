import { slideData } from "./data.json";

const SliderDot = ({ slideIndex }: { slideIndex: number }) => {
  return (
    <div className="slider__pagination">
      {slideData.map((item, index) => {
        if (slideIndex === index)
          return <div key={item.id} className="dot dot--active" />;
        else return <div key={item.id} className="dot" />;
      })}
    </div>
  );
};

export default SliderDot;
