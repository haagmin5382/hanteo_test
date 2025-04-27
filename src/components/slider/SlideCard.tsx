const SlideCard = ({
  image,
  description,
}: {
  image: string;
  description: string;
}) => {
  return (
    <div className="slide">
      <img src={image} alt="Slide Image" />
      <p>{description}</p>
    </div>
  );
};

export default SlideCard;
