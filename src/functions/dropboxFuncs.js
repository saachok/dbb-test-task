import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';

const dbx = new Dropbox({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  fetch,
});

export const getListFolders = async path => {
  const response = await dbx.filesListFolder({ path });
  return response.result;
};

export const getThumbnails = async files => {
  const paths = files
    .filter(file => file.type === 'file')
    .map(file => ({ path: file.path_lower, size: 'w32h32' }));

  const response = await dbx.filesGetThumbnailBatch({ entries: paths });
  return response.result;
};

export const downloadFile = async path => {
  const response = await fetch(
    'http://localhost:8000/download?' + new URLSearchParams({ path }),
    {
      mode: 'no-cors',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return response;
};

export const uploadFile = async (fileInput, path) => {
  const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
  const file = fileInput;

  if (file.size < UPLOAD_FILE_SIZE_LIMIT) {
    try {
      dbx.filesUpload({ path: path + '/' + file.name, contents: file });
    } catch (err) {
      console.error(err);
    }
  } else {
    alert('Please upload files smaller than 150 Mb');
  }
};

export const getSharedLink = async path => {
  let link = null;
  try {
    const response = await dbx.sharingCreateSharedLinkWithSettings({ path });
    const sharedLink = response.result.url;
    link = sharedLink;
  } catch (error) {
    const response = await dbx.sharingListSharedLinks({
      path,
      direct_only: true,
    });
    const sharedLink = response.result.links[0].url;
    link = sharedLink;
  } finally {
    return { sharedLink: link };
  }
};

export const getSharedLinkFile = SHARED_LINK => {
  dbx
    .sharingGetSharedLinkFile({ url: SHARED_LINK })
    .then(data => {
      const downloadUrl = URL.createObjectURL(data.result.fileBlob);
      const downloadButton = document.createElement('a');
      downloadButton.setAttribute('href', downloadUrl);
      downloadButton.setAttribute('download', data.result.name);
      downloadButton.setAttribute('class', 'button');
      downloadButton.innerText = 'Download: ' + data.result.name;

      downloadButton.click();
    })
    .catch(error => {
      console.error(error);
    });
};
