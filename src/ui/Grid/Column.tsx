import style from "./Column.module.scss";

interface IProps {
  xs?: number | boolean;
  sm?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
  md?: number | boolean;
  col?: number;
  children: React.ReactNode;
}

const Column: React.FC<IProps> = ({
  children,
  xs,
  sm,
  lg,
  xl,
  md,
  col,
}: IProps) => {
  const sizeClassNames = () => {
    return Object.entries({ col, xs, sm, md, lg, xl })
      .map(([key, val]) => {
        if (typeof val === "boolean") {
          return `${style[`column--${key}`]}`;
        }
        return `${style[`column--${key}-${val}`]}`;
      })
      .join(" ");
  };
  return (
    <div className={`${style.column} ${sizeClassNames()}`}>{children}</div>
  );
};

export default Column;
