import styles from './Content.module.scss';
import { sortByType } from '../../functions/utils';
import Item from '../Item/Item';

const Content = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items?.sort(sortByType).map(file => (
        <Item file={file} key={file.id} />
      ))}
    </ul>
  );
};

export default Content;
