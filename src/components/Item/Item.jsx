import { downloadFile } from '../../functions/dropboxFuncs';

import styles from './Item.module.scss';

const Item = ({ file, thumbnail, setLocation }) => {
  const handleClick = () => {
    setLocation(file.path_lower);
  };

  const handleDownload = async () => {
    const response = await downloadFile(file.path_lower);
    console.log('response', response);
    // fetch('https://content.dropboxapi.com/2/files/download', {
    //   headers: {
    //     Authorization:
    //       'Bearer uat.ACIoKbBNiqJOBnbXFjD0Htj5sRJvNNfzAdcNRbIGSpb2rYNozD1HDdhwftw8b0nTwb5LiiMHYk_eeoAs9lg6L7lF1W61Ez38K9nElQAGa9A7rh5jiOSI0-c67R9BLKHgSKt3ie4mSwUDNKybOBi2Oj_r5X5m8lvxIRtq3zn1r8VE9ic4Z8fav_Olgs5tMgfRgpp4_6COxjyjkNerr6P-Bva0iLBO8LbPMfdqzbw0Z0UVeyWW_C64w3zcGgIPrJ0LsgFfgz_88NBcdqjrPNolI9DdWot50lXiYD67MnE98SBNILJ98tSO0SPNHYcQ0ksGzU4vEICyoQ0Kid9DpN756Z5UuPBEaY67VX1SyT-oCiNq6GQ2zO8CR0499qzrf020xGFfbHO-ixRzzd8JjmkZEzvtGGVHc7HwtrWAksIFeoyticrSCCabwlRLt7iG1Chw4CN5KsRZqNXz7YJQYLCIBQV-QByPOBAVDBWyFKFtMwx0poqXwVD55hV_l7nNeDsZNr9enxFP-do_3GnpwozBZh_g-dHnAAemgqG7x30EAT31T_WIz2f9qcdYU1Dgosugo2y-fpIg43bpeXfucejZz_trlsmRFMsauk3arGMqsnoLOU596TQLmUEH0Fc-CmF4aW7_gL-zqgLVoS9F4ac_US2hDwvv2-NDRmq8P2bAu2KvdUiaytyUOOzexMB3EExPYzNo1Yiu9zh3a6yEXb2jvJRgrIEUAZ02c17T1kWqbDDOnftjPNlJ2G978FdJAUAOj3DZD0m0n_u8tcNOYuaO4GdMS1qeNQG1KI-Qtf9ZMwUN4lpI6GeoYxmBmOIapwJZUCa1lZEKYydfy01_9xng1mw6H7umaX1bHOghMQPR7UXgBc4Eq39KwPb0_X-N--sGkpBDagA4DdZkVsKX-_tBUoNWu8DiToS26_qwVgfCFf1NP2UBMLYsJx87_tOkDYfFwGNXiJH5I6pCroWZzPwg8FLgwd4pX7PM57y1GVg_6dPVMdhjec3lck2P7monMW73fQO_uVqtr5sP47IjfzzubjBXZ0Czwoo6XjLWIcr8n7HCuIlRfBEyMpcjMMoe4eMz6nPpIW8ofhJ0I3t1kXscf-ut97sYa3btOipefSDKMLgScwV_hpLBrphoO4Yd12eXFtlXaNSMyQOB66socQpVu1qwteyLjaqIXZN3ePdigqv3nU5gM0B1Zi7at8scuwVvRDGMY3aOIurkuBw0W-Kjd0eaAP-dZfgulAgDUsCXuI-iOrkCr4vxK1agMeKZb5HjwU0KaL2D9Zmj3W574bEqK5Re',
    //     'Dropbox-API-Arg': JSON.stringify({ path: file.path_lower }),
    //   },
    // });
  };

  return (
    <li className={styles['list-item']}>
      <div className={styles['info-area']} onClick={handleClick}>
        <img alt="Thumbnail" src={thumbnail} />
        {file.name}
      </div>
      {file['.tag'] !== 'folder' && (
        <button className={styles['download-btn']} onClick={handleDownload}>
          Download
        </button>
      )}
    </li>
  );
};

export default Item;
