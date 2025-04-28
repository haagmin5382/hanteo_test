const SlideCard = ({
  image,
  description,
  link,
}: {
  image: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="slide">
      <a href={link}>
        <img src={image} alt="Slide Image" />
        <p>{description}</p>
      </a>
    </div>
  );
};

export default SlideCard;
