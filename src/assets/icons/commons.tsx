import { ReactElement } from "react";

interface IconProps {
  className?: string;
}

export const MitraIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.7837 40.8137C22.7837 40.8137 42.9286 40.534 42.9998 22.8685C43.0711 5.20308 22.8931 22.9067 22.7837 40.8137Z" />
    <path d="M9.23337 15.5776C6.74012 15.5077 4.97903 17.6343 5.00019 22.8787C5.04986 35.194 14.8493 39.057 20.7841 40.269C21.1597 36.2926 22.2653 32.693 23.0817 30.4629C19.8074 22.1678 13.4709 15.6965 9.23337 15.5776Z" />
    <path d="M23.9142 7.00001C20.3583 10.6509 10.5251 13.6589 15.2742 16.5454C20.8309 19.9227 23.9273 28.5868 23.9273 28.5868C23.9273 28.5868 27.0238 19.9227 32.5804 16.5454C37.3296 13.6589 27.4636 10.708 23.9404 7.00001C23.9404 7.00001 23.923 6.99999 23.9142 7.00001H23.9142Z" />
  </svg>
);
export const ThemeLightIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.6751 25.0547C43.6955 24.6652 43.6095 24.2774 43.4262 23.9331C43.2429 23.5888 42.9693 23.301 42.6349 23.1005C42.3004 22.9001 41.9177 22.7946 41.5278 22.7953C41.1379 22.7961 40.7556 22.9032 40.422 23.105C38.2108 24.4434 35.645 25.0777 33.0649 24.9237C30.4849 24.7696 28.0125 23.8345 25.9757 22.2424C23.9389 20.6503 22.4339 18.4764 21.6603 16.009C20.8868 13.5416 20.8812 10.8974 21.6443 8.42692C21.7598 8.05408 21.7716 7.65676 21.6782 7.27773C21.5849 6.89869 21.39 6.55228 21.1145 6.27578C20.8391 5.99927 20.4935 5.80312 20.115 5.70845C19.7364 5.61378 19.3392 5.62416 18.9662 5.73848C14.3916 7.13835 10.5079 10.2031 8.08167 14.3279C5.65549 18.4527 4.8631 23.3377 5.86093 28.0187C6.85876 32.6998 9.57429 36.8368 13.4715 39.6131C17.3688 42.3894 22.1645 43.6033 26.9122 43.0151C31.3698 42.4677 35.4925 40.368 38.5575 37.0841C41.6225 33.8001 43.4342 29.5415 43.6751 25.0547V25.0547Z"
    />
  </svg>
);
export const ThemeDarkIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.4603 8.52554C25.073 8.91284 24.5477 9.13043 24 9.13043C23.4523 9.13043 22.927 8.91284 22.5397 8.52554C22.1524 8.13824 21.9348 7.61295 21.9348 7.06522C21.9348 6.51749 22.1524 5.99219 22.5397 5.60489C22.927 5.21759 23.4523 5 24 5C24.5477 5 25.073 5.21759 25.4603 5.60489C25.8476 5.99219 26.0652 6.51749 26.0652 7.06522C26.0652 7.61295 25.8476 8.13824 25.4603 8.52554ZM37.4386 13.4821C37.0513 13.8694 36.526 14.0869 35.9783 14.0869C35.4305 14.0869 34.9052 13.8694 34.5179 13.4821C34.1306 13.0948 33.913 12.5695 33.913 12.0217C33.913 11.474 34.1306 10.9487 34.5179 10.5614C34.9052 10.1741 35.4305 9.95651 35.9783 9.95651C36.526 9.95651 37.0513 10.1741 37.4386 10.5614C37.8259 10.9487 38.0435 11.474 38.0435 12.0217C38.0435 12.5695 37.8259 13.0948 37.4386 13.4821ZM42.3951 25.4603C42.0078 25.8476 41.4825 26.0652 40.9348 26.0652C40.3871 26.0652 39.8618 25.8476 39.4745 25.4603C39.0871 25.073 38.8696 24.5477 38.8696 24C38.8696 23.4523 39.0871 22.927 39.4745 22.5397C39.8618 22.1524 40.3871 21.9348 40.9348 21.9348C41.4825 21.9348 42.0078 22.1524 42.3951 22.5397C42.7824 22.927 43 23.4523 43 24C43 24.5477 42.7824 25.073 42.3951 25.4603ZM37.4386 37.4386C37.0513 37.8259 36.526 38.0435 35.9783 38.0435C35.4305 38.0435 34.9052 37.8259 34.5179 37.4386C34.1306 37.0513 33.913 36.526 33.913 35.9783C33.913 35.4305 34.1306 34.9052 34.5179 34.5179C34.9052 34.1306 35.4305 33.9131 35.9783 33.9131C36.526 33.9131 37.0513 34.1306 37.4386 34.5179C37.8259 34.9052 38.0435 35.4305 38.0435 35.9783C38.0435 36.526 37.8259 37.0513 37.4386 37.4386ZM25.4603 42.3951C25.073 42.7824 24.5477 43 24 43C23.4523 43 22.927 42.7824 22.5397 42.3951C22.1524 42.0078 21.9348 41.4825 21.9348 40.9348C21.9348 40.3871 22.1524 39.8618 22.5397 39.4745C22.927 39.0872 23.4523 38.8696 24 38.8696C24.5477 38.8696 25.073 39.0872 25.4603 39.4745C25.8476 39.8618 26.0652 40.3871 26.0652 40.9348C26.0652 41.4825 25.8476 42.0078 25.4603 42.3951ZM13.4821 37.4386C13.0948 37.8259 12.5695 38.0435 12.0217 38.0435C11.474 38.0435 10.9487 37.8259 10.5614 37.4386C10.1741 37.0513 9.95653 36.526 9.95653 35.9783C9.95653 35.4305 10.1741 34.9052 10.5614 34.5179C10.9487 34.1306 11.474 33.9131 12.0217 33.9131C12.5695 33.9131 13.0948 34.1306 13.4821 34.5179C13.8694 34.9052 14.087 35.4305 14.087 35.9783C14.087 36.526 13.8694 37.0513 13.4821 37.4386ZM8.52554 25.4603C8.13824 25.8476 7.61295 26.0652 7.06522 26.0652C6.51749 26.0652 5.99219 25.8476 5.60489 25.4603C5.21759 25.073 5 24.5477 5 24C5 23.4523 5.21759 22.927 5.60489 22.5397C5.99219 22.1524 6.51749 21.9348 7.06522 21.9348C7.61295 21.9348 8.13824 22.1524 8.52554 22.5397C8.91286 22.927 9.13043 23.4523 9.13043 24C9.13043 24.5477 8.91286 25.073 8.52554 25.4603ZM13.4821 13.4821C13.0948 13.8694 12.5695 14.0869 12.0217 14.0869C11.474 14.0869 10.9487 13.8694 10.5614 13.4821C10.1741 13.0948 9.95653 12.5695 9.95653 12.0217C9.95653 11.474 10.1741 10.9487 10.5614 10.5614C10.9487 10.1741 11.474 9.95651 12.0217 9.95651C12.5695 9.95651 13.0948 10.1741 13.4821 10.5614C13.8694 10.9487 14.087 11.474 14.087 12.0217C14.087 12.5695 13.8694 13.0948 13.4821 13.4821ZM37 24C37 31.18 31.18 37 24 37C16.82 37 11 31.18 11 24C11 16.82 16.82 11 24 11C31.18 11 37 16.82 37 24Z"
    />
  </svg>
);
export const ArrowLeftIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.4431 24L33.1108 36.6677C34.2765 37.8334 34.2765 39.7235 33.1108 40.8892V40.8892C31.945 42.055 30.055 42.055 28.8892 40.8892L12 24L28.8892 7.11078C30.055 5.94503 31.945 5.94503 33.1108 7.11078V7.11078C34.2765 8.27653 34.2765 10.1666 33.1108 11.3323L20.4431 24Z" />
  </svg>
);
export const ArrowRightIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26.7784 24L14.1108 11.3323C12.945 10.1666 12.945 8.27653 14.1108 7.11078V7.11078C15.2765 5.94503 17.1666 5.94503 18.3323 7.11078L35.2216 24L18.3323 40.8892C17.1666 42.055 15.2765 42.055 14.1108 40.8892V40.8892C12.945 39.7235 12.945 37.8334 14.1108 36.6677L26.7784 24Z" />
  </svg>
);
export const ToggleOffIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 43C13.5063 43 5 34.4937 5 24C5 13.5063 13.5063 5 24 5C34.4937 5 43 13.5063 43 24C43 34.4937 34.4937 43 24 43ZM24 39.2C28.0313 39.2 31.8975 37.5986 34.748 34.748C37.5986 31.8975 39.2 28.0313 39.2 24C39.2 19.9687 37.5986 16.1025 34.748 13.252C31.8975 10.4014 28.0313 8.8 24 8.8C19.9687 8.8 16.1025 10.4014 13.252 13.252C10.4014 16.1025 8.8 19.9687 8.8 24C8.8 28.0313 10.4014 31.8975 13.252 34.748C16.1025 37.5986 19.9687 39.2 24 39.2V39.2Z" />
  </svg>
);
export const ToggleOnIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z" />
  </svg>
);
export const FavoriteOffIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32.55 6C38.3222 6 43 10.75 43 17.4C43 30.7 28.75 38.3 24 41.15C19.25 38.3 5 30.7 5 17.4C5 10.75 9.75 6 15.45 6C18.984 6 22.1 7.9 24 9.8C25.9 7.9 29.016 6 32.55 6ZM25.7746 35.6476C27.3653 34.6553 28.9002 33.5764 30.3726 32.4157C36.0365 27.9127 39.2 22.9917 39.2 17.4C39.2 12.916 36.2797 9.8 32.55 9.8C30.5056 9.8 28.294 10.883 26.6866 12.4866L24 15.1732L21.3134 12.4866C19.706 10.883 17.4944 9.8 15.45 9.8C11.764 9.8 8.8 12.9464 8.8 17.4C8.8 22.9936 11.9654 27.9127 17.6255 32.4157C19.041 33.5405 20.5515 34.5912 22.2254 35.6457C22.7935 36.0048 23.3559 36.3487 24 36.7325C24.6441 36.3487 25.2065 36.0048 25.7746 35.6476V35.6476Z" />
  </svg>
);
export const FavoriteOnIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32.55 6C38.3222 6 43 10.75 43 17.4C43 30.7 28.75 38.3 24 41.15C19.25 38.3 5 30.7 5 17.4C5 10.75 9.75 6 15.45 6C18.984 6 22.1 7.9 24 9.8C25.9 7.9 29.016 6 32.55 6Z" />
  </svg>
);
export const VibrationIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38.9282 24.9997C38.0866 25.0009 37.266 25.2624 36.5788 25.7483C35.8917 26.2342 35.3717 26.9208 35.0901 27.7139H31.7634L29.3588 20.4991C29.2671 20.2242 29.0898 19.9859 28.8528 19.819C28.6159 19.6521 28.3318 19.5655 28.0421 19.5717C27.7523 19.578 27.4722 19.6768 27.2427 19.8538C27.0132 20.0307 26.8464 20.2765 26.7666 20.5551L22.9913 33.7667L18.5526 7.13308C18.5011 6.82557 18.3454 6.54516 18.1115 6.33901C17.8776 6.13285 17.5798 6.01352 17.2683 6.00108C16.9567 5.98864 16.6504 6.08385 16.4008 6.27069C16.1512 6.45754 15.9736 6.72463 15.8977 7.02705L10.7262 27.7139H6.35713C5.9972 27.7139 5.652 27.8569 5.39749 28.1114C5.14298 28.3659 5 28.7111 5 29.0711C5 29.431 5.14298 29.7762 5.39749 30.0307C5.652 30.2852 5.9972 30.4282 6.35713 30.4282H11.7856C12.0883 30.4281 12.3822 30.3269 12.6207 30.1407C12.8592 29.9544 13.0287 29.6938 13.1021 29.4002L16.9478 14.0163L21.3042 40.1512C21.3544 40.4555 21.5068 40.7336 21.7362 40.9398C21.9656 41.1459 22.2584 41.2677 22.5663 41.2852H22.6435C22.9382 41.285 23.2248 41.1888 23.4599 41.0113C23.6951 40.8338 23.8662 40.5846 23.9472 40.3013L28.1713 25.5188L29.4979 29.5002C29.5879 29.7705 29.7608 30.0055 29.9919 30.1721C30.2229 30.3386 30.5006 30.4282 30.7854 30.4282H35.0901C35.3389 31.1319 35.7764 31.7537 36.3547 32.2256C36.9331 32.6975 37.63 33.0013 38.3694 33.1038C39.1087 33.2064 39.862 33.1037 40.547 32.807C41.2319 32.5103 41.8221 32.031 42.253 31.4215C42.6839 30.812 42.939 30.0958 42.9904 29.3511C43.0417 28.6065 42.8873 27.862 42.5442 27.1992C42.201 26.5363 41.6822 25.9805 41.0444 25.5926C40.4067 25.2047 39.6746 24.9996 38.9282 24.9997Z"
      stroke-width="0.3"
    />
  </svg>
);
export const LinkIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.25 10.5C12.18 10.5 10.5 12.18 10.5 14.25V33.75C10.5 35.82 12.18 37.5 14.25 37.5H33.75C35.82 37.5 37.5 35.82 37.5 33.75V29.25C37.5 28.6533 37.7371 28.081 38.159 27.659C38.581 27.2371 39.1533 27 39.75 27C40.3467 27 40.919 27.2371 41.341 27.659C41.7629 28.081 42 28.6533 42 29.25V33.75C42 35.938 41.1308 38.0365 39.5836 39.5836C38.0365 41.1308 35.938 42 33.75 42H14.25C12.062 42 9.96354 41.1308 8.41637 39.5836C6.86919 38.0365 6 35.938 6 33.75V14.25C6 12.062 6.86919 9.96354 8.41637 8.41637C9.96354 6.86919 12.062 6 14.25 6H18.75C19.3467 6 19.919 6.23705 20.341 6.65901C20.7629 7.08097 21 7.65326 21 8.25C21 8.84674 20.7629 9.41903 20.341 9.84099C19.919 10.2629 19.3467 10.5 18.75 10.5H14.25ZM24 8.25C24 7.65326 24.2371 7.08097 24.659 6.65901C25.081 6.23705 25.6533 6 26.25 6H39.75C40.3467 6 40.919 6.23705 41.341 6.65901C41.7629 7.08097 42 7.65326 42 8.25V21.75C42 22.3467 41.7629 22.919 41.341 23.341C40.919 23.7629 40.3467 24 39.75 24C39.1533 24 38.581 23.7629 38.159 23.341C37.7371 22.919 37.5 22.3467 37.5 21.75V13.683L27.84 23.343C27.6323 23.5578 27.384 23.7291 27.1094 23.8469C26.8349 23.9647 26.5396 24.0266 26.2408 24.029C25.9421 24.0315 25.6458 23.9744 25.3694 23.8612C25.0929 23.7479 24.8418 23.5807 24.6306 23.3694C24.4195 23.158 24.2525 22.9067 24.1395 22.6301C24.0265 22.3536 23.9697 22.0573 23.9724 21.7585C23.9752 21.4598 24.0374 21.1646 24.1554 20.8901C24.2735 20.6156 24.445 20.3675 24.66 20.16L34.32 10.5H26.25C25.6533 10.5 25.081 10.2629 24.659 9.84099C24.2371 9.41903 24 8.84674 24 8.25Z" />
  </svg>
);
export const DeleteIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M38.8214 23.7041L41.8048 28.872C42.4033 29.9087 42.7185 31.0847 42.7186 32.2817C42.7187 33.4788 42.4037 34.6547 41.8054 35.6915C41.207 36.7283 40.3463 37.5893 39.3098 38.1881C38.2732 38.7868 37.0973 39.1023 35.9003 39.1026H31.8802V43L22.1367 36.1796L31.8802 29.3592V33.2566H35.8984C36.0548 33.2575 36.2091 33.2206 36.3482 33.149C36.4873 33.0774 36.607 32.9732 36.6972 32.8454C36.7873 32.7175 36.8452 32.5698 36.8659 32.4147C36.8867 32.2597 36.8696 32.1019 36.8162 31.9549L36.7421 31.7951L33.7587 26.6271L38.8214 23.7041V23.7041ZM15.7782 18.4154L16.811 30.2634L13.4398 28.3147L11.4287 31.7951C11.3497 31.9301 11.3044 32.0822 11.2969 32.2385C11.2893 32.3948 11.3196 32.5506 11.3853 32.6926C11.4509 32.8346 11.55 32.9586 11.6739 33.0541C11.7978 33.1496 11.943 33.2137 12.0971 33.241L12.2725 33.2566H18.2394V39.1026H12.2725C11.0753 39.1026 9.89916 38.7874 8.86235 38.1888C7.82555 37.5902 6.96458 36.7292 6.36598 35.6924C5.76739 34.6555 5.45226 33.4794 5.45227 32.2822C5.45228 31.085 5.76742 29.9089 6.36603 28.872L8.37512 25.3917L5 23.443L15.7762 18.4154H15.7782ZM27.4956 5.91457C28.5323 6.51282 29.3936 7.37414 29.9919 8.41084L31.999 11.8912L35.3761 9.9425L34.3433 21.7905L23.5632 16.7629L26.9383 14.8142L24.9292 11.3339C24.8516 11.1981 24.7424 11.083 24.6107 10.9985C24.4791 10.914 24.329 10.8626 24.1732 10.8486C24.0174 10.8347 23.8606 10.8586 23.716 10.9183C23.5715 10.978 23.4435 11.0718 23.343 11.1916L23.2416 11.3339L20.2602 16.5018L15.1955 13.5788L18.177 8.41084C18.6249 7.63495 19.2212 6.95489 19.9319 6.4095C20.6426 5.86412 21.4538 5.4641 22.3192 5.23229C23.1845 5.00047 24.0871 4.94142 24.9753 5.05848C25.8635 5.17555 26.7199 5.46646 27.4956 5.91457V5.91457Z" />
  </svg>
);

//*||||||||||||||*\\
//* NavBar Icons *\\
//*||||||||||||||*\\

export const SearchIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M34.9881 32.343L43 40.3531L40.3531 43L32.343 34.9881C29.3626 37.3773 25.6555 38.6768 21.8357 38.6714C12.5424 38.6714 5 31.129 5 21.8357C5 12.5424 12.5424 5 21.8357 5C31.129 5 38.6714 12.5424 38.6714 21.8357C38.6768 25.6555 37.3773 29.3626 34.9881 32.343ZM31.2356 30.955C33.6096 28.5136 34.9355 25.241 34.9301 21.8357C34.9301 14.6001 29.0694 8.74126 21.8357 8.74126C14.6001 8.74126 8.74126 14.6001 8.74126 21.8357C8.74126 29.0694 14.6001 34.9301 21.8357 34.9301C25.241 34.9355 28.5136 33.6096 30.955 31.2356L31.2356 30.955Z" />
  </svg>
);
export const ShopIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M42 6.9V10.7C42 14.2274 40.6026 17.6103 38.1153 20.1045C35.628 22.5988 32.2545 24 28.7368 24H26.8421V25.9H36.3158V39.2C36.3158 40.2078 35.9165 41.1744 35.2059 41.887C34.4952 42.5996 33.5313 43 32.5263 43H17.3684C16.3634 43 15.3995 42.5996 14.6889 41.887C13.9782 41.1744 13.5789 40.2078 13.5789 39.2V25.9H23.0526V20.2C23.0526 16.6726 24.45 13.2897 26.9373 10.7955C29.4246 8.30125 32.7982 6.9 36.3158 6.9H42ZM12.6316 5C14.9052 4.99816 17.146 5.54413 19.1653 6.59197C21.1846 7.6398 22.9233 9.15881 24.2349 11.0211C22.2329 13.6594 21.1517 16.8847 21.1579 20.2V22.1H20.2105C16.4417 22.1 12.8272 20.5987 10.1622 17.9263C7.49718 15.2539 6 11.6293 6 7.85V5H12.6316Z" />
  </svg>
);
export const CartIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.1429 17.3333H38.0322L38.925 13.8095H16.7143V11.2857C16.7143 10.7334 17.162 10.2857 17.7143 10.2857H41.2143C41.4858 10.2857 41.7536 10.3468 41.9976 10.4643C42.2415 10.5817 42.4551 10.7525 42.6221 10.9637C42.7891 11.1748 42.9051 11.4207 42.9613 11.6827C43.0175 11.9448 43.0124 12.216 42.9465 12.4758L38.4822 30.0948C38.3854 30.4758 38.1625 30.814 37.8486 31.0557C37.5348 31.2973 37.1481 31.4286 36.75 31.4286H11.3571C10.8835 31.4286 10.4293 31.2429 10.0945 30.9125C9.75957 30.5821 9.57143 30.134 9.57143 29.6667V8.52381H6V6C6 5.44771 6.44772 5 7 5H11.3571C11.8308 5 12.285 5.18563 12.6198 5.51605C12.9547 5.84647 13.1429 6.29462 13.1429 6.7619V17.3333ZM13.1429 42C12.1957 42 11.2873 41.6287 10.6175 40.9679C9.94771 40.3071 9.57143 39.4108 9.57143 38.4762C9.57143 37.5416 9.94771 36.6453 10.6175 35.9845C11.2873 35.3236 12.1957 34.9524 13.1429 34.9524C14.0901 34.9524 14.9985 35.3236 15.6683 35.9845C16.338 36.6453 16.7143 37.5416 16.7143 38.4762C16.7143 39.4108 16.338 40.3071 15.6683 40.9679C14.9985 41.6287 14.0901 42 13.1429 42ZM34.5715 42C33.6243 42 32.7159 41.6287 32.0461 40.9679C31.3763 40.3071 31 39.4108 31 38.4762C31 37.5416 31.3763 36.6453 32.0461 35.9845C32.7159 35.3236 33.6243 34.9524 34.5715 34.9524C35.5187 34.9524 36.4271 35.3236 37.0968 35.9845C37.7666 36.6453 38.1429 37.5416 38.1429 38.4762C38.1429 39.4108 37.7666 40.3071 37.0968 40.9679C36.4271 41.6287 35.5187 42 34.5715 42Z" />
  </svg>
);
export const CrystalsIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.00008 5.00008L9.77086 26.8576L19.263 35.1479L21.3159 28.8017L5 5L5.00008 5.00008ZM13.4815 8.49837L30.1819 18.4074L38.1955 18.6036L34.3057 12.9571L13.4814 8.49821L13.4815 8.49837ZM13.7725 11.9915L30.569 35.5041L43 42L39.084 32.2406L13.7726 11.9918L13.7725 11.9915Z" />
  </svg>
);
export const SettingsIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.3366 9.8794C13.2871 8.13723 15.578 6.8164 18.0654 6C18.7766 6.88844 19.6795 7.60561 20.707 8.09819C21.7344 8.59076 22.86 8.84608 24.0001 8.84515C25.1402 8.84608 26.2658 8.59076 27.2932 8.09819C28.3207 7.60561 29.2236 6.88844 29.9348 6C32.4222 6.8164 34.7131 8.13723 36.6636 9.8794C36.2486 10.9372 36.0778 12.0747 36.1639 13.2074C36.2501 14.34 36.591 15.4388 37.1614 16.4221C37.7305 17.4073 38.5151 18.2518 39.4567 18.893C40.3984 19.5341 41.4729 19.9554 42.6003 20.1253C43.1332 22.6805 43.1332 25.3176 42.6003 27.8728C40.3966 28.2099 38.3639 29.5018 37.1614 31.576C36.5907 32.5595 36.2497 33.6586 36.1635 34.7917C36.0773 35.9247 36.2483 37.0625 36.6636 38.1206C34.713 39.8621 32.422 41.1823 29.9348 41.9981C29.2234 41.11 28.3204 40.3932 27.293 39.901C26.2655 39.4087 25.14 39.1537 24.0001 39.1549C22.86 39.1539 21.7344 39.4092 20.707 39.9018C19.6795 40.3944 18.7766 41.1116 18.0654 42C15.5782 41.1842 13.2872 39.864 11.3366 38.1225C11.7519 37.0644 11.9229 35.9266 11.8367 34.7936C11.7505 33.6605 11.4095 32.5614 10.8388 31.5779C10.2695 30.5931 9.48479 29.7489 8.54317 29.1081C7.60154 28.4673 6.52717 28.0463 5.39992 27.8766C4.86669 25.3208 4.86669 22.683 5.39992 20.1272C6.52734 19.9572 7.60182 19.536 8.54346 18.8949C9.4851 18.2537 10.2697 17.4092 10.8388 16.424C11.4092 15.4407 11.7501 14.3419 11.8363 13.2093C11.9224 12.0766 11.7516 10.9391 11.3366 9.88129V9.8794ZM26.8497 28.9203C27.5031 28.5499 28.0765 28.0542 28.537 27.462C28.9975 26.8697 29.336 26.1924 29.5329 25.4691C29.7298 24.7459 29.7813 23.9909 29.6845 23.2477C29.5876 22.5045 29.3442 21.7878 28.9684 21.1388C28.5926 20.4898 28.0918 19.9213 27.4947 19.466C26.8977 19.0108 26.2162 18.6778 25.4896 18.4863C24.7629 18.2947 24.0055 18.2484 23.2608 18.3499C22.5161 18.4514 21.7989 18.6988 21.1505 19.0778C19.8522 19.8368 18.9077 21.0769 18.523 22.5277C18.1383 23.9785 18.3448 25.5221 19.0972 26.8216C19.8497 28.1212 21.0872 29.0712 22.5396 29.4644C23.992 29.8576 25.5414 29.662 26.8497 28.9203V28.9203Z" />
  </svg>
);