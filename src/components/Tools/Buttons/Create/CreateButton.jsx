import styles from './CreateButton.module.scss';

const CreateButton = () => {
  return (
    <span
      className={styles['create-btn']}
      onClick={() => alert('Not Implemented')}
    >
      <span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className={styles.icon}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 12H20M12 4V20"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </span>
      <span className={styles.text}>Create</span>
    </span>
  );
};

export default CreateButton;
