import styles from './Item.module.scss';

const Item = ({ file, thumbnail, setLocation }) => {
  const handleClick = () => {
    setLocation(file.path_lower);
  };
  return (
    <li className={styles['list-item']} onClick={handleClick}>
      <img alt="Thumbnail" src={thumbnail} />
      {file.name}
    </li>
  );
};

export default Item;
