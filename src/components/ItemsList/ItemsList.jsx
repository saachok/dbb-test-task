import Item from '../Item/Item';
import styles from './ItemsList.module.scss';

const fileBase64Icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuUlEQVR4nO3WQQpCMRRD0axCxP0vSRRXExE6EMHBl5e09uVCcSiHBi2Q/isKzw3AeQcIATwAXJyQ6uwYiiH3t0/pzNSQE4Cr42YohsCFoQFiwdAEkWNohLySYdwQGWYGRIKZBSnHOP7Zj7zNtoCw4gtnx0BGuZHimGl1mxaLz7cCaTctVwyk241Q9Cv1WSDtpuWKgXS7EeathbUeja4YyCg3UhwzrVGmVRwzrVGmteq0uMj5uW0gCeaeAHHCuEhTlUIAAAAASUVORK5CYII=';

const folderBase64Icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO2ZMQrCQBREp4rgYaxsjGew8FAaray8mJUHSMwVxObLwhcCCbLRYGbjPJhqN7DD223yASFELBmAI4AbAItI2LcFIYfIAs08ACxBRuWHyyP3n3z/FcAcRJgnlhmAi39zRsJFAgsA9w+u5LepABT+rgcpEtg0ruWvsx+yyBisG2aSLvL2vJMrUo903/ukjimSWlq8FlbgJ/+rN5IKpiJkmIyQYTJChskIGSYjZJiMkGEyQobJCBkmI2SYjJBhMkKGyQgZNnkjlS+EIUoqg56ya7Eg+LNuPbPrKpJ5mbHmgX1SeonOYagQAi2eGqmWy/FZdjgAAAAASUVORK5CYII=';

const ItemsList = ({ items, setLocation }) => {
  console.log('items', items);

  return (
    <ul className={styles.list}>
      {items
        ?.sort((a, b) => {
          if (
            (a['.tag'] === 'folder' || b['.tag'] === 'folder') &&
            !(a['.tag'] === b['.tag'])
          ) {
            return a['.tag'] === 'folder' ? -1 : 1;
          } else {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
          }
        })
        .map(file => {
          const type = file['.tag'];
          let thumbnail = null;

          if (type === 'file') {
            thumbnail = fileBase64Icon;
          } else {
            thumbnail = folderBase64Icon;
          }

          return (
            <Item
              file={file}
              thumbnail={thumbnail}
              key={file.id}
              setLocation={setLocation}
            />
          );
        })}
    </ul>
  );
};

export default ItemsList;
