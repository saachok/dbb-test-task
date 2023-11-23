import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';

const tempAccessToken =
  'uat.ACP3W465iL1d7Y_IkxFhknJ0w0jfbkOMJoa5UZMb2C-mLn1mAQ7f20KfvMC1RxSFdnKAF6Xhk-4Sw2KUobd8z_b2s4d88CiGRCgmz1j1emBUbIwFRMJEjG4IkqAy-bzE93dlByqLAUQ6n3_dHuaSNnQ-sO1u7qZobY2d5odITTDbDlXASrqaBB1Hg30wf1I6gEHKbh-7oMw7c-8jh5i794YsBLOMicN2Z47NdgvcFur67XTi2l1EIFDCDW8zBjmqXZZ9-S-4LTl-26YrAyMfcdmUOSY2OignPkKJZrquxWOmNxLVsUBco-g8S-ivmOSnzF7qnZiFWtSfDxX_Pab7YttVxbMqMU0JAdm898uch4LBY6PSrTQxV-4OdJmbYleElLFGc7ozJ9GVV9KHvtiLjMUShOxwAG-LBrcLnAjPRyRTGwSzb9RlbpE9W_7e2uNCkHrRiYKbVWbB0vl4gi81xZJXOAZmOAT3Ky9I1NgmOaIVAk_O3vI-IzqrV5t1hNrx2zQvVnCFyqs6dp70tvxrXEuA5_T3Lg50mnNSl0GMV9ObXLuQmb_FpEDY0KAa3wP6-sE7X15CvC3AGlMa7UgB_BooNk0jYmyqy3m801hfR1VVLjchOnfoViX7vMZRqOlRDFooSp-T_AYS48YxFVawcAxsNmMKX11J5Qad-8lufkf8uup_f8Co5OoDDMTr7HrhoyLxbjLMGnVfJsJjB8m7n0oJNplNOeVtiiR9jCeGu0M-97SVTx6Su3qFP08gWRASKKMI8RnqKKvPrZ7yoYb9xtoS8Q0usnEcsro0IJt0k-QRvgps_rsZKr5Mltupak4mMBDVaMUFsYGMzHILJoltLxX2GwgF3dWyyGAT5QZTiQdTEcdA8uZBcakSQiz3VOcpBucg6JhINTJB1Xbw2u6eJ1mJeFCwjD5dcnxRxAjguXPB0-ueG918ch_1l0nDNnXMeurB9CPcqF3p_cxoPUu0TGzabjsqUCOwvfqxu_ivUkY-W9cdphscrH3gXoAu95OqdiiajIuBBK19VQO4NoXf5uGEVgihmXHxGLtyL6FV8uoz36wfHWLUV3cEtFfPiZK6cnLQ_-MmCdxH3t9zxrq3VW0R14takadUHqbmTlVxUD3lq9bDDga-kc8zvkQpMsMb9zhXmJao2C_oFtZfixPTFodWGlt6j3pzcDU_r81e7IGtVkW_4Y5oiDHGnxHGIAx9QNfuHM2czbwjGyxXjbesfY1cWmPtwFxy8F8fFaeS1YP29suPrzBhM5VbdpPvGUJhwOJLe-PEntANIpZKoz3JOvn8';

const dbx = new Dropbox({
  accessToken: tempAccessToken,
  fetch,
});

export const getListFolders = async path => {
  const response = await dbx.filesListFolder({ path });
  return response.result;
};

export const getThumbnails = async files => {
  const paths = files
    .filter(file => file['.tag'] === 'file')
    .map(file => ({ path: file.path_lower, size: 'w32h32' }));

  const response = await dbx.filesGetThumbnailBatch({ entries: paths });
  return response.result;
};

export const downloadFile = async path => {
  const headers = new Headers({
    Authorization: 'Bearer ' + tempAccessToken,
    'Dropbox-API-Arg': JSON.stringify({ path: path }),
  });

  const response = await fetch(
    'https://content.dropboxapi.com/2/files/download',
    { method: 'POST', headers }
  );
  const data = await response.blob();

  await fetch('http://localhost:8000/save-file', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};
// const response = await dbx.filesDownload({ path });
// return response.result;

export const getSharedLink = async path => {
  const response = await dbx.sharingCreateSharedLinkWithSettings({ path });
  // const response = await dbx.sharingGetSharedLinkMetadata({ url: path });
  return response.result;
};
