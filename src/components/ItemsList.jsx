const ItemsList = ({ items }) => {
  console.log('items', items);
  return (
    <>
      <ul>
        {items
          ?.sort((a, b) => {
            // sort alphabetically, folders first
            if (
              (a['.tag'] === 'folder' || b['.tag'] === 'folder') &&
              !(a['.tag'] === b['.tag'])
            ) {
              return a['.tag'] === 'folder' ? -1 : 1;
            } else {
              return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            }
          })
          .map(item => (
            <li key={item.id}>
              <p>name: {item.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ItemsList;
