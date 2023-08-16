//*||||||||||||||*\\
//* Chakras Logos \\
//*||||||||||||||*\\

import { ReactElement } from "react";

interface IconProps {
  className?: string;
}

export const CrownChakraLogo = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.8848 10.0215C49.244 10.3514 44.3161 12.9174 40.0625 16.9043C37.7948 19.0298 35.8508 21.4905 35.0293 23.9941C34.9745 24.1612 34.928 24.3289 34.8828 24.4961C36.1436 25.0276 37.3165 25.8432 38.3359 26.9824C41.9157 25.172 45.9583 24.1445 50.2402 24.1445C54.6748 24.1445 58.8531 25.245 62.5254 27.1777C63.2237 26.3579 63.9989 25.698 64.8281 25.1816C64.7621 24.8481 64.677 24.5147 64.5723 24.1816C63.7815 21.6678 61.867 19.1813 59.625 17.0273C55.4192 12.9867 50.5208 10.359 49.8848 10.0215ZM61.5996 11.7129C61.24 11.7811 59.6305 12.1028 57.4648 12.7363C58.4553 13.4967 59.4633 14.3365 60.4395 15.2402C61.7942 15.0272 63.1453 14.8958 64.4356 14.8203C63.0036 13.1155 61.8591 11.9675 61.5996 11.7129ZM37.252 12.1562C37.009 12.4102 35.9656 13.52 34.6523 15.1719C35.9904 15.2189 37.3969 15.3264 38.8125 15.5195C39.7373 14.6544 40.7011 13.8487 41.6562 13.1094C39.3481 12.5007 37.6263 12.215 37.252 12.1562ZM67.3008 16.6016C65.7189 16.6062 63.9299 16.6852 62.1094 16.8984C63.979 18.8949 65.5734 21.1474 66.3516 23.6211C66.4266 23.8597 66.4919 24.1008 66.5488 24.3438C67.3719 24.0391 68.2265 23.8435 69.0977 23.7598C69.4873 23.7223 69.8793 23.7043 70.2734 23.7031C72.0791 23.6977 73.9227 24.0594 75.7226 24.625C74.4089 20.5166 72.7264 17.3535 72.457 16.8535C72.1234 16.8155 71.0666 16.6825 69.0039 16.623C68.4721 16.6077 67.9014 16.5998 67.3008 16.6016ZM33.1621 17.0098C32.1475 17.0037 31.1953 17.0279 30.3438 17.0684C28.2838 17.1662 27.2316 17.319 26.8984 17.3633C26.6396 17.8659 25.0269 21.0407 23.791 25.1543C26.0618 24.2924 28.4428 23.6962 30.7617 23.7031C31.1559 23.7043 31.5479 23.7223 31.9375 23.7598C32.3295 23.7974 32.7173 23.8602 33.1016 23.9414C33.149 23.7648 33.1987 23.5882 33.2559 23.4141C34.0013 21.1421 35.4367 19.0628 37.1406 17.2051C35.7687 17.0735 34.4171 17.0173 33.1621 17.0098ZM76.9023 22.3398C77.2539 23.3087 77.5938 24.3402 77.9004 25.4121C78.1093 25.4968 78.3189 25.5795 78.5254 25.668C79.2172 25.9645 79.8949 26.2829 80.5547 26.6133C80.258 24.856 79.96 23.6245 79.8828 23.3184C79.6007 23.212 78.4986 22.808 76.9023 22.3398ZM22.5586 22.9238C21.1969 23.3206 20.2709 23.6504 20.0137 23.7441C19.9295 24.063 19.5951 25.3726 19.2656 27.2461C20.0143 26.8412 20.7952 26.4488 21.5977 26.0781C21.8888 24.9774 22.2184 23.9185 22.5586 22.9238ZM30.7578 25.5703C28.3809 25.5701 25.7457 26.3115 23.2461 27.3828C17.8871 29.6796 13.5565 33.1652 12.998 33.6191C13.052 34.3369 13.496 39.8778 15.5098 45.3516C16.5832 48.2694 18.0907 51.019 20.0762 52.752C21.2434 53.7707 22.5548 54.4598 24.1094 54.6836C23.9018 53.3499 23.793 51.9833 23.793 50.5918C23.793 40.9538 28.9636 32.5152 36.6777 27.8926C35.2814 26.4502 33.6222 25.7961 31.7598 25.6172C31.4319 25.5857 31.0974 25.5703 30.7578 25.5703ZM70.2793 25.5703C69.9397 25.5703 69.6052 25.5857 69.2773 25.6172C67.3255 25.8047 65.5988 26.5211 64.1621 28.1133C71.6758 32.7806 76.6855 41.1047 76.6855 50.5918C76.6855 52.0031 76.5728 53.3884 76.3594 54.7402C78.1663 54.619 79.6528 53.8921 80.959 52.752C82.9443 51.019 84.454 48.2694 85.5273 45.3516C87.5409 39.8778 87.9832 34.3369 88.0371 33.6191C87.4784 33.165 83.1498 29.6796 77.791 27.3828C75.2914 26.3115 72.6562 25.5701 70.2793 25.5703ZM50.2402 26.0117C36.6539 26.0117 25.6582 37.0054 25.6582 50.5918C25.6582 64.1782 36.6539 75.1719 50.2402 75.1719C63.8277 75.1719 74.8203 64.1782 74.8203 50.5918C74.8203 37.0054 63.8277 26.0117 50.2402 26.0117ZM50.2402 28.5039C62.4273 28.5039 72.3262 38.4047 72.3262 50.5918C72.3262 62.7789 62.4273 72.6777 50.2402 72.6777C38.0541 72.6777 28.1523 62.7789 28.1523 50.5918C28.1523 38.4047 38.0531 28.5039 50.2402 28.5039ZM50.2402 30.3691C39.0614 30.3691 30.0176 39.4129 30.0176 50.5918C30.0176 61.7706 39.0624 70.8125 50.2402 70.8125C61.4191 70.8125 70.4609 61.7707 70.4609 50.5918C70.4609 39.4129 61.4191 30.3691 50.2402 30.3691ZM13.3633 44.8672C11.4251 47.6029 10.228 49.8989 10.0098 50.3223C10.2498 50.7753 11.6701 53.4142 13.9355 56.4199C14.0503 55.9756 14.1719 55.5299 14.3047 55.0859C14.7528 53.588 15.3085 52.1009 16.0059 50.7148C15.098 49.2486 14.3605 47.6344 13.7578 45.9961C13.6197 45.6206 13.488 45.2441 13.3633 44.8672ZM87.3867 45.6816C87.3493 45.7864 87.3158 45.8916 87.2773 45.9961C86.6734 47.638 85.9341 49.2558 85.0234 50.7246C85.7217 52.1078 86.2828 53.5893 86.7305 55.0859C86.7386 55.1133 86.7458 55.1406 86.7539 55.168C88.6033 52.6821 89.7707 50.6312 89.9902 50.2383C89.807 49.8626 88.8828 48.0116 87.3867 45.6816ZM19.9102 47.4648C19.9067 47.4759 19.902 47.4854 19.8984 47.4961C19.8993 47.4928 19.8995 47.4896 19.9004 47.4863C19.9036 47.4793 19.9125 47.4575 19.9102 47.4648ZM17.2441 52.4785C16.798 53.4798 16.415 54.5387 16.0918 55.6191C14.4211 61.204 14.3219 66.7593 14.3125 67.4805C14.8492 67.8641 18.7294 70.6071 23.6172 72.5723C23.6486 72.5801 23.6795 72.5901 23.7109 72.5977C23.712 72.603 23.7136 72.608 23.7148 72.6133C24.1144 72.7726 24.5182 72.9272 24.9297 73.0742C27.8575 74.12 30.9365 74.7243 33.5391 74.3105C34.6378 74.1359 35.6524 73.7955 36.5703 73.2305C30.5549 69.588 26.1116 63.6123 24.4805 56.5664C22.2839 56.388 20.3865 55.4996 18.8496 54.1582C18.2697 53.652 17.7364 53.0871 17.2441 52.4785ZM83.7851 52.4844C83.2943 53.0905 82.7634 53.6538 82.1855 54.1582C80.5189 55.613 78.4281 56.5299 75.9922 56.5918C74.3829 63.5137 70.0569 69.3961 64.1953 73.0488C65.183 73.7227 66.2897 74.1185 67.4981 74.3105C70.1007 74.7243 73.1775 74.12 76.1055 73.0742C81.5981 71.1125 86.1368 67.8992 86.7226 67.4805C86.7132 66.7593 86.6141 61.204 84.9434 55.6191C84.6201 54.5387 84.2313 53.4852 83.7851 52.4844ZM47.4941 58.6992C47.5366 58.7096 47.5781 58.7271 47.6191 58.7422C47.6191 58.7532 47.6192 58.7643 47.6191 58.7754C47.5652 58.7494 47.5268 58.7229 47.4941 58.6992ZM19.3594 72.6719C19.6059 74.5969 19.8864 75.9612 19.957 76.2871C20.2475 76.408 21.4187 76.8827 23.1172 77.4336C22.7593 76.3484 22.4167 75.181 22.1191 73.9688C21.1532 73.5547 20.2306 73.1157 19.3594 72.6719ZM81.0801 72.9727C80.1984 73.4068 79.264 73.8296 78.2988 74.2246C78.0014 75.2334 77.6751 76.2086 77.334 77.1309C79.0464 76.5995 80.2211 76.1353 80.5156 76.0176C80.5831 75.7257 80.8318 74.5951 81.0801 72.9727ZM62.4824 74.0273C58.8204 75.946 54.6577 77.0371 50.2402 77.0371C45.9651 77.0371 41.9291 76.0138 38.3535 74.209C37.7065 74.7151 37.0144 75.1228 36.2891 75.4375C36.3615 75.7334 36.4471 76.0294 36.5508 76.3242C37.425 78.8099 39.4204 81.2277 41.7324 83.3047C46.0699 87.2011 51.053 89.6649 51.6992 89.9805C52.3271 89.6301 57.1692 86.8967 61.2891 82.7676C63.3805 80.6715 65.1662 78.2815 65.9688 75.873C64.7172 75.5117 63.5366 74.9029 62.4824 74.0273ZM24.2656 74.8164C25.4465 79.0575 27.0647 82.3638 27.3203 82.8789C28.0123 82.9813 33.2172 83.7218 38.8086 83.0703C37.0645 81.2482 35.5849 79.1986 34.791 76.9414C34.6844 76.6382 34.5925 76.331 34.5156 76.0195C34.2892 76.0708 34.0618 76.1158 33.832 76.1523C30.7389 76.644 27.3995 75.9362 24.3027 74.8301C24.2903 74.8256 24.2781 74.8209 24.2656 74.8164ZM76.0859 75.0488C73.3782 75.9553 70.516 76.5256 67.8125 76.2324C67.0529 78.6809 65.5101 80.9319 63.6973 82.9355C68.2251 83.3819 72.062 83.0228 72.6484 82.9648C72.93 82.4604 74.7032 79.2305 76.0859 75.0488ZM62.0586 84.6191C61.0821 85.5565 60.072 86.429 59.082 87.2168C60.8836 87.7203 62.1862 87.9817 62.5059 88.043C62.7671 87.7876 63.9223 86.642 65.3672 84.9277C64.3039 84.8663 63.1901 84.7692 62.0586 84.6191ZM40.5137 84.7168C40.1948 84.7691 39.8759 84.8194 39.5566 84.8613C38.1782 85.0425 36.8056 85.1349 35.4902 85.1738C36.7792 86.7981 37.801 87.8907 38.041 88.1426C38.4594 88.0777 40.5535 87.7365 43.2812 86.9727C42.3523 86.2795 41.4154 85.5251 40.5137 84.7168Z"
      fill="#A9188D"
    />
  </svg>
);
export const HeartChakraLogo = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.3672 10.0215C48.7282 10.3505 43.7992 12.9166 39.5449 16.9043C37.2773 19.0298 35.3331 21.4924 34.5117 23.9961C34.4564 24.1647 34.4053 24.3332 34.3594 24.502C35.367 24.9258 36.3233 25.5215 37.1855 26.3281C40.9968 24.2594 45.3626 23.084 50 23.084C54.6384 23.084 59.0046 24.2606 62.8164 26.3301C63.2892 25.8877 63.7913 25.5123 64.3125 25.1875C64.2457 24.8523 64.1601 24.5167 64.0547 24.1816C63.2639 21.6678 61.3494 19.1832 59.1074 17.0293C54.9016 12.9887 50.0032 10.359 49.3672 10.0215ZM67.2109 16.6016C65.5164 16.6096 63.5919 16.7041 61.6465 16.957C63.4924 18.9391 65.0634 21.1716 65.834 23.6211C65.9092 23.8603 65.9716 24.1022 66.0293 24.3457C66.853 24.0401 67.7082 23.8435 68.5801 23.7598C68.9697 23.7223 69.3617 23.7043 69.7559 23.7031C71.7543 23.6972 73.7985 24.1394 75.7793 24.8125C74.4576 20.6128 72.7301 17.3603 72.457 16.8535C72.1234 16.8155 71.0666 16.6825 69.0039 16.623C68.4458 16.607 67.8443 16.5986 67.2109 16.6016ZM32.957 17.0078C32.0197 17.0061 31.1394 17.0307 30.3457 17.0684C28.2856 17.1662 27.2315 17.3191 26.8984 17.3633C26.6442 17.857 25.0838 20.9296 23.8574 24.9375C25.9506 24.1935 28.1232 23.6968 30.2441 23.7031C30.6383 23.7043 31.0303 23.7223 31.4199 23.7598C31.8114 23.7974 32.1982 23.8644 32.582 23.9453C32.6301 23.7667 32.6825 23.5902 32.7402 23.4141C33.4917 21.1235 34.9442 19.0308 36.666 17.1621C35.3835 17.0551 34.1253 17.0099 32.957 17.0078ZM48.709 24.9824C40.6857 25.3884 33.6676 29.5626 29.377 35.7695H42.5781L48.7129 24.9824H48.709ZM51.459 24.9941L57.5625 35.7695H70.623C66.3625 29.6062 59.4119 25.4497 51.459 24.9941ZM30.2383 25.5703C27.8618 25.5701 25.2281 26.3115 22.7285 27.3828C17.3698 29.6796 13.0411 33.165 12.4824 33.6191C12.5364 34.3372 12.9786 39.878 14.9922 45.3516C16.0656 48.2694 17.5733 51.019 19.5586 52.752C20.7005 53.7487 21.98 54.4295 23.4902 54.668C23.225 53.1525 23.0781 51.5967 23.0781 50.0059C23.0781 40.4749 28.0477 32.1011 35.5293 27.3164C34.2715 26.2762 32.8311 25.77 31.2402 25.6172C30.9124 25.5857 30.5778 25.5703 30.2383 25.5703ZM69.7617 25.5703C69.4222 25.5704 69.0876 25.5857 68.7598 25.6172C67.169 25.77 65.7282 26.2757 64.4707 27.3164C71.9523 32.1011 76.9219 40.475 76.9219 50.0059C76.9219 51.5967 76.775 53.1525 76.5098 54.668C78.0203 54.4295 79.2991 53.749 80.4414 52.752C82.4267 51.0191 83.9345 48.2694 85.0078 45.3516C87.0213 39.878 87.4637 34.3372 87.5176 33.6191C86.9589 33.165 82.6302 29.6796 77.2715 27.3828C74.7719 26.3115 72.1382 25.5701 69.7617 25.5703ZM50.0801 26.3496L44.7227 35.7695H55.416L50.0801 26.3496ZM29.6582 37.6348L35.5762 48.0801L41.5176 37.6348H29.6582ZM43.6621 37.6348L36.6465 49.9707L43.6074 62.2578H56.4199L63.4355 49.9219L56.4746 37.6348H43.6621ZM58.6191 37.6348L64.5098 48.0312L70.4219 37.6348H58.6191ZM27.8652 38.2539C26.0026 41.7583 24.9434 45.7566 24.9434 50.0059C24.9434 52.0217 25.1894 53.9784 25.6387 55.8555C26.0598 56.194 26.328 56.327 26.6562 56.4375C26.3721 56.4864 26.0928 56.52 25.8164 56.5469C26.3034 58.3512 26.9775 60.0786 27.832 61.6973L34.502 49.9707L27.8652 38.2539ZM72.1738 38.3281L65.5801 49.9219L72.207 61.6191C74.0241 58.1478 75.0566 54.1992 75.0566 50.0059C75.0566 45.7865 74.012 41.8148 72.1738 38.3281ZM87.0391 45.1543C86.9436 45.4353 86.8628 45.7161 86.7598 45.9961C86.156 47.6374 85.416 49.2543 84.5059 50.7227C85.2036 52.1067 85.7651 53.5892 86.2129 55.0859C86.2712 55.2808 86.3222 55.4767 86.377 55.6719C88.4459 52.9634 89.7561 50.6575 89.9902 50.2383C89.7935 49.8349 88.7364 47.7269 87.0391 45.1543ZM13.0215 45.3691C11.2916 47.876 10.2142 49.9256 10.0098 50.3223C10.2363 50.7497 11.5101 53.1229 13.5547 55.9141C13.63 55.6381 13.7047 55.3614 13.7871 55.0859C14.235 53.5886 14.7943 52.1054 15.4922 50.7207C14.5827 49.2529 13.8437 47.6365 13.2402 45.9961C13.1635 45.7876 13.094 45.5783 13.0215 45.3691ZM64.5059 51.8125L58.5645 62.2578H70.4238L64.5059 51.8125ZM35.5723 51.8594L29.6602 62.2578H41.4629L35.5723 51.8594ZM83.2715 52.4785C82.7795 53.0867 82.2475 53.6523 81.668 54.1582C80.148 55.4849 78.2785 56.3699 76.1133 56.5625C74.353 63.5838 69.8213 69.4973 63.7637 73.1172C64.7288 73.7527 65.8064 74.1242 66.9785 74.3105C69.5812 74.7243 72.6599 74.12 75.5879 73.0742C81.0815 71.1121 85.6208 67.8981 86.2051 67.4805C86.1957 66.7593 86.0965 61.204 84.4258 55.6191C84.1025 54.5384 83.7182 53.4796 83.2715 52.4785ZM16.7285 52.4805C16.2821 53.4809 15.8973 54.5392 15.5742 55.6191C13.9036 61.204 13.8043 66.7593 13.7949 67.4805C14.3789 67.898 18.9185 71.112 24.4121 73.0742C27.34 74.12 30.417 74.7243 33.0195 74.3105C34.1828 74.1256 35.2509 73.7518 36.2109 73.125C30.1589 69.5041 25.6449 63.5758 23.8867 56.5586C21.7221 56.3666 19.8515 55.4845 18.332 54.1582C17.7528 53.6526 17.2203 53.0883 16.7285 52.4805ZM29.291 64.123C31.776 67.764 35.2001 70.7075 39.2109 72.623C39.295 72.5961 39.3691 72.5742 39.4805 72.5391C39.4977 72.5305 39.5127 72.5223 39.5293 72.5137C39.4793 72.5775 39.4279 72.6372 39.377 72.6992C42.2323 74.0373 45.3769 74.8618 48.6992 75.0312L42.5195 64.123H29.291ZM44.666 64.123L50.002 73.543L55.3594 64.123H44.666ZM57.5039 64.123L51.3008 75.0312C59.3726 74.6196 66.428 70.3955 70.709 64.123H57.5039ZM67.3301 72.666C67.3745 72.6687 67.4191 72.6725 67.4629 72.6738C67.4821 72.77 67.501 72.8664 67.5078 72.9648C67.374 72.9036 67.3107 72.8066 67.3301 72.666ZM66.9297 73.4648C66.922 73.4631 66.9453 73.4656 66.9531 73.4668C66.9713 73.4696 66.9898 73.4731 67.0078 73.4766C67.0045 73.4765 67.0013 73.4767 66.998 73.4766C66.9755 73.473 66.9519 73.4697 66.9297 73.4648ZM62.0098 74.0781C58.3908 75.89 54.3193 76.9297 50 76.9297C45.6813 76.9297 41.6014 75.9049 37.9824 74.0938C37.2941 74.6547 36.5516 75.1004 35.7715 75.4395C35.8437 75.7344 35.9299 76.0285 36.0332 76.3223C36.9074 78.8079 38.9027 81.2277 41.2148 83.3047C45.5524 87.2011 50.5354 89.6649 51.1816 89.9805C51.8094 89.6302 56.6517 86.8967 60.7715 82.7676C62.8635 80.6708 64.6509 78.2804 65.4531 75.8711C64.2197 75.5182 63.0523 74.9305 62.0098 74.0781ZM76.1582 74.8496C73.2799 75.8722 70.195 76.5465 67.2949 76.2324C66.5417 78.6604 65.0178 80.8937 63.2246 82.8848C67.9565 83.4058 72.0415 83.0248 72.6484 82.9648C72.9345 82.4523 74.7653 79.1288 76.1582 74.8496ZM24.3281 75.0137C25.5026 79.1539 27.068 82.3686 27.3203 82.877C27.9923 82.9764 32.9266 83.6674 38.332 83.1113C36.5705 81.2788 35.0733 79.2159 34.2734 76.9414C34.1662 76.6365 34.0737 76.3266 33.9961 76.0137C33.7697 76.065 33.5422 76.1158 33.3125 76.1523C30.3986 76.6156 27.2702 76.0097 24.3281 75.0137Z"
      fill="#C9E60C"
    />
  </svg>
);
export const RootChakraLogo = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.377 19.0156C32.9761 19.0221 32.5736 19.0363 32.1719 19.0586C26.1416 19.3929 20.6935 21.247 19.9902 21.4902C19.7879 22.2084 18.2551 27.7529 18.2734 33.7891C18.2832 37.0071 18.7748 40.2182 20.0918 42.6074C20.7069 43.7234 21.5011 44.6514 22.5137 45.3769C24.398 34.1119 33.0443 25.1275 44.1348 22.748C43.33 21.7025 42.2959 20.9358 41.084 20.3574C38.9292 19.3291 36.183 18.9702 33.377 19.0156ZM66.623 19.0156C63.817 18.9702 61.0727 19.3291 58.918 20.3574C57.7082 20.9347 56.6799 21.7069 55.877 22.7519C66.9697 25.137 75.6165 34.1283 77.4922 45.4004C78.5087 44.673 79.2911 43.7271 79.9082 42.6074C81.225 40.2182 81.7188 37.0071 81.7285 33.7891C81.7467 27.7529 80.214 22.2084 80.0117 21.4902C79.3085 21.247 73.8584 19.3929 67.8281 19.0586C67.4264 19.0363 67.0239 19.0221 66.623 19.0156ZM50 24.0547C42.9919 24.0547 36.6406 26.83 31.9746 31.3379H68.0254C63.359 26.83 57.0081 24.0547 50 24.0547ZM53.1855 29.1641C53.2011 29.1639 53.2168 29.1642 53.2324 29.1641C53.2576 29.1665 53.2844 29.1599 53.3066 29.1719C53.3229 29.1808 53.2702 29.1791 53.252 29.1758C53.23 29.1717 53.2078 29.1674 53.1855 29.1641ZM30.7754 33.2715V66.7285H69.2246V33.2715H30.7754ZM28.8457 34.9785C25.8329 39.2166 24.0566 44.3963 24.0566 49.998C24.0566 51.0564 24.1209 52.1002 24.2441 53.125C24.2658 53.1489 24.2805 53.1777 24.3027 53.2012C24.371 53.2656 24.4397 53.3149 24.5078 53.373C24.4325 53.4 24.3645 53.4342 24.291 53.4629C24.8615 57.7307 26.4655 61.6689 28.8457 65.0176V34.9785ZM71.1562 34.9785V65.0176C74.1689 60.7794 75.9453 55.5993 75.9453 49.998C75.9453 44.3963 74.1694 39.2166 71.1562 34.9785ZM38.8672 40.1953H50H61.1328C61.3024 40.1954 61.4689 40.24 61.6158 40.3249C61.7626 40.4097 61.8845 40.5317 61.9692 40.6786C62.0539 40.8254 62.0985 40.992 62.0984 41.1616C62.0983 41.3312 62.0536 41.4977 61.9687 41.6445L56.4043 51.2871L50.8359 60.9297C50.7509 61.076 50.6289 61.1974 50.4822 61.2817C50.3355 61.366 50.1692 61.4103 50 61.4102C49.8308 61.4103 49.6645 61.366 49.5178 61.2817C49.3711 61.1974 49.2491 61.076 49.1641 60.9297L43.5977 51.2871L38.0312 41.6445C37.9464 41.4977 37.9017 41.3312 37.9016 41.1616C37.9015 40.992 37.9461 40.8254 38.0308 40.6786C38.1155 40.5317 38.2374 40.4097 38.3842 40.3249C38.5311 40.24 38.6976 40.1954 38.8672 40.1953ZM40.541 42.1289L45.2695 50.3223L50 58.5156L54.7305 50.3223L59.4609 42.1289H50H40.541ZM28.0918 47.4863C28.088 47.4904 28.0861 47.4961 28.082 47.5C28.059 47.5274 28.0385 47.5562 28.0137 47.582C28.0028 47.5933 28.0309 47.555 28.041 47.543C28.0574 47.5234 28.0748 47.5053 28.0918 47.4863ZM26.9258 47.793C26.9308 47.7661 26.931 47.8478 26.9336 47.875C26.9341 47.8804 26.9313 47.8851 26.9316 47.8906C26.9308 47.8583 26.92 47.8242 26.9258 47.793ZM77.5176 54.4492C75.7027 65.7313 67.1078 74.7542 56.0508 77.207C56.9279 78.4216 58.0844 79.2696 59.457 79.8691C60.707 80.4151 62.1426 80.7351 63.666 80.8848C65.1894 81.0344 66.8017 81.014 68.4043 80.8711C74.4184 80.3349 79.8024 78.2976 80.4961 78.0312C80.6737 77.3088 82.0192 71.7113 81.7988 65.6758C81.6814 62.4589 81.0818 59.2661 79.6855 56.9219C79.104 55.9454 78.3974 55.1106 77.5176 54.4492ZM22.4844 54.457C21.6044 55.116 20.8951 55.9469 20.3145 56.9219C18.9182 59.2661 18.3186 62.4589 18.2012 65.6758C17.9808 71.7113 19.3263 77.3088 19.5039 78.0312C20.1976 78.2976 25.5814 80.3349 31.5957 80.8711C33.1984 81.014 34.8105 81.0344 36.334 80.8848C37.8575 80.7351 39.2929 80.4151 40.543 79.8691C41.9167 79.2691 43.0781 78.4255 43.9551 77.209C32.898 74.7587 24.3021 65.7375 22.4844 54.457ZM31.9766 68.6602C36.6424 73.1675 42.9927 75.9434 50 75.9434C57.0073 75.9434 63.3572 73.1675 68.0234 68.6602H31.9766ZM46.5742 72.0742C46.6036 72.0729 46.6335 72.0715 46.6621 72.0781C46.6655 72.0789 46.6685 72.081 46.6719 72.082C46.6392 72.0825 46.5416 72.0755 46.5742 72.0742Z"
      fill="#D60C31"
    />
  </svg>
);
export const SacralChakraLogo = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.5996 10.0117C49.9512 10.3238 44.9551 12.7552 40.5957 16.627C38.2719 18.6909 36.2613 21.0993 35.3731 23.5801C34.8968 24.9104 34.7169 26.2513 34.9609 27.6367C39.2924 24.6595 44.5341 22.9121 50.1816 22.9121C55.7518 22.9121 60.9299 24.6087 65.2266 27.5117C65.3062 26.5264 65.1836 25.5463 64.9023 24.5605C64.1793 22.0264 62.33 19.4887 60.1465 17.2754C56.0505 13.1235 51.2265 10.3662 50.5996 10.0117ZM66.8262 22.8789C66.6508 22.8821 66.4795 22.893 66.3066 22.9024C66.4545 23.2798 66.5849 23.6618 66.6953 24.0488C67.1261 25.5585 67.2179 27.1461 66.8887 28.7383C72.4794 33.1732 76.271 39.7772 76.9805 47.2754C77.9001 47.5672 78.7351 47.9805 79.4844 48.4941C79.6391 48.3282 79.7904 48.1565 79.9356 47.9766C81.5898 45.9255 82.5982 42.9555 83.1484 39.8965C84.1806 34.1586 83.6557 28.6271 83.584 27.9101C82.9575 27.5614 78.0844 24.8788 72.4043 23.5469C70.5279 23.1068 68.6146 22.8464 66.8262 22.8789ZM32.7324 23.1934C31.0446 23.2151 29.2596 23.4868 27.5078 23.916C21.8453 25.3034 17.0049 28.032 16.3789 28.3887C16.3144 29.1058 15.8423 34.6454 16.9316 40.375C17.5124 43.4293 18.5502 46.389 20.2246 48.4238C21.0734 49.4553 22.065 50.2667 23.2813 50.7754C23.2705 50.463 23.2578 50.1509 23.2578 49.8359C23.2578 41.3412 27.2064 33.7644 33.3613 28.8281C32.8324 26.8917 32.9534 24.9802 33.541 23.2031C33.2739 23.1936 33.0052 23.1902 32.7324 23.1934ZM50.1816 24.7793C40.2141 24.7793 31.6157 30.5849 27.5781 39.002C27.582 39.0298 27.5846 39.0578 27.5859 39.0859C27.5805 39.3117 27.5723 39.5112 27.5723 39.6934C27.5723 52.1917 37.6834 62.3047 50.1816 62.3047C62.6799 62.3047 72.793 52.1916 72.793 39.6934C72.793 39.5143 72.7806 39.3147 72.7754 39.0859C72.7803 39.0623 72.7862 39.0388 72.793 39.0156C68.7581 30.5913 60.1545 24.7793 50.1816 24.7793ZM25.9785 43.3418C25.425 45.4133 25.125 47.5888 25.125 49.8359C25.125 63.6856 36.332 74.8945 50.1816 74.8945C64.0313 74.8945 75.2402 63.6856 75.2402 49.8359C75.2402 47.5888 74.9402 45.4132 74.3867 43.3418C72.622 55.1207 62.4481 64.1699 50.1816 64.1699C37.9152 64.1699 27.7432 55.1207 25.9785 43.3418ZM77.0918 49.2637C77.0962 49.4546 77.1055 49.6441 77.1055 49.8359C77.1055 58.3523 73.1369 65.9461 66.9551 70.8808C67.4843 72.794 67.3817 74.7019 66.8106 76.4824C66.799 76.5185 66.7854 76.5539 66.7734 76.5898C67.0569 76.5998 67.3426 76.6058 67.6328 76.5996C69.1114 76.5701 70.6563 76.3641 72.1777 76.0449C77.8847 74.8477 82.8142 72.2853 83.4531 71.9492C83.5415 71.236 84.2014 65.7167 83.3047 59.9551C82.8267 56.8841 81.8866 53.8921 80.2813 51.8027C79.4205 50.6825 78.3881 49.808 77.0918 49.2637ZM78.6113 50.3809C78.6035 50.3754 78.6284 50.3904 78.6367 50.3945C78.6534 50.4063 78.6674 50.4212 78.6836 50.4336C78.6315 50.3936 78.7351 50.4668 78.6113 50.3809ZM20.8828 51.5371C20.8725 51.549 20.8619 51.5602 20.8516 51.5722C19.1295 53.5673 18.0236 56.5051 17.3711 59.5449C16.1471 65.2475 16.4876 70.7955 16.5352 71.5137C17.1519 71.8846 21.928 74.7256 27.5567 76.2461C29.0569 76.6513 30.5845 76.9429 32.0586 77.0566C32.6938 77.1061 33.3161 77.1185 33.9238 77.0957C33.8496 76.8996 33.7789 76.7029 33.7148 76.5039C33.1506 74.7506 33.0424 72.8736 33.5449 70.9883C28.0074 66.6258 24.2201 60.1413 23.4199 52.7637C22.4893 52.4749 21.6444 52.057 20.8828 51.5371ZM65.3535 72.0684C61.0317 75.0245 55.8076 76.7578 50.1816 76.7578C44.6181 76.7578 39.446 75.0643 35.1523 72.168C34.942 73.4388 35.0894 74.6861 35.4902 75.9316C36.2974 78.4398 38.2288 80.9105 40.4844 83.0488C44.7171 87.0616 49.6347 89.6589 50.2695 89.9902C50.909 89.6555 55.821 87.0531 60.0488 83.0371C62.303 80.8959 64.2282 78.4215 65.0332 75.9121C65.4414 74.6395 65.584 73.3666 65.3535 72.0684Z"
      fill="#FF7000"
    />
  </svg>
);
export const SolarChakraLogo = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.3125 10.0117C49.6632 10.3285 44.6834 12.7866 40.3457 16.6797C38.0327 18.7556 36.0355 21.175 35.1602 23.6602C34.9993 24.1168 34.8734 24.5751 34.7871 25.0352C35.4059 25.3326 35.999 25.7067 36.5625 26.1523C40.2952 24.1928 44.5403 23.0781 49.0449 23.0781C54.0235 23.0781 58.6847 24.4384 62.6875 26.7988C63.3624 26.1451 64.0967 25.6214 64.8691 25.2109C64.8192 24.9688 64.762 24.7268 64.6914 24.4844C63.9551 21.9539 62.0953 19.4285 59.9004 17.2266C55.783 13.0961 50.9413 10.363 50.3125 10.0117ZM32.6055 17.502C31.1461 17.5028 29.7792 17.5714 28.6055 17.6621C26.548 17.8211 25.4984 18.0027 25.168 18.0566C24.925 18.565 23.4219 21.7616 22.3105 25.8828C24.8645 24.818 27.5949 24.0408 30.2441 24.0488C30.6383 24.05 31.0303 24.068 31.4199 24.1055C31.9642 24.1578 32.5032 24.2517 33.0312 24.3887C33.1247 23.9314 33.245 23.4804 33.4004 23.0391C34.0825 21.1025 35.2738 19.321 36.6992 17.7031C35.3086 17.561 33.9196 17.5012 32.6055 17.502ZM65.2148 17.8906C64.5216 17.8946 63.8083 17.9165 63.0859 17.959C64.6012 19.7865 65.8525 21.7977 66.4824 23.9629C66.5336 24.1389 66.5771 24.3157 66.6172 24.4941C67.2581 24.3024 67.9136 24.1695 68.5801 24.1055C68.9697 24.068 69.3617 24.05 69.7559 24.0488C71.9092 24.0424 74.1156 24.5553 76.2383 25.3184C75.2656 21.7681 74.0883 19.1026 73.8809 18.6406C73.3117 18.5338 69.6521 17.8654 65.2148 17.8906ZM60.2793 17.9844C60.2808 17.9918 60.2816 17.9899 60.2832 17.998C60.2868 18.0164 60.2905 18.0731 60.2871 18.0547C60.2828 18.0316 60.2828 18.0077 60.2793 17.9844ZM49.0449 24.9434C40.487 24.9434 32.9411 29.2261 28.4219 35.7637H69.668C65.1481 29.2262 57.6028 24.9434 49.0449 24.9434ZM30.2402 25.916C27.8633 25.9157 25.2281 26.6571 22.7285 27.7285C17.3697 30.0253 13.0412 33.5087 12.4824 33.9629C12.5363 34.6806 12.9784 40.2235 14.9922 45.6973C16.0657 48.6151 17.5732 51.3647 19.5586 53.0977C20.4594 53.8839 21.4442 54.4752 22.5605 54.8086C22.2783 53.2472 22.123 51.6422 22.123 50C22.123 40.3593 27.206 31.9002 34.832 27.1445C33.7478 26.4486 32.5454 26.0881 31.2422 25.9629C30.9143 25.9314 30.5798 25.9161 30.2402 25.916ZM69.7617 25.916C69.4222 25.916 69.0876 25.9314 68.7598 25.9629C67.0905 26.1233 65.5856 26.6685 64.2852 27.8164C71.3381 32.6729 75.9688 40.7983 75.9688 50C75.9688 51.7469 75.7971 53.4528 75.4785 55.1074C77.4541 55.0682 79.0477 54.3142 80.4414 53.0977C82.4267 51.3648 83.9344 48.6151 85.0078 45.6973C87.0215 40.2235 87.4637 34.6806 87.5176 33.9629C86.9588 33.5087 82.6301 30.0253 77.2715 27.7285C74.7719 26.6571 72.1382 25.9157 69.7617 25.916ZM28.7031 37.6289L49.0469 73.5371L69.4668 37.6289H28.7031ZM26.9102 38.248C25.0475 41.7524 23.9883 45.7507 23.9883 50C23.9883 52.3068 24.3045 54.5376 24.8867 56.6582L24.8887 56.6602C24.9869 56.7582 25.09 56.8517 25.1973 56.9395C25.119 56.9425 25.0425 56.9421 24.9648 56.9434C27.8576 67.0099 36.8798 74.4694 47.7441 75.0234L26.9102 38.248ZM71.2188 38.3203L50.3496 75.0234C53.8653 74.8436 57.1848 73.9352 60.1699 72.4551C60.1563 72.4359 60.1424 72.4178 60.1289 72.3984C60.1563 72.4111 60.1851 72.4215 60.2129 72.4336C68.4484 68.3304 74.1035 59.8343 74.1035 50C74.1035 45.7797 73.058 41.8075 71.2188 38.3203ZM16.7266 52.8242C16.2816 53.8266 15.8972 54.885 15.5742 55.9648C13.9034 61.5499 13.8043 67.1053 13.7949 67.8262C14.3791 68.2438 18.9186 71.4558 24.4121 73.418C27.34 74.4637 30.4188 75.07 33.0215 74.6562C34.1193 74.4817 35.1322 74.1397 36.0488 73.5742C29.6663 70.0453 24.8653 64.0022 22.9883 56.7832C21.2019 56.454 19.6367 55.6426 18.332 54.5039C17.7521 53.9977 17.2188 53.4328 16.7266 52.8242ZM83.2656 52.832C82.7753 53.4374 82.2452 54.0001 81.668 54.5039C79.9065 56.0414 77.6749 56.9872 75.0586 56.9473C73.2583 63.6927 68.9022 69.3988 63.0918 72.9629C64.2194 73.9111 65.5289 74.4255 66.9805 74.6562C69.583 75.07 72.66 74.4637 75.5879 73.418C81.0813 71.4558 85.6209 68.2438 86.2051 67.8262C86.1957 67.1053 86.0964 61.5499 84.4258 55.9648C84.1028 54.8851 83.7119 53.8325 83.2656 52.832ZM67.1895 54.0508C67.1892 54.0677 67.19 54.0846 67.1895 54.1016C67.189 54.1178 67.1875 54.079 67.1875 54.0527L67.1895 54.0508ZM61.4141 73.9062C57.7085 75.829 53.5042 76.9219 49.0449 76.9219C45.0661 76.9219 41.2907 76.0503 37.8906 74.498C37.1522 75.0869 36.3551 75.5499 35.5156 75.8887C35.5281 75.9284 35.5378 75.9681 35.5508 76.0078C36.371 78.5118 38.3134 80.9751 40.5801 83.1016C44.8311 87.0898 49.7567 89.6575 50.3984 89.9883C51.0347 89.651 55.9351 87.0249 60.1426 82.9863C62.3116 80.9044 64.1694 78.5124 65.0059 76.084C63.7004 75.6444 62.4778 74.9322 61.4141 73.9062ZM23.2676 74.9805C24.4225 79.1395 25.9844 82.3688 26.2344 82.8789C26.935 82.9861 32.2661 83.7723 37.9453 83.1035C36.1179 81.1687 34.563 78.9883 33.7773 76.5898C33.7588 76.5332 33.746 76.4749 33.7285 76.418C33.5905 76.4456 33.4537 76.4759 33.3145 76.498C30.2212 76.9897 26.882 76.2819 23.7852 75.1758C23.611 75.1136 23.4403 75.0452 23.2676 74.9805ZM75.7109 75.3457C72.8053 76.3334 69.7164 76.9413 66.8301 76.5176C66.1258 78.6734 64.8084 80.661 63.2324 82.4551C68.0586 82.8657 72.2297 82.3525 72.8438 82.2734C73.0866 81.8063 74.5068 79.0341 75.7109 75.3457Z"
      fill="#EFAE1A"
    />
  </svg>
);
export const ThirdEyeChakraLogo = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.0859 24.9629C41.2868 24.9629 33.5597 29.495 29.0977 36.3516H71.0723C66.6102 29.495 58.8851 24.9629 50.0859 24.9629ZM26.6895 34.3613C22.4182 34.2619 18.1166 38.068 14.9453 42.0898C12.0446 45.7686 10.3133 49.1353 10.0059 49.7422C10.3422 50.366 13.0051 55.252 17.0742 59.4297C19.241 61.6543 21.7374 63.5497 24.2539 64.3223C25.3529 64.6597 26.4507 64.7877 27.5605 64.6641C24.8027 60.4429 23.1934 55.4039 23.1934 49.9902C23.1934 44.2393 25.0094 38.9114 28.0898 34.5371C27.619 34.4336 27.1523 34.3721 26.6895 34.3613ZM73.3828 35.0371C73.0778 35.0327 72.7714 35.0527 72.4648 35.0879C75.3139 39.3552 76.9785 44.4796 76.9785 49.9902C76.9785 55.671 75.2075 60.9393 72.1953 65.2832C72.2492 65.2933 72.3036 65.31 72.3574 65.3184C73.6382 65.5171 74.8892 65.3505 76.1367 64.9316C78.6318 64.0939 81.0742 62.1352 83.1816 59.8555C87.1397 55.5738 89.6768 50.6214 89.9961 49.9902C89.6753 49.3962 87.9312 46.2124 85.0371 42.6855C81.8629 38.8174 77.5649 35.0969 73.3828 35.0371ZM29.7246 38.2148L50.0449 74.0801L70.4434 38.2148H29.7246ZM72.3711 38.5957L51.6875 74.9629C64.7728 74.1377 75.1133 63.2855 75.1133 49.9902C75.1133 45.8832 74.1206 42.0136 72.3711 38.5957ZM27.7988 38.5977C26.05 42.015 25.0566 45.8841 25.0566 49.9902C25.0566 55.9207 27.1193 61.3614 30.5605 65.6465C30.6166 65.6426 30.6689 65.6453 30.7266 65.6387C30.6831 65.6589 30.6392 65.6699 30.5957 65.6895C34.8525 70.9661 41.2062 74.4792 48.4004 74.957L27.7988 38.5977Z"
      fill="#773FFD"
    />
  </svg>
);
export const ThroatChakraLogo = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.8848 10.0293C49.237 10.3629 44.3208 12.9264 40.0723 16.9082C37.8054 19.0327 35.8615 21.4917 35.041 23.9922C34.9863 24.1588 34.9468 24.3256 34.9043 24.4922C35.7565 24.8525 36.5659 25.3455 37.3184 25.9746C40.9653 24.1281 45.0848 23.0801 49.4492 23.0801C54.3697 23.0801 58.9799 24.4095 62.9512 26.7187C63.5306 26.1152 64.145 25.5868 64.8047 25.1738C64.741 24.8424 64.6666 24.5107 64.5625 24.1797C63.7727 21.6689 61.8583 19.1844 59.6172 17.0312C55.4165 12.9955 50.5279 10.3706 49.8848 10.0293ZM67.1231 16.6035C65.5938 16.6123 63.8818 16.7003 62.1426 16.9063C64.0038 18.8983 65.5872 21.1462 66.3633 23.6133C66.4368 23.8468 66.4891 24.086 66.5449 24.3242C67.3684 24.0193 68.2241 23.8259 69.0957 23.7422C69.4857 23.7047 69.879 23.6847 70.2734 23.6836C72.0674 23.6784 73.8974 24.0361 75.6855 24.5957C74.3808 20.5256 72.7294 17.3823 72.4531 16.8691C72.0849 16.8259 70.207 16.5857 67.1231 16.6035ZM32.2246 17.0156C29.1425 17.0551 27.2701 17.3267 26.9024 17.3769C26.6372 17.8922 25.0494 21.0472 23.8203 25.125C26.0818 24.269 28.4523 23.6769 30.7617 23.6836C31.1562 23.6847 31.5494 23.7047 31.9395 23.7422C32.3313 23.7798 32.7192 23.8468 33.1035 23.9277C33.1476 23.7517 33.1894 23.5751 33.2461 23.4023C33.9868 21.1449 35.4059 19.0797 37.0938 17.2324C35.3941 17.0692 33.7171 16.9965 32.2246 17.0156ZM76.9121 22.373C77.2556 23.3243 77.5833 24.34 77.8848 25.3867C78.1005 25.474 78.3161 25.5609 78.5293 25.6523C79.2073 25.9429 79.8702 26.2568 80.5176 26.5801C80.2319 24.9222 79.9471 23.628 79.8711 23.3262C79.6171 23.2307 78.4377 22.8255 76.9121 22.373ZM22.5469 22.9609C21.2606 23.3395 20.252 23.6708 20.0235 23.7539C19.9389 24.0748 19.6127 25.3842 19.2891 27.2148C20.037 26.8111 20.8178 26.4202 21.6192 26.0508C21.9047 24.9787 22.2159 23.9343 22.5469 22.9609ZM49.4492 24.9434C40.9579 24.9434 33.4663 29.1604 28.9355 35.6113H69.9629C65.4319 29.1604 57.9399 24.9434 49.4492 24.9434ZM30.7578 25.5762C28.3834 25.5762 25.7487 26.3177 23.25 27.3887C17.8988 29.6821 13.5803 33.1568 13.0137 33.6172C13.0682 34.3422 13.51 39.8743 15.5215 45.3418C16.5946 48.2585 18.1029 51.0075 20.0859 52.7383C20.9324 53.4771 21.8565 54.0377 22.8906 54.3789C22.6569 52.953 22.5293 51.4915 22.5293 50C22.5293 40.2252 27.7499 31.6614 35.5527 26.9453C34.4167 26.1565 33.1442 25.7562 31.7578 25.623C31.4304 25.5916 31.097 25.5762 30.7578 25.5762ZM70.2793 25.5762C69.9402 25.5762 69.6067 25.5916 69.2793 25.623C67.4986 25.7941 65.9033 26.3996 64.5469 27.7148C71.6812 32.5588 76.3731 40.7355 76.3731 50C76.3731 51.6189 76.2218 53.2016 75.9473 54.7422C77.941 54.7129 79.5485 53.9626 80.9512 52.7383C82.9341 51.0075 84.4407 48.2585 85.5137 45.3418C87.525 39.8742 87.967 34.3422 88.0215 33.6172C87.4549 33.1568 83.1363 29.6821 77.7852 27.3887C75.2865 26.3177 72.6533 25.5762 70.2793 25.5762ZM29.1094 37.4746L49.4512 73.3848L69.873 37.4746H29.1094ZM27.3555 38.1679C25.4661 41.6916 24.3926 45.7181 24.3926 50C24.3926 63.4431 34.9521 74.3958 48.2383 75.0273L27.3555 38.1679ZM71.582 38.2441L50.6641 75.0273C63.9484 74.3948 74.5078 63.4424 74.5078 50C74.5078 45.7486 73.4464 41.7498 71.582 38.2441ZM49.8066 38.6894C55.4615 38.6894 60.0664 43.2953 60.0664 48.9511C60.0664 54.6071 55.4615 59.209 49.8066 59.209C44.1508 59.209 39.5449 54.6069 39.5449 48.9511C39.5449 43.2954 44.1508 38.6894 49.8066 38.6894ZM49.8066 40.5547C45.1588 40.5547 41.4121 44.3034 41.4121 48.9511C41.4121 53.599 45.1588 57.3438 49.8066 57.3438C54.4533 57.3438 58.2012 53.5988 58.2012 48.9511C58.2012 44.3035 54.4533 40.5547 49.8066 40.5547ZM13.3692 44.9062C11.4537 47.6106 10.2764 49.8203 10.0234 50.3105C10.2615 50.7599 11.704 53.3814 13.9375 56.3574C14.0484 55.9306 14.1654 55.5026 14.293 55.0762C14.7406 53.5798 15.301 52.0993 15.998 50.7148C15.0901 49.2475 14.351 47.6329 13.7481 45.9941C13.6149 45.6323 13.4898 45.2694 13.3692 44.9062ZM87.3867 45.7168C87.3536 45.8093 87.3231 45.9017 87.2891 45.9941C86.6857 47.6343 85.9461 49.2505 85.0371 50.7187C85.7333 52.1024 86.2949 53.581 86.7422 55.0762C86.7455 55.0873 86.7486 55.0983 86.7519 55.1094C88.5714 52.6582 89.7605 50.6188 89.9785 50.2285C89.7697 49.801 88.8555 48.0019 87.3867 45.7168ZM17.2656 52.5195C16.8248 53.514 16.424 54.5458 16.1035 55.6172C14.4347 61.1956 14.3358 66.7401 14.3262 67.4687C14.9185 67.892 19.4479 71.0972 24.9336 73.0566C27.8603 74.102 30.9358 74.7062 33.5351 74.293C34.4848 74.142 35.3674 73.8545 36.1836 73.418C29.8267 69.806 25.0826 63.6851 23.3027 56.4023C21.5987 56.0485 20.0983 55.2587 18.8418 54.1621C18.2733 53.6659 17.7496 53.1143 17.2656 52.5195ZM83.7715 52.5195C83.2874 53.1143 82.7638 53.6659 82.1953 54.1621C80.4256 55.7068 78.1818 56.6621 75.5508 56.6172C73.84 63.3737 69.5678 69.1104 63.834 72.7461C64.9121 73.5869 66.1384 74.0765 67.5 74.293C70.0995 74.7062 73.1747 74.102 76.1016 73.0566C81.5863 71.0977 86.1147 67.8934 86.709 67.4687C86.6997 66.74 86.6004 61.1956 84.9316 55.6172C84.6112 54.546 84.2127 53.513 83.7715 52.5195ZM19.3985 72.6992C19.6393 74.5284 19.9018 75.9574 19.9707 76.2754C20.258 76.3948 21.4976 76.8697 23.1152 77.4004C22.7646 76.3317 22.4423 75.1752 22.1484 73.9883C21.1867 73.577 20.2669 73.1406 19.3985 72.6992ZM81.0547 72.9961C80.1781 73.4266 79.2459 73.8453 78.2832 74.2383C77.9896 75.2239 77.6699 76.1793 77.3359 77.0859C78.965 76.5763 80.2168 76.1175 80.5059 76.002C80.572 75.7155 80.8135 74.5291 81.0547 72.9961ZM62.1406 73.7402C58.3579 75.7682 54.0375 76.9219 49.4492 76.9219C45.3917 76.9219 41.5454 76.0167 38.0938 74.4062C37.5265 74.817 36.9298 75.1633 36.3066 75.4355C36.3781 75.7294 36.4596 76.0219 36.5625 76.3144C37.4356 78.7969 39.431 81.215 41.7422 83.291C46.074 87.182 51.045 89.6375 51.6992 89.957C52.3352 89.602 57.1668 86.8772 61.2812 82.7539C63.3689 80.6617 65.14 78.2753 65.9433 75.873C64.563 75.4748 63.2726 74.7677 62.1406 73.7402ZM24.293 74.834C25.4697 79.05 27.0702 82.3412 27.3281 82.8613C27.664 82.9109 28.7094 83.0769 30.7617 83.2051H30.7637C32.9755 83.3431 35.872 83.3776 38.7734 83.0449C37.0409 81.2296 35.5717 79.1889 34.7812 76.9414C34.6759 76.6419 34.5886 76.3369 34.5137 76.0293C34.289 76.0801 34.062 76.1239 33.834 76.1602C30.7377 76.6524 27.3948 75.9424 24.2969 74.8359L24.293 74.834ZM76.0586 75.0644C73.3607 75.9647 70.5106 76.531 67.8164 76.2402C67.0616 78.6646 65.5453 80.8952 63.7559 82.8828C65.7409 83.006 67.6396 83.1486 69.1914 83.127C71.2497 83.0983 72.3004 82.9826 72.6387 82.9492C72.9214 82.4426 74.6785 79.2214 76.0586 75.0644Z"
      fill="#0CD7D8"
    />
  </svg>
);
