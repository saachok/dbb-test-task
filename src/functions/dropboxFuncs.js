import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';

const tempAccessToken =
  'uat.ACNewsNhqsB4Erz0BraH2NAGRPtkqAafP5bHqTBTTPY7xTrtoOcGrGrnFdeTeorsoibg6guXw_n3-TTjVPbMImbl8SUPYK6i-luoZJJrQX1BnP52UQfqZxIO5Iwp7PnnuJKiX29PSVQRMDW85Vbi1qaEhq-FeTgkyytfhY5VqUKO5Ahr52QzatmFYdZ_GY6qrKq3k16joVXkMgvQzMLc0YPvsJKcnErIaIwg-y_P4Oe2aOOhphHyRpiWWXzjzJDLMtMby7bC5W1BC8gZUm1k_Kh12VJUucWO8XINvBmCNJ2W8QN14YnFlx83E-ZkUxC32N_fhrnKnCaJAEFQcqKSBE33GNT8jW-302esvDipvUeufy0xxVzpp585EJxPMwTlaFqxlj2iiY4yIAY3zWDuxe3dCBkBeLmw9Te5Dmm1oCFycGRnl2CSicBHuu2AAKJxNX8OZS90VOgwZv1Q7qohysTpIIRIvMmfpiuOdyCw99SOw5OHwbeCmbJ2vwavB7kPI3DqILcWSGTZaqtdZTkEzLeTjMprjBL96-Kj6mlh29v6_q5y4qSENzWBIgKCuK5xlWMx1kPd98iY2tvGgpi88t-haWv8M14BcuquXI-6-Jr9impgdEH_c1XsAoFJK8CB6X_GtlNrMwyQYsze2iBHTqSNV7MhOg2yeo4_c4sAHewcBE8yxr1LICozB5FBgBl0ZYGoS2cM2lRbiKiNsUXj77V0dgVW-85_5N4qOwCGyjXYAsrMo6bJFTYL7qAEdKa2nE2GACPkgg5bBfjw573WSSZ-nj-mvbPXNMPFt1mqLD1wtaQg2YePJ2ywLxCeNkXt3yCgc4KEurqDFEQH_FzOOHT-rbtUpt1bT1N89fQ-8gSgoO9UtTle9ZW3sc8xsJCEj6r5aawbm58wis4ck5qdhvU17Hl-gQz99OF7ij8pZqdQzkkR0eh0WxJ3oyyRr_9xjKi5qi1qmOT4XN_e24mTFLLkJCXVN83rjN0SbbwwYY4lfwlGtP_x80yahKTLmeozB6niYqpa-7ieDCS8vNBrSQmZZCb3gsXq-MdTP4eN2l5lUXDSUEAgxsWKn8yzkQKdYHdGGVu_mR_oZCucZj_Zb5tjIovuf3K6T_nKrwDNJLVYsJ_S4w290YbFKPn4OXXukrg02dv2iN-fCQY65IyUAgXQiwBA_0jXzSBDA9-I4Xaie_zNmrVOSHdZDgWMBtaFoKIdP3MyxekhUyIvg_8A2l0rgqEndtAFKbIS5_UFtgWVwblsJJqwSLurbiaqU19THsDPvgqJJ6Pkptinsyx0SwAb';
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
  console.log('path', path);

  // const response = await dbx.filesDownload({ path });
  // console.log('response', response);
  // return response.result;
  fetch('http://localhost:8000/download?' + new URLSearchParams({ path }), {
    mode: 'no-cors',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  // console.log('res', res);
};

export const getSharedLink = async path => {
  const response = await dbx.sharingCreateSharedLinkWithSettings({ path });
  return response.result;
};
