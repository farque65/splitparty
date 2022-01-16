import { Box, Flex, Link, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box as="footer" width="full" alignContent="center" py="12">
      <Flex alignItems="center" justifyContent="center">
        <Link
          href="https://gitcoin.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {colorMode === "light" ? (
            <svg
              width="188"
              height="58"
              viewBox="0 0 188 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="186" height="56" rx="7" fill="white" />
              <path
                d="M49.666 37.718C49.666 36.494 49.948 35.396 50.512 34.424C51.088 33.452 51.862 32.696 52.834 32.156C53.818 31.604 54.892 31.328 56.056 31.328C57.388 31.328 58.57 31.658 59.602 32.318C60.646 32.966 61.402 33.89 61.87 35.09H59.404C59.08 34.43 58.63 33.938 58.054 33.614C57.478 33.29 56.812 33.128 56.056 33.128C55.228 33.128 54.49 33.314 53.842 33.686C53.194 34.058 52.684 34.592 52.312 35.288C51.952 35.984 51.772 36.794 51.772 37.718C51.772 38.642 51.952 39.452 52.312 40.148C52.684 40.844 53.194 41.384 53.842 41.768C54.49 42.14 55.228 42.326 56.056 42.326C56.812 42.326 57.478 42.164 58.054 41.84C58.63 41.516 59.08 41.024 59.404 40.364H61.87C61.402 41.564 60.646 42.488 59.602 43.136C58.57 43.784 57.388 44.108 56.056 44.108C54.88 44.108 53.806 43.838 52.834 43.298C51.862 42.746 51.088 41.984 50.512 41.012C49.948 40.04 49.666 38.942 49.666 37.718ZM71.8679 44.126C70.7039 44.126 69.6299 43.856 68.6459 43.316C67.6739 42.764 66.8999 42.002 66.3239 41.03C65.7599 40.046 65.4779 38.942 65.4779 37.718C65.4779 36.494 65.7599 35.396 66.3239 34.424C66.8999 33.452 67.6739 32.696 68.6459 32.156C69.6299 31.604 70.7039 31.328 71.8679 31.328C73.0439 31.328 74.1179 31.604 75.0899 32.156C76.0739 32.696 76.8479 33.452 77.4119 34.424C77.9759 35.396 78.2579 36.494 78.2579 37.718C78.2579 38.942 77.9759 40.046 77.4119 41.03C76.8479 42.002 76.0739 42.764 75.0899 43.316C74.1179 43.856 73.0439 44.126 71.8679 44.126ZM71.8679 42.344C72.6959 42.344 73.4339 42.158 74.0819 41.786C74.7299 41.402 75.2339 40.862 75.5939 40.166C75.9659 39.458 76.1519 38.642 76.1519 37.718C76.1519 36.794 75.9659 35.984 75.5939 35.288C75.2339 34.592 74.7299 34.058 74.0819 33.686C73.4339 33.314 72.6959 33.128 71.8679 33.128C71.0399 33.128 70.3019 33.314 69.6539 33.686C69.0059 34.058 68.4959 34.592 68.1239 35.288C67.7639 35.984 67.5839 36.794 67.5839 37.718C67.5839 38.642 67.7639 39.458 68.1239 40.166C68.4959 40.862 69.0059 41.402 69.6539 41.786C70.3019 42.158 71.0399 42.344 71.8679 42.344ZM95.3431 31.49V44H93.2911V35.432L89.4751 44H88.0531L84.2191 35.432V44H82.1671V31.49H84.3811L88.7731 41.3L93.1471 31.49H95.3431ZM113.106 31.49V44H111.054V35.432L107.238 44H105.816L101.982 35.432V44H99.9302V31.49H102.144L106.536 41.3L110.91 31.49H113.106ZM119.727 31.49V39.464C119.727 40.412 119.973 41.126 120.465 41.606C120.969 42.086 121.665 42.326 122.553 42.326C123.453 42.326 124.149 42.086 124.641 41.606C125.145 41.126 125.397 40.412 125.397 39.464V31.49H127.449V39.428C127.449 40.448 127.227 41.312 126.783 42.02C126.339 42.728 125.745 43.256 125.001 43.604C124.257 43.952 123.435 44.126 122.535 44.126C121.635 44.126 120.813 43.952 120.069 43.604C119.337 43.256 118.755 42.728 118.323 42.02C117.891 41.312 117.675 40.448 117.675 39.428V31.49H119.727ZM142.289 44H140.237L134.063 34.658V44H132.011V31.472H134.063L140.237 40.796V31.472H142.289V44ZM148.926 31.49V44H146.874V31.49H148.926ZM161.592 31.49V33.164H158.262V44H156.21V33.164H152.862V31.49H161.592ZM174.83 31.49L170.69 39.464V44H168.638V39.464L164.48 31.49H166.766L169.664 37.628L172.562 31.49H174.83Z"
                fill="#6F3FF5"
              />
              <path
                d="M54.112 19.692C54.416 19.74 54.692 19.864 54.94 20.064C55.196 20.264 55.396 20.512 55.54 20.808C55.692 21.104 55.768 21.42 55.768 21.756C55.768 22.18 55.66 22.564 55.444 22.908C55.228 23.244 54.912 23.512 54.496 23.712C54.088 23.904 53.604 24 53.044 24H49.924V15.636H52.924C53.492 15.636 53.976 15.732 54.376 15.924C54.776 16.108 55.076 16.36 55.276 16.68C55.476 17 55.576 17.36 55.576 17.76C55.576 18.256 55.44 18.668 55.168 18.996C54.904 19.316 54.552 19.548 54.112 19.692ZM51.016 19.248H52.852C53.364 19.248 53.76 19.128 54.04 18.888C54.32 18.648 54.46 18.316 54.46 17.892C54.46 17.468 54.32 17.136 54.04 16.896C53.76 16.656 53.356 16.536 52.828 16.536H51.016V19.248ZM52.948 23.1C53.492 23.1 53.916 22.972 54.22 22.716C54.524 22.46 54.676 22.104 54.676 21.648C54.676 21.184 54.516 20.82 54.196 20.556C53.876 20.284 53.448 20.148 52.912 20.148H51.016V23.1H52.948ZM58.4114 15.636V20.928C58.4114 21.672 58.5914 22.224 58.9514 22.584C59.3194 22.944 59.8274 23.124 60.4754 23.124C61.1154 23.124 61.6154 22.944 61.9754 22.584C62.3434 22.224 62.5274 21.672 62.5274 20.928V15.636H63.6194V20.916C63.6194 21.612 63.4794 22.2 63.1994 22.68C62.9194 23.152 62.5394 23.504 62.0594 23.736C61.5874 23.968 61.0554 24.084 60.4634 24.084C59.8714 24.084 59.3354 23.968 58.8554 23.736C58.3834 23.504 58.0074 23.152 57.7274 22.68C57.4554 22.2 57.3194 21.612 57.3194 20.916V15.636H58.4114ZM66.593 15.636V24H65.501V15.636H66.593ZM69.9662 23.112H72.8942V24H68.8742V15.636H69.9662V23.112ZM79.6218 15.636V16.524H77.3418V24H76.2498V16.524H73.9578V15.636H79.6218ZM88.4733 19.692C88.7773 19.74 89.0533 19.864 89.3013 20.064C89.5573 20.264 89.7573 20.512 89.9013 20.808C90.0533 21.104 90.1293 21.42 90.1293 21.756C90.1293 22.18 90.0213 22.564 89.8053 22.908C89.5893 23.244 89.2733 23.512 88.8573 23.712C88.4493 23.904 87.9653 24 87.4053 24H84.2853V15.636H87.2853C87.8533 15.636 88.3373 15.732 88.7373 15.924C89.1373 16.108 89.4373 16.36 89.6373 16.68C89.8373 17 89.9373 17.36 89.9373 17.76C89.9373 18.256 89.8013 18.668 89.5293 18.996C89.2653 19.316 88.9133 19.548 88.4733 19.692ZM85.3773 19.248H87.2133C87.7253 19.248 88.1213 19.128 88.4013 18.888C88.6813 18.648 88.8213 18.316 88.8213 17.892C88.8213 17.468 88.6813 17.136 88.4013 16.896C88.1213 16.656 87.7173 16.536 87.1893 16.536H85.3773V19.248ZM87.3093 23.1C87.8533 23.1 88.2773 22.972 88.5813 22.716C88.8853 22.46 89.0373 22.104 89.0373 21.648C89.0373 21.184 88.8773 20.82 88.5573 20.556C88.2373 20.284 87.8093 20.148 87.2733 20.148H85.3773V23.1H87.3093ZM97.4406 15.636L94.7166 20.844V24H93.6246V20.844L90.8886 15.636H92.1006L94.1646 19.872L96.2286 15.636H97.4406ZM106.58 15.636V16.524H104.3V24H103.208V16.524H100.916V15.636H106.58ZM114.308 15.636V24H113.216V20.208H108.956V24H107.864V15.636H108.956V19.308H113.216V15.636H114.308ZM117.204 16.524V19.32H120.252V20.22H117.204V23.1H120.612V24H116.112V15.624H120.612V16.524H117.204ZM131.44 18.06C131.208 17.572 130.872 17.196 130.432 16.932C129.992 16.66 129.48 16.524 128.896 16.524C128.312 16.524 127.784 16.66 127.312 16.932C126.848 17.196 126.48 17.58 126.208 18.084C125.944 18.58 125.812 19.156 125.812 19.812C125.812 20.468 125.944 21.044 126.208 21.54C126.48 22.036 126.848 22.42 127.312 22.692C127.784 22.956 128.312 23.088 128.896 23.088C129.712 23.088 130.384 22.844 130.912 22.356C131.44 21.868 131.748 21.208 131.836 20.376H128.5V19.488H133V20.328C132.936 21.016 132.72 21.648 132.352 22.224C131.984 22.792 131.5 23.244 130.9 23.58C130.3 23.908 129.632 24.072 128.896 24.072C128.12 24.072 127.412 23.892 126.772 23.532C126.132 23.164 125.624 22.656 125.248 22.008C124.88 21.36 124.696 20.628 124.696 19.812C124.696 18.996 124.88 18.264 125.248 17.616C125.624 16.96 126.132 16.452 126.772 16.092C127.412 15.724 128.12 15.54 128.896 15.54C129.784 15.54 130.568 15.76 131.248 16.2C131.936 16.64 132.436 17.26 132.748 18.06H131.44ZM136.076 15.636V24H134.984V15.636H136.076ZM143.625 15.636V16.524H141.345V24H140.253V16.524H137.961V15.636H143.625ZM144.621 19.812C144.621 18.996 144.805 18.264 145.173 17.616C145.541 16.96 146.041 16.448 146.673 16.08C147.313 15.712 148.021 15.528 148.797 15.528C149.709 15.528 150.505 15.748 151.185 16.188C151.865 16.628 152.361 17.252 152.673 18.06H151.365C151.133 17.556 150.797 17.168 150.357 16.896C149.925 16.624 149.405 16.488 148.797 16.488C148.213 16.488 147.689 16.624 147.225 16.896C146.761 17.168 146.397 17.556 146.133 18.06C145.869 18.556 145.737 19.14 145.737 19.812C145.737 20.476 145.869 21.06 146.133 21.564C146.397 22.06 146.761 22.444 147.225 22.716C147.689 22.988 148.213 23.124 148.797 23.124C149.405 23.124 149.925 22.992 150.357 22.728C150.797 22.456 151.133 22.068 151.365 21.564H152.673C152.361 22.364 151.865 22.984 151.185 23.424C150.505 23.856 149.709 24.072 148.797 24.072C148.021 24.072 147.313 23.892 146.673 23.532C146.041 23.164 145.541 22.656 145.173 22.008C144.805 21.36 144.621 20.628 144.621 19.812ZM158.151 24.084C157.375 24.084 156.667 23.904 156.027 23.544C155.387 23.176 154.879 22.668 154.503 22.02C154.135 21.364 153.951 20.628 153.951 19.812C153.951 18.996 154.135 18.264 154.503 17.616C154.879 16.96 155.387 16.452 156.027 16.092C156.667 15.724 157.375 15.54 158.151 15.54C158.935 15.54 159.647 15.724 160.287 16.092C160.927 16.452 161.431 16.956 161.799 17.604C162.167 18.252 162.351 18.988 162.351 19.812C162.351 20.636 162.167 21.372 161.799 22.02C161.431 22.668 160.927 23.176 160.287 23.544C159.647 23.904 158.935 24.084 158.151 24.084ZM158.151 23.136C158.735 23.136 159.259 23 159.723 22.728C160.195 22.456 160.563 22.068 160.827 21.564C161.099 21.06 161.235 20.476 161.235 19.812C161.235 19.14 161.099 18.556 160.827 18.06C160.563 17.556 160.199 17.168 159.735 16.896C159.271 16.624 158.743 16.488 158.151 16.488C157.559 16.488 157.031 16.624 156.567 16.896C156.103 17.168 155.735 17.556 155.463 18.06C155.199 18.556 155.067 19.14 155.067 19.812C155.067 20.476 155.199 21.06 155.463 21.564C155.735 22.068 156.103 22.456 156.567 22.728C157.039 23 157.567 23.136 158.151 23.136ZM165.304 15.636V24H164.212V15.636H165.304ZM174.161 24H173.069L168.677 17.34V24H167.585V15.624H168.677L173.069 22.272V15.624H174.161V24Z"
                fill="#6F3FF5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.415 36.078C37.1065 36.6297 37.6985 37.1048 38.0633 37.403C38.1893 37.5062 38.2906 37.6357 38.36 37.7821C38.4294 37.9286 38.4651 38.0885 38.4645 38.2503L38.4533 43.2316C38.4207 43.4233 38.3204 43.5974 38.1703 43.7229C38.0203 43.8485 37.8301 43.9174 37.6335 43.9175H26.854C18.7791 43.9175 12.05 37.3839 12.1137 29.3992C12.1552 24.2605 14.9187 19.7638 19.0489 17.248V12.3717C19.0489 12.1839 19.0879 11.9981 19.1635 11.8258C19.2391 11.6535 19.3496 11.4984 19.4883 11.37C19.627 11.2417 19.7908 11.1429 19.9697 11.0798C20.1486 11.0167 20.3386 10.9905 20.5281 11.003C21.2653 11.0503 21.8227 11.6881 21.8227 12.4185V15.9369C22.9428 15.5451 24.1073 15.2911 25.2901 15.1806V12.3717C25.2901 12.1839 25.3291 11.998 25.4047 11.8258C25.4803 11.6535 25.5909 11.4983 25.7296 11.37C25.8683 11.2417 26.0322 11.1429 26.211 11.0798C26.3899 11.0167 26.58 10.9906 26.7695 11.003C27.5067 11.0503 28.0641 11.6881 28.0641 12.4185V15.1793C31.5742 15.5075 34.7223 17.0671 37.0591 19.4172C37.4967 19.8571 37.9055 20.3242 38.2829 20.8157C38.5727 21.193 38.5075 21.4841 38.1087 21.7469L36.4935 23.0437C37.7788 24.9629 38.4648 27.214 38.4656 29.5164C38.4704 31.8595 37.7547 34.1477 36.415 36.078ZM34.2823 34.3825C35.2267 32.932 35.7294 31.2428 35.7294 29.5164C35.7294 27.7507 35.1886 26.0743 34.2959 24.6878L30.9318 27.2041C31.319 27.9011 31.525 28.6823 31.5313 29.4775C31.5376 30.2728 31.344 31.0571 30.9679 31.76L31.0758 31.8453C31.5479 32.2181 32.8787 33.2694 34.2823 34.3825ZM35.6918 41.1743L35.7065 39.1608L28.8645 33.8007C28.1864 34.1404 27.4367 34.3172 26.6765 34.3166C23.9955 34.3166 21.8221 32.1675 21.8221 29.5162C21.8221 26.8648 23.9955 24.7157 26.6765 24.7157C27.425 24.7149 28.1635 24.886 28.8337 25.2157L34.496 20.8111C32.391 18.8752 29.778 17.8578 26.6765 17.8578C25.0022 17.8566 23.3471 18.2094 21.8221 18.8926V23.3441C21.8221 23.5319 21.783 23.7177 21.7075 23.89C21.6319 24.0623 21.5213 24.2174 21.3826 24.3457C21.244 24.474 21.0801 24.5728 20.9013 24.6359C20.7224 24.6991 20.5324 24.7252 20.3429 24.7128C19.6057 24.6655 19.0483 24.0277 19.0483 23.2971V20.6308C16.5175 22.7574 14.9049 25.9203 14.8875 29.4576C14.8554 35.9014 20.3055 41.1743 26.8222 41.1743H35.6918ZM28.4064 30.6592C28.635 30.3209 28.7571 29.9231 28.7571 29.5162C28.7571 28.9705 28.5378 28.4472 28.1477 28.0613C27.7575 27.6755 27.2283 27.4587 26.6765 27.4587C26.2649 27.4587 25.8627 27.5794 25.5205 27.8054C25.1784 28.0315 24.9117 28.3529 24.7542 28.7288C24.5968 29.1048 24.5555 29.5185 24.6358 29.9176C24.7161 30.3167 24.9143 30.6833 25.2052 30.971C25.4962 31.2588 25.867 31.4547 26.2705 31.5341C26.6741 31.6135 27.0925 31.5728 27.4727 31.417C27.8528 31.2613 28.1778 30.9976 28.4064 30.6592Z"
                fill="#6F3FF5"
              />
              <rect
                x="1"
                y="1"
                width="186"
                height="56"
                rx="7"
                stroke="#6F3FF5"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="188"
              height="58"
              viewBox="0 0 1343 415"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.154297"
                y="0.542969"
                width="1341.98"
                height="414.016"
                rx="57.1057"
                fill="#6F3FF5"
              />
              <path
                d="M354.681 273.574C354.681 264.837 356.694 256.999 360.72 250.061C364.831 243.122 370.356 237.726 377.295 233.871C384.319 229.931 391.985 227.961 400.294 227.961C409.802 227.961 418.239 230.316 425.606 235.027C433.058 239.653 438.455 246.249 441.796 254.815H424.193C421.88 250.103 418.668 246.591 414.556 244.279C410.445 241.966 405.69 240.809 400.294 240.809C394.384 240.809 389.116 242.137 384.49 244.792C379.864 247.448 376.224 251.26 373.569 256.228C370.999 261.196 369.714 266.978 369.714 273.574C369.714 280.169 370.999 285.951 373.569 290.92C376.224 295.888 379.864 299.742 384.49 302.484C389.116 305.139 394.384 306.467 400.294 306.467C405.69 306.467 410.445 305.31 414.556 302.997C418.668 300.685 421.88 297.173 424.193 292.461H441.796C438.455 301.027 433.058 307.623 425.606 312.249C418.239 316.874 409.802 319.187 400.294 319.187C391.899 319.187 384.233 317.26 377.295 313.405C370.356 309.465 364.831 304.025 360.72 297.087C356.694 290.149 354.681 282.311 354.681 273.574ZM513.162 319.315C504.854 319.315 497.187 317.388 490.163 313.533C483.225 309.593 477.7 304.154 473.588 297.216C469.562 290.192 467.549 282.311 467.549 273.574C467.549 264.837 469.562 256.999 473.588 250.061C477.7 243.122 483.225 237.726 490.163 233.871C497.187 229.931 504.854 227.961 513.162 227.961C521.557 227.961 529.223 229.931 536.162 233.871C543.186 237.726 548.711 243.122 552.737 250.061C556.763 256.999 558.776 264.837 558.776 273.574C558.776 282.311 556.763 290.192 552.737 297.216C548.711 304.154 543.186 309.593 536.162 313.533C529.223 317.388 521.557 319.315 513.162 319.315ZM513.162 306.595C519.073 306.595 524.341 305.267 528.966 302.612C533.592 299.871 537.19 296.016 539.759 291.048C542.415 285.994 543.743 280.169 543.743 273.574C543.743 266.978 542.415 261.196 539.759 256.228C537.19 251.26 533.592 247.448 528.966 244.792C524.341 242.137 519.073 240.809 513.162 240.809C507.252 240.809 501.984 242.137 497.358 244.792C492.733 247.448 489.092 251.26 486.437 256.228C483.867 261.196 482.582 266.978 482.582 273.574C482.582 280.169 483.867 285.994 486.437 291.048C489.092 296.016 492.733 299.871 497.358 302.612C501.984 305.267 507.252 306.595 513.162 306.595ZM680.734 229.117V318.416H666.086V257.256L638.847 318.416H628.696L601.328 257.256V318.416H586.681V229.117H602.485L633.836 299.143L665.058 229.117H680.734ZM807.53 229.117V318.416H792.882V257.256L765.643 318.416H755.492L728.125 257.256V318.416H713.477V229.117H729.281L760.632 299.143L791.855 229.117H807.53ZM854.792 229.117V286.037C854.792 292.804 856.548 297.901 860.06 301.327C863.658 304.753 868.626 306.467 874.965 306.467C881.389 306.467 886.358 304.753 889.87 301.327C893.467 297.901 895.266 292.804 895.266 286.037V229.117H909.914V285.78C909.914 293.061 908.329 299.229 905.16 304.282C901.99 309.336 897.75 313.105 892.439 315.589C887.129 318.073 881.261 319.315 874.837 319.315C868.412 319.315 862.545 318.073 857.234 315.589C852.009 313.105 847.854 309.336 844.77 304.282C841.687 299.229 840.145 293.061 840.145 285.78V229.117H854.792ZM1015.84 318.416H1001.2L957.124 251.731V318.416H942.476V228.988H957.124L1001.2 295.545V228.988H1015.84V318.416ZM1063.22 229.117V318.416H1048.57V229.117H1063.22ZM1153.63 229.117V241.066H1129.86V318.416H1115.21V241.066H1091.31V229.117H1153.63ZM1248.13 229.117L1218.57 286.037V318.416H1203.93V286.037L1174.25 229.117H1190.56L1211.25 272.931L1231.94 229.117H1248.13Z"
                fill="white"
              />
              <path
                d="M386.417 140.59C388.587 140.933 390.557 141.818 392.328 143.246C394.155 144.673 395.583 146.444 396.611 148.557C397.696 150.67 398.238 152.925 398.238 155.324C398.238 158.35 397.467 161.091 395.925 163.547C394.384 165.945 392.128 167.858 389.158 169.286C386.246 170.657 382.791 171.342 378.794 171.342H356.522V111.638H377.937C381.992 111.638 385.447 112.323 388.302 113.694C391.157 115.007 393.299 116.806 394.726 119.09C396.154 121.374 396.868 123.944 396.868 126.799C396.868 130.34 395.897 133.281 393.955 135.622C392.071 137.906 389.558 139.562 386.417 140.59ZM364.317 137.421H377.423C381.078 137.421 383.905 136.564 385.903 134.851C387.902 133.138 388.901 130.768 388.901 127.742C388.901 124.715 387.902 122.345 385.903 120.632C383.905 118.919 381.021 118.062 377.252 118.062H364.317V137.421ZM378.108 164.917C381.992 164.917 385.018 164.004 387.188 162.176C389.358 160.349 390.443 157.808 390.443 154.553C390.443 151.241 389.301 148.642 387.017 146.758C384.733 144.816 381.678 143.845 377.851 143.845H364.317V164.917H378.108ZM417.107 111.638V149.413C417.107 154.724 418.392 158.664 420.962 161.234C423.589 163.804 427.215 165.089 431.84 165.089C436.409 165.089 439.978 163.804 442.548 161.234C445.175 158.664 446.488 154.724 446.488 149.413V111.638H454.283V149.328C454.283 154.296 453.284 158.493 451.285 161.919C449.286 165.289 446.574 167.801 443.147 169.457C439.778 171.113 435.981 171.941 431.755 171.941C427.529 171.941 423.703 171.113 420.277 169.457C416.907 167.801 414.223 165.289 412.225 161.919C410.283 158.493 409.312 154.296 409.312 149.328V111.638H417.107ZM475.51 111.638V171.342H467.715V111.638H475.51ZM499.588 165.003H520.488V171.342H491.793V111.638H499.588V165.003ZM568.512 111.638V117.977H552.237V171.342H544.442V117.977H528.081V111.638H568.512ZM631.695 140.59C633.865 140.933 635.835 141.818 637.606 143.246C639.433 144.673 640.861 146.444 641.889 148.557C642.974 150.67 643.516 152.925 643.516 155.324C643.516 158.35 642.745 161.091 641.203 163.547C639.661 165.945 637.406 167.858 634.436 169.286C631.524 170.657 628.069 171.342 624.072 171.342H601.8V111.638H623.215C627.27 111.638 630.724 112.323 633.58 113.694C636.435 115.007 638.576 116.806 640.004 119.09C641.432 121.374 642.146 123.944 642.146 126.799C642.146 130.34 641.175 133.281 639.233 135.622C637.349 137.906 634.836 139.562 631.695 140.59ZM609.595 137.421H622.701C626.356 137.421 629.183 136.564 631.181 134.851C633.18 133.138 634.179 130.768 634.179 127.742C634.179 124.715 633.18 122.345 631.181 120.632C629.183 118.919 626.299 118.062 622.53 118.062H609.595V137.421ZM623.386 164.917C627.27 164.917 630.296 164.004 632.466 162.176C634.636 160.349 635.721 157.808 635.721 154.553C635.721 151.241 634.579 148.642 632.295 146.758C630.011 144.816 626.955 143.845 623.129 143.845H609.595V164.917H623.386ZM695.706 111.638L676.262 148.814V171.342H668.467V148.814L648.937 111.638H657.588L672.321 141.875L687.055 111.638H695.706ZM760.943 111.638V117.977H744.667V171.342H736.873V117.977H720.512V111.638H760.943ZM816.108 111.638V171.342H808.313V144.274H777.904V171.342H770.109V111.638H777.904V137.849H808.313V111.638H816.108ZM836.784 117.977V137.935H858.542V144.359H836.784V164.917H861.112V171.342H828.99V111.552H861.112V117.977H836.784ZM938.401 128.941C936.745 125.457 934.346 122.773 931.206 120.889C928.065 118.947 924.41 117.977 920.241 117.977C916.073 117.977 912.304 118.947 908.934 120.889C905.622 122.773 902.995 125.514 901.054 129.112C899.169 132.653 898.227 136.764 898.227 141.447C898.227 146.13 899.169 150.241 901.054 153.782C902.995 157.322 905.622 160.063 908.934 162.005C912.304 163.89 916.073 164.832 920.241 164.832C926.066 164.832 930.863 163.09 934.632 159.607C938.401 156.123 940.6 151.412 941.228 145.473H917.415V139.134H949.537V145.13C949.08 150.041 947.538 154.553 944.911 158.664C942.284 162.719 938.829 165.945 934.546 168.344C930.263 170.685 925.495 171.856 920.241 171.856C914.702 171.856 909.648 170.571 905.08 168.001C900.511 165.374 896.885 161.748 894.201 157.122C891.574 152.497 890.261 147.272 890.261 141.447C890.261 135.622 891.574 130.397 894.201 125.771C896.885 121.089 900.511 117.463 905.08 114.893C909.648 112.266 914.702 110.953 920.241 110.953C926.58 110.953 932.176 112.523 937.03 115.664C941.942 118.805 945.511 123.23 947.738 128.941H938.401ZM971.493 111.638V171.342H963.698V111.638H971.493ZM1025.38 111.638V117.977H1009.1V171.342H1001.31V117.977H984.949V111.638H1025.38ZM1032.49 141.447C1032.49 135.622 1033.8 130.397 1036.43 125.771C1039.06 121.089 1042.63 117.434 1047.14 114.807C1051.71 112.18 1056.76 110.867 1062.3 110.867C1068.81 110.867 1074.49 112.437 1079.35 115.578C1084.2 118.719 1087.74 123.173 1089.97 128.941H1080.63C1078.97 125.343 1076.58 122.574 1073.44 120.632C1070.35 118.69 1066.64 117.72 1062.3 117.72C1058.13 117.72 1054.39 118.69 1051.08 120.632C1047.77 122.574 1045.17 125.343 1043.28 128.941C1041.4 132.481 1040.46 136.65 1040.46 141.447C1040.46 146.187 1041.4 150.355 1043.28 153.953C1045.17 157.494 1047.77 160.235 1051.08 162.176C1054.39 164.118 1058.13 165.089 1062.3 165.089C1066.64 165.089 1070.35 164.146 1073.44 162.262C1076.58 160.32 1078.97 157.551 1080.63 153.953H1089.97C1087.74 159.664 1084.2 164.089 1079.35 167.23C1074.49 170.314 1068.81 171.856 1062.3 171.856C1056.76 171.856 1051.71 170.571 1047.14 168.001C1042.63 165.374 1039.06 161.748 1036.43 157.122C1033.8 152.497 1032.49 147.272 1032.49 141.447ZM1129.07 171.941C1123.53 171.941 1118.47 170.657 1113.91 168.087C1109.34 165.46 1105.71 161.834 1103.03 157.208C1100.4 152.525 1099.09 147.272 1099.09 141.447C1099.09 135.622 1100.4 130.397 1103.03 125.771C1105.71 121.089 1109.34 117.463 1113.91 114.893C1118.47 112.266 1123.53 110.953 1129.07 110.953C1134.66 110.953 1139.75 112.266 1144.31 114.893C1148.88 117.463 1152.48 121.06 1155.11 125.686C1157.73 130.311 1159.05 135.565 1159.05 141.447C1159.05 147.329 1157.73 152.583 1155.11 157.208C1152.48 161.834 1148.88 165.46 1144.31 168.087C1139.75 170.657 1134.66 171.941 1129.07 171.941ZM1129.07 165.174C1133.24 165.174 1136.98 164.204 1140.29 162.262C1143.66 160.32 1146.28 157.551 1148.17 153.953C1150.11 150.355 1151.08 146.187 1151.08 141.447C1151.08 136.65 1150.11 132.481 1148.17 128.941C1146.28 125.343 1143.69 122.574 1140.37 120.632C1137.06 118.69 1133.29 117.72 1129.07 117.72C1124.84 117.72 1121.07 118.69 1117.76 120.632C1114.45 122.574 1111.82 125.343 1109.88 128.941C1108 132.481 1107.05 136.65 1107.05 141.447C1107.05 146.187 1108 150.355 1109.88 153.953C1111.82 157.551 1114.45 160.32 1117.76 162.262C1121.13 164.204 1124.9 165.174 1129.07 165.174ZM1180.13 111.638V171.342H1172.34V111.638H1180.13ZM1243.36 171.342H1235.56L1204.21 123.801V171.342H1196.41V111.552H1204.21L1235.56 159.007V111.552H1243.36V171.342Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M260.092 258.075C265.029 262.014 269.255 265.406 271.859 267.535C272.759 268.271 273.482 269.195 273.978 270.241C274.473 271.287 274.728 272.428 274.724 273.583L274.644 309.14C274.411 310.509 273.695 311.751 272.624 312.648C271.553 313.544 270.195 314.036 268.792 314.037H191.846C134.205 314.037 86.1713 267.399 86.6263 210.402C86.922 173.721 106.649 141.622 136.131 123.664V88.8558C136.131 87.5152 136.409 86.1888 136.949 84.9589C137.488 83.7291 138.278 82.6218 139.267 81.7059C140.257 80.79 141.427 80.0848 142.704 79.6342C143.981 79.1835 145.337 78.997 146.69 79.0861C151.952 79.4235 155.931 83.9762 155.931 89.1902V114.305C163.926 111.508 172.239 109.695 180.682 108.906V88.8558C180.682 87.5151 180.961 86.1887 181.5 84.9588C182.04 83.729 182.829 82.6217 183.819 81.7058C184.809 80.7899 185.979 80.0848 187.256 79.6342C188.533 79.1835 189.889 78.997 191.242 79.0861C196.504 79.4235 200.483 83.9762 200.483 89.1902V108.897C225.539 111.24 248.011 122.373 264.691 139.148C267.816 142.288 270.734 145.623 273.427 149.131C275.496 151.824 275.03 153.902 272.184 155.778L260.651 165.037C269.825 178.737 274.722 194.805 274.728 211.24C274.762 227.964 269.654 244.296 260.092 258.075ZM244.868 245.972C251.608 235.619 255.196 223.562 255.196 211.24C255.196 198.636 251.336 186.67 244.964 176.773L220.953 194.733C223.717 199.708 225.188 205.284 225.233 210.961C225.278 216.637 223.896 222.236 221.211 227.254L221.983 227.863C225.353 230.525 234.85 238.027 244.868 245.972ZM254.932 294.455L255.036 280.082L206.197 241.82C201.356 244.246 196.005 245.508 190.578 245.503C171.441 245.503 155.926 230.163 155.926 211.237C155.926 192.311 171.441 176.97 190.578 176.97C195.921 176.964 201.193 178.186 205.977 180.539L246.396 149.098C231.37 135.279 212.718 128.017 190.578 128.017C178.627 128.008 166.812 130.527 155.926 135.404V167.18C155.926 168.52 155.648 169.846 155.108 171.076C154.569 172.306 153.78 173.413 152.79 174.329C151.8 175.245 150.63 175.95 149.354 176.401C148.077 176.851 146.72 177.038 145.368 176.949C140.106 176.612 136.127 172.059 136.127 166.844V147.811C118.062 162.991 106.55 185.569 106.426 210.818C106.197 256.816 145.101 294.455 191.618 294.455H254.932ZM202.927 219.396C204.559 216.981 205.43 214.142 205.43 211.237C205.43 207.342 203.865 203.606 201.08 200.852C198.295 198.097 194.517 196.55 190.578 196.55C187.641 196.55 184.769 197.411 182.327 199.025C179.884 200.639 177.981 202.933 176.857 205.616C175.733 208.3 175.439 211.253 176.012 214.102C176.585 216.951 177.999 219.568 180.076 221.622C182.153 223.676 184.8 225.075 187.681 225.641C190.562 226.208 193.548 225.917 196.262 224.806C198.975 223.694 201.295 221.812 202.927 219.396Z"
                fill="white"
              />
            </svg>
          )}
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;