import styles from "./Row.module.scss";

interface IProps {
  children: React.ReactNode;
}
const Row: React.FC<IProps> = ({ children }: IProps) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
