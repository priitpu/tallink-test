import styles from "./Grid.module.scss";

interface IProps {
  children: React.ReactNode;
}

const Grid: React.FC<IProps> = ({ children }: IProps) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
