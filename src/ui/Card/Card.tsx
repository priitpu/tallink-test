import style from "./Card.module.scss";
interface IProps {
  transparent?: boolean;
  image?: string;
  title: string;
  price?: number;
  priceDescription?: string;
  link?: string;
  description?: string;
  children?: never;
}
interface ICustomContent {
  transparent?: never;
  image?: never;
  title?: never;
  price?: never;
  priceDescription?: never;
  link?: never;
  description?: never;
  children: React.ReactNode;
}
type CardContent = IProps | ICustomContent;
const Card: React.FC<CardContent> = ({
  children,
  transparent,
  image,
  title,
  price,
  priceDescription,
  description,
  link,
}: CardContent) => {
  return (
    <div
      className={`${style.card} ${transparent && style["card--transparent"]}`}
    >
      {children ? (
        children
      ) : (
        <>
          <div className={style["card__image"]}>
            <img src={image} />
          </div>
          <div className={style["card__content"]}>
            {title && <h4>{title}</h4>}
            {description && <p>{description}</p>}
            {(priceDescription || price) && (
              <div className={style["card__price"]}>
                {priceDescription && <p>{priceDescription}</p>}
                {price && <h2>{price}€</h2>}{" "}
              </div>
            )}
            {link && <a href={link}>Find out more {"->"}</a>}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
