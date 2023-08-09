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
      fill-rule="evenodd"
      clip-rule="evenodd"
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
      fill-rule="evenodd"
      clip-rule="evenodd"
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

//*||||||||||||||*\\
//* Zodiac Icons *\\
//*||||||||||||||*\\

export const AquariusIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m 9.0356151,73.013867 c -0.577834,-0.233161 -1.0438113,-1.621621 -1.035506,-3.085465 0.01264,-2.22816 0.662708,-3.098513 3.9923059,-5.345179 2.187462,-1.476003 5.641546,-3.839868 7.675744,-5.253033 5.15768,-3.583063 9.163011,-3.524229 12.393734,0.182053 1.319122,1.513293 2.971931,3.627908 3.672908,4.699144 l 1.274505,1.947699 5.100763,-3.754968 c 6.78388,-4.994009 8.111547,-5.643319 11.539066,-5.643319 2.921038,0 5.512627,2.149921 8.981196,7.450588 l 1.274506,1.947699 5.100761,-3.754968 c 6.762564,-4.978315 8.114047,-5.643319 11.468887,-5.643319 2.029405,0 3.437807,0.659532 4.935754,2.311334 6.622804,7.30304 8.257809,11.883497 4.885969,13.68805 -2.268131,1.213867 -5.025423,-0.535855 -8.052362,-5.109869 -2.206349,-3.334018 -2.237731,-3.347909 -4.410964,-1.952393 -1.203844,0.773033 -3.51257,2.427661 -5.130505,3.676951 -4.315258,3.332031 -6.275465,4.195633 -9.523258,4.195633 -2.921039,0 -5.512627,-2.149921 -8.981196,-7.450588 l -1.274506,-1.9477 -5.100761,3.754967 c -6.783881,4.994009 -8.111547,5.643321 -11.539068,5.643321 -2.909614,0 -5.440969,-2.089522 -8.967417,-7.402208 l -1.260728,-1.899319 -6.663626,4.650763 c -6.341983,4.42628 -7.953845,5.063499 -10.3562019,4.094126 z m 0,-30.257471 c -0.577834,-0.23316 -1.0438113,-1.621621 -1.035506,-3.085465 0.01264,-2.22816 0.662708,-3.098514 3.9923059,-5.345179 2.187462,-1.476004 5.641546,-3.839869 7.675744,-5.253033 5.15768,-3.583064 9.163011,-3.52423 12.393734,0.182053 1.319122,1.513294 2.971931,3.627909 3.672908,4.699144 l 1.274505,1.947698 5.100763,-3.754967 c 6.78388,-4.994009 8.111547,-5.64332 11.539066,-5.64332 2.921038,0 5.512627,2.149921 8.981196,7.450589 l 1.274506,1.947698 5.100761,-3.754967 c 6.762564,-4.978316 8.114047,-5.64332 11.468887,-5.64332 2.029405,0 3.437807,0.659532 4.935754,2.311335 6.622804,7.30304 8.257809,11.883497 4.885969,13.688049 -2.268131,1.213868 -5.025423,-0.535855 -8.052362,-5.109869 -2.206349,-3.334018 -2.237731,-3.347908 -4.410964,-1.952392 -1.203844,0.773033 -3.51257,2.427661 -5.130505,3.676951 -4.315258,3.33203 -6.275465,4.195633 -9.523258,4.195633 -2.921039,0 -5.512627,-2.149921 -8.981196,-7.450589 l -1.274506,-1.947698 -5.100761,3.754967 c -6.783881,4.994008 -8.111547,5.64332 -11.539068,5.64332 -2.909614,0 -5.440969,-2.089523 -8.967417,-7.402208 l -1.260728,-1.899319 -6.663626,4.650763 c -6.341983,4.42628 -7.953845,5.063499 -10.3562019,4.094126 z" />
  </svg>
);
export const AriesIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 46.619208,89.845317 C 46.16864,88.66024 45.796896,85.352739 45.793102,82.495317 45.778702,71.640377 42.691701,50.714694 39.388382,39.08 36.762646,29.831818 32.165669,20.45264 28.92017,17.721738 26.979198,16.088508 25.411159,15.56 22.506515,15.56 c -3.426914,0 -4.191622,0.375911 -7.039041,3.460223 -2.637529,2.856963 -3.566951,3.366741 -5.33097,2.923994 C 8.3712472,21.50117 8,20.911109 8,18.548445 8,7.8293294 27.113511,4.0793387 35.42256,13.168254 40.720673,18.963618 47.18293,34.466694 48.762073,45.17 49.085851,47.364502 49.64291,49.16 50,49.16 c 0.35709,0 0.914149,-1.795498 1.237927,-3.99 0.32377,-2.194502 1.868513,-7.963439 3.432749,-12.81987 C 60.219141,15.124033 66.85423,8 77.349595,8 85.48605,8 92,12.690109 92,18.548445 c 0,2.362664 -0.371239,2.952725 -2.136516,3.395772 -1.764026,0.442747 -2.69342,-0.06701 -5.330951,-2.923994 C 81.685107,15.935911 80.920399,15.56 77.493485,15.56 c -2.904644,0 -4.472683,0.528508 -6.413655,2.161738 C 67.834331,20.45264 63.237354,29.831818 60.611618,39.08 57.308299,50.714694 54.221298,71.640377 54.206898,82.495317 54.197243,89.769914 53.210175,92 50,92 48.023225,92 47.251389,91.50809 46.619208,89.845317 Z" />
  </svg>
);
export const CancerIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 39.08,83.960368 C 32.566251,82.255698 21.866131,76.776879 16.258167,72.274826 10.316759,67.505087 8,63.028699 8,56.318592 8,46.446224 14.685974,39.92 24.8,39.92 c 10.05393,0 16.8,6.53356 16.8,16.27078 0,7.199959 -2.226976,11.245396 -8.786412,15.961048 -1.518572,1.091719 -1.098169,1.356814 5.414229,3.41408 14.87635,4.699436 30.971701,2.148635 45.5861,-7.224513 C 88.990086,65.021586 92,65.469454 92,69.559465 c 0,2.352163 -0.587317,3.111948 -4.268338,5.521754 -10.67604,6.989144 -21.88759,10.225832 -35.136031,10.1435 C 47.703034,85.194314 41.621,84.625356 39.08,83.960368 Z M 29.718179,64.762997 c 3.962151,-2.048909 5.494968,-7.909172 3.318286,-12.686468 -1.853109,-4.067131 -8.047063,-5.794998 -12.879936,-3.592994 -5.901369,2.688844 -6.095428,13.094335 -0.304069,16.304239 2.652862,1.47037 6.995515,1.459462 9.865719,-0.02478 z M 66.181541,57.931325 C 55.866175,51.748754 55.587389,35.151052 65.69399,28.904829 l 3.108856,-1.921378 -2.891423,-1.202428 C 56.90398,22.035189 43.834695,21.105037 34.46,23.542597 29.425042,24.851762 20.436981,28.909067 14.53281,32.53794 10.794129,34.83584 8.5595194,34.005248 8.1763804,30.175287 7.965255,28.06482 8.5065592,27.365499 12.234719,24.932242 22.686048,18.110974 34.141207,14.72 46.733022,14.72 c 10.780954,0 15.552166,1.059246 24.686978,5.480698 9.004776,4.358513 16.092436,9.96837 18.69,14.793067 4.298776,7.984511 1.548055,18.554445 -5.976126,22.963909 -5.120311,3.000702 -12.920925,2.989253 -17.952333,-0.02635 z M 80.118179,51.322997 C 82.762214,49.955713 84.44,46.833319 84.44,43.28 c 0,-7.217608 -7.002267,-11.371751 -13.883471,-8.236465 -5.901369,2.688844 -6.095428,13.094335 -0.304069,16.304239 2.652862,1.47037 6.995515,1.459462 9.865719,-0.02478 z" />
  </svg>
);
export const CapricornIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m 34.935138,90.423025 c -0.94361,-1.763151 -0.004,-5.119526 1.444417,-5.159665 0.330245,-0.0091 3.245559,-0.39887 6.478476,-0.866043 6.435243,-0.929924 11.03861,-3.391376 12.921219,-6.909063 1.044078,-1.950878 0.974,-2.40097 -0.706399,-4.536992 C 50.894613,67.640141 50.554993,65.77906 50.041497,45.38 49.629847,29.026879 49.324214,25.633414 48.051249,23.282117 46.356044,20.1509 39.716514,15.56 36.883238,15.56 34.704949,15.56 26.145593,23.065721 24.338255,26.560726 23.377447,28.418724 23.12,33.001928 23.12,48.248731 23.12,66.721189 23.04529,67.620875 21.44,68.48 20.282969,69.099224 19.259823,69.111422 18.153217,68.519184 16.648302,67.713779 16.525685,66.287323 16.219164,46.01963 16.011277,32.2738 15.538615,23.553367 14.923434,22.113913 14.39078,20.867564 12.588174,18.334943 10.917643,16.485865 8.6597364,13.986632 7.9495596,12.52036 8.150157,10.771952 8.3726968,8.8322952 8.8729724,8.3757664 11.003997,8.1676681 c 2.131959,-0.2081894 3.176433,0.3903848 5.970547,3.4216399 1.862603,2.020685 3.582052,4.213235 3.820999,4.872332 0.322091,0.888439 1.276259,0.417782 3.689453,-1.819877 6.362266,-5.8994781 8.382524,-6.8773695 13.356095,-6.4649223 5.614591,0.4656056 12.721922,4.8922323 16.137778,10.0510203 2.310781,3.489851 2.323412,3.588165 2.832515,22.048811 0.470697,17.06793 1.5214,25.683328 3.132247,25.683328 0.351382,0 1.138351,-1.4175 1.74882,-3.15 1.640286,-4.655099 4.933908,-8.623173 8.338099,-10.045535 4.367935,-1.825039 12.454765,-1.152589 15.934203,1.324989 8.038723,5.724077 8.019092,19.704687 -0.03573,25.449805 -3.38078,2.411348 -13.400999,3.156905 -18.706764,1.391883 l -3.357748,-1.116993 -2.558335,3.354202 c -3.863042,5.064785 -10.632324,8.181839 -18.79457,8.654345 -6.09518,0.352847 -6.698164,0.241446 -7.576464,-1.399671 z M 82.378182,72.298182 c 2.865229,-2.86523 2.865229,-8.131134 0,-10.996364 C 79.607231,58.530868 74.400916,58.235155 71.647604,60.692334 70.303513,61.891861 66.8,69.99096 66.8,71.898579 c 0,1.380775 3.486852,2.351725 8.648182,2.408177 4.089414,0.04473 5.198013,-0.276587 6.93,-2.008574 z" />
  </svg>
);
export const GeminiIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 8.56,91.44 C 8.252,91.132 8,89.789712 8,88.457138 8,85.501934 9.8498217,84.614687 21.65,81.910064 l 8.19,-1.877163 V 50 19.967099 L 21.65,18.089936 C 17.1455,17.057496 12.206879,15.696899 10.675287,15.066388 8.2191417,14.055265 7.9218076,13.595532 8.1552871,11.170002 8.4871825,7.722067 10.48351,7.2969946 17.326827,9.2171315 37.092083,14.76298 58.82873,15.045677 79.226535,10.022171 90.202964,7.3189306 91.58,7.4680579 91.58,11.36 c 0,2.902849 -0.0743,2.963504 -5.88,4.800082 -3.234,1.023045 -8.0535,2.278344 -10.71,2.789554 l -4.83,0.929473 v 30.164442 30.164442 l 1.89,0.384083 c 7.352255,1.494115 14.91728,3.402947 17.274713,4.358809 2.458808,0.996968 2.753735,1.450953 2.52,3.879113 -0.343081,3.564138 -2.173266,3.84348 -10.638528,1.623796 C 60.965428,85.146438 35.619196,85.259318 17.562491,90.737231 13.185002,92.065243 9.4748694,92.354866 8.56,91.44 Z M 63.439851,50 63.439702,21.02 H 49.999821 36.55994 L 36.559971,50 36.56,78.98 H 50 63.44 Z" />
  </svg>
);
export const LeoIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m 64.28,91.393913 c -5.610614,-2.108234 -9.24,-7.902216 -9.24,-14.750812 0,-6.606077 1.841031,-10.927857 8.795809,-20.647972 8.321959,-11.63091 9.921485,-15.117148 10.353673,-22.566287 0.313249,-5.399139 0.10726,-6.489182 -1.860947,-9.847674 -1.354135,-2.310656 -3.658607,-4.62359 -5.937043,-5.958843 -9.337267,-5.472002 -23.486694,-0.21171 -25.290253,9.402085 -0.879337,4.687272 0.229721,16.119775 2.134244,22.000429 2.093067,6.462822 2.24176,14.331257 0.346306,18.325627 -2.263995,4.771018 -6.376846,7.308847 -12.474032,7.697087 C 21.289501,75.672732 15.472015,70.763779 14.872448,61.347757 14.248703,51.552039 19.159592,45.7118 28.521535,45.115676 l 5.199861,-0.331102 -0.365882,-9.558776 C 33.009475,26.185464 33.111562,25.417803 35.237731,21.07207 39.339402,12.688557 45.969921,8.7221187 56.80057,8.1729796 62.709358,7.8733903 64.700981,8.1076053 67.763247,9.4621913 72.9311,11.748178 76.96573,15.502844 79.422225,20.312149 81.222883,23.837463 81.5,25.500323 81.5,32.78 81.5,42.951329 80.033861,46.644418 70.938347,59.383969 64.173658,68.858871 62.6,72.132576 62.6,76.730362 c 0,7.386929 7.850087,10.35373 13.731664,5.189638 1.578567,-1.386 3.460285,-2.52 4.181597,-2.52 1.756932,0 3.919844,3.211212 3.3182,4.926434 -0.820466,2.339063 -3.885975,5.316613 -6.714481,6.521824 C 74.4485,91.985282 66.727246,92.313488 64.28,91.393913 Z M 35.338182,65.578182 C 36.855273,64.061091 37.4,62.608485 37.4,60.08 37.4,57.551515 36.855273,56.098909 35.338182,54.581818 33.821091,53.064727 32.368485,52.52 29.84,52.52 c -4.728479,0 -7.56,2.831521 -7.56,7.56 0,4.728479 2.831521,7.56 7.56,7.56 2.528485,0 3.981091,-0.544727 5.498182,-2.061818 z" />
  </svg>
);
export const LibraIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 8.3302512,80.729019 C 8.075542,80.065257 7.9915362,78.644189 8.1435718,77.57109 L 8.42,75.62 H 50 91.58 v 2.94 2.94 L 50.186679,81.717929 C 14.836682,81.904041 8.7257463,81.759662 8.3302512,80.729019 Z M 22.7,66.830885 8.42,66.38 V 63.44 60.5 l 9.398831,-0.237032 9.398833,-0.237033 -2.040627,-4.382967 C 22.862483,50.671641 22.393095,42.121104 24.11859,36.361915 25.446881,31.928474 31.579202,25.245224 36.889618,22.443535 40.759953,20.40161 42.043516,20.18 50,20.18 c 7.999427,0 9.227675,0.214905 13.201923,2.309923 5.449812,2.872859 10.031625,7.381998 12.076689,11.885138 2.404826,5.295318 2.184096,15.598116 -0.455649,21.267907 l -2.040627,4.382967 9.398833,0.237033 L 91.58,60.5 v 2.94 2.94 l -14.7,0.42 c -8.085,0.231 -15.3615,0.1232 -16.17,-0.239555 -0.892469,-0.400429 -1.47,-1.582703 -1.47,-3.009264 0,-1.794201 0.74471,-2.829808 3.15,-4.380446 C 69.426964,54.63416 71.638019,43.064048 66.896714,35.587787 63.575663,30.351031 57.512322,27.32 50.357655,27.32 c -6.013709,0 -9.993865,1.444144 -14.229294,5.1629 -4.16866,3.660132 -5.451411,6.54823 -5.429913,12.225386 0.02201,5.811141 2.138894,10.978752 5.546022,13.538595 4.220546,3.170979 4.51553,3.537898 4.51553,5.616683 0,1.683837 -2.523598,4.266701 -3.514778,3.597321 C 37.099351,67.362372 30.554,67.078872 22.7,66.830885 Z" />
  </svg>
);
export const PiscesIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m 22.243305,90.251434 c -0.766494,-1.432206 -0.561852,-2.313646 1.131085,-4.871847 5.43384,-8.211085 8.507208,-16.585542 9.688824,-26.400554 L 33.739681,53.36 h -6.120287 c -5.260583,0 -6.246581,-0.235986 -7.019394,-1.68 -0.638812,-1.193631 -0.638812,-2.166369 0,-3.36 0.772813,-1.444014 1.758811,-1.68 7.019394,-1.68 h 6.120287 L 33.058407,40.981042 C 31.984066,32.0571 28.212304,21.622406 23.794346,15.351737 c -0.923035,-1.310119 -1.511262,-3.30791 -1.360308,-4.62 C 22.666949,8.7072814 23.060315,8.42 25.599431,8.42 c 2.436887,0 3.268693,0.5360189 5.214129,3.36 4.563026,6.623657 8.869835,19.326087 9.825782,28.98 l 0.540658,5.46 8.066688,0.23893 8.066687,0.238932 0.534001,-5.698932 C 58.818509,30.634842 63.326328,17.840898 68.676694,10.263514 69.997593,8.3928079 70.884765,7.9599011 72.9803,8.1635137 c 3.832835,0.3724172 3.897319,3.3421253 0.207889,9.5740693 -3.652338,6.169294 -7.016506,16.372948 -7.746104,23.494238 L 64.888,46.64 h 5.966446 c 5.106743,0 6.095997,0.24207 6.865554,1.68 0.638812,1.193631 0.638812,2.166369 0,3.36 -0.769557,1.43793 -1.758811,1.68 -6.865554,1.68 H 64.888 l 0.564048,5.505424 c 0.789736,7.708279 4.048998,17.448085 8.069276,24.113795 2.811684,4.661835 3.25716,5.96091 2.517828,7.342366 C 74.634168,92.946823 70.656373,92.536432 68.527423,89.5466 63.30881,82.217733 58.812595,69.360654 57.845426,59.00107 L 57.313375,53.302138 49.246688,53.54107 41.18,53.78 40.956059,57.14 C 40.302565,66.944959 35.671145,80.965621 30.698189,88.193564 28.602035,91.240219 27.590243,92 25.6292,92 24.006787,92 22.86298,91.409308 22.243305,90.251434 Z" />
  </svg>
);
export const SaggitariusIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 3.9393548,85.957376 C 3.1587097,85.176731 2.52,83.862703 2.52,83.037315 c 0,-0.825389 4.1577288,-5.672634 9.239398,-10.771656 l 9.239397,-9.270949 -6.981333,-7.022521 c -5.2391681,-5.270077 -6.981333,-7.629443 -6.981333,-9.45463 0,-2.153115 2.0557818,-4.302118 4.115498,-4.302118 0.341744,0 4.040967,3.337802 8.220495,7.417339 l 7.59914,7.417336 23.22379,-23.223788 23.22379,-23.22379 H 57.047758 c -13.591049,0 -16.565795,-0.234612 -17.517699,-1.3815873 C 38.659716,8.1722519 38.624892,7.3094428 39.385529,5.6400281 L 40.387613,3.4406921 61.873161,3.1829052 C 73.690213,3.0411223 84.07,3.2442575 84.939355,3.6343165 86.383497,4.2822688 86.52,6.2880782 86.52,26.860602 c 0,21.592676 -0.07416,22.556778 -1.806452,23.483871 -1.283474,0.686895 -2.329429,0.686895 -3.612903,0 -1.704937,-0.912455 -1.806451,-1.891195 -1.806451,-17.416684 v -16.4499 l -23.246975,23.246975 -23.246975,23.246975 7.560188,7.599667 c 6.592872,6.627299 7.485334,7.897909 6.975154,9.930625 -0.376501,1.500101 -1.415891,2.539492 -2.915992,2.915993 C 42.38698,83.928277 41.116829,83.0364 34.495956,76.44992 L 26.903277,68.896685 17.6317,78.136707 c -5.099367,5.082013 -9.9468946,9.240024 -10.7722834,9.240024 -0.8253888,0 -2.1394166,-0.63871 -2.9200618,-1.419355 z" />
  </svg>
);
export const ScorpioIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m 78.056446,89.866152 c -0.356709,-1.421242 -0.06852,-2.649923 0.862967,-3.679204 1.328101,-1.467535 1.253506,-1.572564 -1.481272,-2.085611 C 73.328299,83.330326 68.002424,79.175629 65.772816,75.001259 63.957131,71.601853 63.838672,70.289655 63.44,49.16 L 63.02,26.9 60.779231,23.088555 c -1.232423,-2.096293 -2.991866,-4.73901 -3.909874,-5.872702 -1.6457,-2.032354 -1.693774,-2.038933 -3.428309,-0.4692 -0.967562,0.875631 -2.893618,3.862222 -4.280126,6.636868 L 46.64,28.428334 v 22.936279 c 0,22.076576 -0.06297,22.969979 -1.68,23.835387 -1.193631,0.638812 -2.166369,0.638812 -3.36,0 -1.616945,-0.865363 -1.68,-1.758811 -1.68,-23.804625 0,-22.723174 -0.01662,-22.938592 -2.088022,-27.060446 -1.148412,-2.285211 -3.000965,-5.286903 -4.116785,-6.670427 -2.006979,-2.488486 -2.047687,-2.498372 -3.791056,-0.920645 -0.969261,0.87717 -2.896707,3.865018 -4.283215,6.639664 L 23.12,28.428334 V 51.364613 C 23.12,73.441189 23.05703,74.334592 21.44,75.2 20.283309,75.819042 19.2597,75.831357 18.153868,75.23953 16.636962,74.42771 16.531497,72.967794 16.255416,48.959978 15.933673,20.981375 15.859503,20.560516 10.366279,15.54323 8.4851252,13.825061 7.9354821,12.662101 8.1435616,10.840302 8.3736422,8.8258763 8.8533275,8.3776848 11.003997,8.1676681 c 2.144476,-0.2094117 3.183025,0.3975362 6.105748,3.5683149 l 3.521749,3.820648 3.620262,-3.778316 C 27.456131,8.4340446 28.29193,8 31.527305,8 c 3.2669,0 4.040845,0.4140273 7.28399,3.896623 1.995788,2.143142 3.628705,4.29107 3.628705,4.773172 0,0.482103 1.998987,-1.271377 4.442193,-3.896622 C 50.974534,8.3759185 51.613254,8 54.992255,8 c 3.195125,0 4.085753,0.4392863 6.910086,3.408276 1.783218,1.874553 4.323984,5.560053 5.646145,8.19 L 69.952417,24.38 70.324728,45.8 c 0.320485,18.438254 0.584039,21.862539 1.893297,24.599069 C 74.474238,75.114868 78.56,77.685703 78.56,74.389555 78.56,72.960185 80.743123,71 82.33506,71 c 0.289028,0 2.581879,1.944832 5.095223,4.321848 5.90252,5.582359 5.980035,7.372194 0.550864,12.719729 C 84.880324,91.095774 83.348923,92 81.277151,92 79.102191,92 78.49025,91.594564 78.056446,89.866152 Z" />
  </svg>
);
export const TaurusIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 41.6,91.261454 C 34.368989,88.892206 27.468466,82.978734 23.837846,76.04 22.126296,72.768937 21.86,71.072482 21.86,63.44 c 0,-8.20415 0.173755,-9.133693 2.488463,-13.312611 1.368655,-2.470937 4.277202,-6.100842 6.463438,-8.066456 l 3.974975,-3.573844 -2.529963,-1.870483 c -1.39148,-1.028765 -4.89774,-5.52586 -7.791689,-9.993544 -2.893949,-4.467684 -5.863482,-8.617753 -6.598964,-9.222376 -0.73548,-0.604623 -3.161768,-1.549623 -5.391749,-2.1 C 8.591391,14.342301 8.42,14.175721 8.42,11.36 c 0,-2.9057543 0.045864,-2.9429572 3.937455,-3.1938786 7.224783,-0.4658385 11.824281,3.0222366 18.416681,13.9664756 2.3026,3.822615 5.21568,7.395609 7.15555,8.776531 5.945139,4.232125 17.149237,4.48043 23.5541,0.522007 1.864903,-1.152574 4.758667,-4.597293 7.623079,-9.074472 2.539396,-3.969164 5.421694,-8.103949 6.405109,-9.18841 C 78.529878,9.8402577 83.273027,7.8843843 87.642545,8.1661214 91.534136,8.4170428 91.58,8.4542457 91.58,11.36 c 0,2.815721 -0.171391,2.982301 -4.054511,3.940686 -2.229982,0.550377 -4.642088,1.488331 -5.360238,2.084343 -0.718149,0.596011 -3.66127,4.713543 -6.540268,9.150071 -2.878999,4.436528 -6.395574,8.89314 -7.814611,9.903585 l -2.580067,1.83717 4.228682,3.955437 c 2.325775,2.175491 5.230457,5.852923 6.454848,8.172073 C 77.912988,54.190012 78.14,55.519413 78.14,63.44 78.14,73.569039 76.855135,77.027556 70.702154,83.460716 65.069531,89.349824 60.179389,91.424353 51.26,91.708598 47.102,91.841106 42.755,91.639892 41.6,91.261454 Z M 57.914213,83.261623 C 61.991043,81.558215 67.27298,76.48858 69.270918,72.36139 71.51127,67.733441 71.587772,59.351586 69.432844,54.62 67.636964,50.676777 61.982918,45.318391 57.753195,43.5511 53.8637,41.925965 45.965084,41.998519 41.888782,43.696824 37.673159,45.453176 32.558878,50.401082 30.598314,54.62 c -1.893926,4.07552 -2.11008,12.689131 -0.419937,16.734213 1.687206,4.038051 6.709987,9.29695 10.824964,11.333838 4.211663,2.084747 12.612202,2.369671 16.910872,0.573572 z" />
  </svg>
);
export const VirgoIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 71.4271,89.817707 C 70.489932,88.62629 69.493429,86.927685 69.212651,86.04303 68.59512,84.097363 68.206065,84.073722 64.219072,85.739594 c -1.717853,0.717765 -4.311857,1.189599 -5.764454,1.048521 -2.396524,-0.232754 -2.641085,-0.521736 -2.641085,-3.120802 0,-2.74269 0.231483,-2.956767 5.45231,-5.042319 l 5.45231,-2.178021 0.223063,-23.861054 0.223063,-23.861054 -2.091863,-4.229898 c -1.150524,-2.326444 -3.00648,-5.360278 -4.124345,-6.741854 -2.01064,-2.484957 -2.051398,-2.494838 -3.792294,-0.919348 -0.967896,0.875934 -2.892628,3.859575 -4.277183,6.630313 l -2.517372,5.037708 v 22.903976 c 0,22.045484 -0.06288,22.937629 -1.677634,23.801818 -1.191949,0.637912 -2.163318,0.637912 -3.355267,0 -1.614669,-0.864144 -1.677634,-1.756334 -1.677634,-23.771099 0,-22.691172 -0.0166,-22.906286 -2.085081,-27.022335 -1.146796,-2.281993 -3.036222,-5.28148 -4.198726,-6.665529 l -2.113645,-2.516451 -2.486089,2.873365 c -5.382774,6.221286 -5.449796,6.602767 -5.719878,32.556826 -0.234314,22.516768 -0.327537,23.730129 -1.887339,24.564909 -1.128536,0.603975 -2.144147,0.6088 -3.252824,0.01545 C 20.383551,74.427336 20.278146,73.010877 19.985489,49.419583 19.767801,31.871646 19.362869,23.726922 18.621941,21.993479 18.042292,20.637358 16.076013,17.909151 14.25243,15.930797 10.566249,11.931763 10.590739,11.993868 11.805155,9.7247111 13.373707,6.7938442 17.021788,7.655353 20.911521,11.875216 l 3.477825,3.772994 3.615164,-3.772994 c 3.199862,-3.3395605 4.034484,-3.7729938 7.265301,-3.7729938 3.2623,0 4.035155,0.4134442 7.273732,3.8911348 1.992977,2.140124 3.623595,4.285027 3.623595,4.76645 0,0.481424 1.996171,-1.269587 4.435936,-3.891134 4.086578,-4.3910617 4.724399,-4.7664508 8.098641,-4.7664508 3.190625,0 4.079998,0.4386676 6.900353,3.4034768 3.810917,4.006106 8.24603,12.37958 8.24603,15.568471 v 2.243449 l 2.105649,-2.272032 c 2.680145,-2.891925 6.654889,-2.735916 8.902594,0.349426 3.811667,5.232132 5.337443,21.662832 2.871864,30.926374 -1.757587,6.603513 -5.074115,12.884764 -9.263508,17.544378 l -3.695629,4.110428 1.580508,2.858299 c 0.869279,1.572065 2.038693,3.696424 2.598698,4.720798 2.338499,4.277633 -4.352757,6.290409 -7.521174,2.262417 z m 7.038781,-28.236131 c 2.596275,-5.686274 3.536477,-12.186763 2.802403,-19.375606 -0.668817,-6.549785 -1.197041,-7.507748 -2.874694,-5.213419 -3.316796,4.535987 -4.545492,10.39006 -4.545492,21.656798 0,12.302747 0.263063,12.469789 4.617783,2.932227 z" />
  </svg>
);