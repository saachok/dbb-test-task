import styles from './GetSignaturesButton.module.scss';

const GetSignaturesButton = () => {
  return (
    <span
      className={styles['get-sign-btn']}
      onClick={() => alert('Not implemented')}
    >
      <span>
        <svg
          viewBox="0 0 32 32"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
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
              class="cls-1"
              d="M22,27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h9.76L15,4V8a3,3,0,0,0,3,3l2-2H18a1,1,0,0,1-1-1V5.41L20.29,8.7l.89-.89.52-.52L17.59,3.17A4,4,0,0,0,14.76,2H5A3,3,0,0,0,2,5V27a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V19.42l-2,2Z"
            ></path>
            <path
              class="cls-1"
              d="M29,7.24a2.86,2.86,0,0,0-4.39,0l-2,2L14.11,17.7a6.09,6.09,0,0,0-.93,1.23L10.69,24H7a1,1,0,0,0,0,2h4a1,1,0,0,0,.67-.27.58.58,0,0,0,.18,0L17.36,23a5.87,5.87,0,0,0,1.14-.9l.56-.55h0L27,13.62l2-2a3.07,3.07,0,0,0,1-2.19A3.11,3.11,0,0,0,29,7.24ZM16.67,21l-.27.19-2.8,1.38,1.33-2.73a3.88,3.88,0,0,1,.47-.6l.61.61.92.93Zm1.69-1.63-.78-.77-.78-.79,6.5-6.5,1.56,1.56Zm9.19-9.19L26.27,11.5,24.71,9.93,26,8.66a1.29,1.29,0,0,1,.78-.45,1.31,1.31,0,0,1,.78.45,1.34,1.34,0,0,1,.45.78A1.37,1.37,0,0,1,27.55,10.22Z"
            ></path>
          </g>
        </svg>
      </span>
      <span className={styles.text}>Get signatures</span>
    </span>
  );
};

export default GetSignaturesButton;
