import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';

const tempAccessToken =
  'uat.ACIPeVUxXVFAs5_7wKcpC8SmarCduYsVydz8Qp9TM6EqoBsaSh5KkWKh3y5dSPeSR4iSW1c63eQuJr8NFOrCDoKTDfs5KEpGCk7CS-IpdBDQhffbY0W5-IKlU46qgcvn817SVPRsrY9PesLrumjARXGIfM8xmlf-FE_A8mP-5H7fUWz_sD29Gj3tvoCaPt1Ult2mLBIEr9ikHIeepElLIaNJdrAsgo2pQI7l3DpiiyuCWi7Kgsfl22ePRPdgd1Qa7KdzrkmQEmnqjbjFZW7sRuDl0Gi5DcX3o3tVsoCfBVvKdO5N8bMKiy376Z0gS914DSPe0cYUe8FTJFthboHxaDHm0ve7tcN3_BWlPnRX4KrDaSxOdIvY3qEbkavWA6yPApyh7eukFxnQcpK258yWBh88PdijzdN3z1gSdb9cVYIYzWFaXnXhar5yz7dDEpqWmXnAUYEgJPX17YRFHiAszpXC1y7PBvEBD1-kz2sMvTCY3qrRq2LIAitjgcgqRbfRR13PSRxg35J296Xjepqk_jlQOn2iahtXRo0OA5fwmH_lgBb_EsqkssmAGWNKExzSmI1eRZw_2RmV79aqc1MSit6zjDUPRPGo6EH2RMO1C92PIpJs0M3Gp_p-RXalweNEDQ1ZnyqKfmLIKe2zqRe59FWbW9z9fAqC0975wwj2PLZ_uslmRMMUMgGFmth_ppLnRfwmSaYg8JCSxk6UxyVFcC2R926rJC2CejQnxKjmHT7fsXuY6EPdp3jncH_qVo-txqJB6IpqChThrhceXUiePOXN_Oomu3bSUVCDRe-1mukpo89UwMt2B6cWY3AnhMmsTC_mL_0vtMu3DetcVF9cS21idwVkL_tAga-r3EU70JecCqVVtNq0kr7JuVReD4yWRqx4Syeh215jGuGOIqGeamZOo3jyg1YKxpRCl79JZEdg9EpZtLXnzgr783-VffqdyWFhIK6go9PixZGwkjEU57_UQF7t5DstwOhfMz7HlwN8aacht5d5k6OUV4g8MQsC3ZLVR3WbIfK0x8SmFNNesBiqmz8b-q4HcN-rbAo52wsrbX4zFLtCJ3lgoTJLGv387efBlBfOn8IWG_RNdjHIB-p7T5AMKCqhi7NQYd6wY0h1m6ydAoUecF_Lcl7fj6AbXK9aK8LV2ex-9K794ldIP2yQoHNevd-e9jZDKiFkZHj91_0ffCKFNQ2BF_X9KJWaFk0fI41AvyAGnUwS5qg2xFwAYqZat7JJ2LXNVsr6KbfoiKwNIu0qym7FemnFl69gz5xYfx3K7f4_SHL2GgpnFuBD';

const dbx = new Dropbox({
  accessToken: tempAccessToken,
  fetch,
});

export const getListFolders = async () => {
  const response = await dbx.filesListFolder({ path: '/Server app' });
  return response.result;
};

export const getThumbnails = async files => {
  const paths = files
    .filter(file => file['.tag'] === 'file')
    .map(file => ({
      path: file.path_lower,
      size: 'w32h32',
    }));

  const response = await dbx.filesGetThumbnailBatch({ entries: paths });
  return response.result;
};
