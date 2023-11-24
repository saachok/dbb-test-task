export const sortByType = (a, b) => {
  if ((a.type === 'folder' || b.type === 'folder') && !(a.type === b.type)) {
    return a.type === 'folder' ? -1 : 1;
  } else {
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
  }
};

export const addFileType = file => {
  return { ...file, type: file['.tag'] };
};

export const showNotImplementedAlert = () => alert('Not Implemented');
