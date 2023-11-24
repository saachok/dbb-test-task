import CreateButton from '../Buttons/Create/CreateButton';
import CreateFolderButton from '../Buttons/CreateFolder/CreateFolderButton';
import EditPDFButton from '../Buttons/EditPDF/EditPDFButton';
import GetSignaturesButton from '../Buttons/GetSignatures/GetSignaturesButton';
import RecordButton from '../Buttons/Record/RecordButton';
import UploadButton from '../Buttons/Upload/UploadButton';

import styles from './Toolbox.module.scss';

const Toolbox = ({ path }) => {
  return (
    <div className={styles.toolbox}>
      <CreateButton />
      <UploadButton path={path} />
      <CreateFolderButton path={path} />
      <RecordButton />
      <EditPDFButton />
      <GetSignaturesButton />
    </div>
  );
};

export default Toolbox;
