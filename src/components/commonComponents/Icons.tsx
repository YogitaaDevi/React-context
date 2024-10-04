export enum IconType {
  CartIcon = "CartIcon",
  LogoutIcon = "LogoutIcon",
  FoodServingIcon = "FoodServingIcon",
  ProfileIcon = "ProfileIcon",
  SearchIcon = "SearchIcon"
}

const CartIcon = () => {
  return (
    <svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7351 14.0181C8.91085 13.6985 9.24662 13.5 9.61132 13.5H16.47C17.22 13.5 17.88 13.09 18.22 12.47L21.6008 6.33041C21.7106 6.13097 21.7448 5.91025 21.7129 5.70131C21.8904 5.52082 22 5.27321 22 5C22 4.44772 21.5523 4 21 4H6C5.96703 4 5.93443 4.0016 5.90228 4.00471L5.7317 3.64435C5.40095 2.94557 4.69708 2.5 3.92398 2.5H2.92004C2.36776 2.5 1.92004 2.94772 1.92004 3.5C1.92004 4.05228 2.36776 4.5 2.92004 4.5H3.14518C3.6184 4.5 4.04931 4.77254 4.25211 5.20011L7.08022 11.1627C7.35632 11.7448 7.33509 12.4243 7.02318 12.988L6.17004 14.53C5.44004 15.87 6.40004 17.5 7.92004 17.5H18.92C19.4723 17.5 19.92 17.0523 19.92 16.5C19.92 15.9477 19.4723 15.5 18.92 15.5H9.61131C8.85071 15.5 8.36855 14.6845 8.7351 14.0181ZM17.0408 10.4677L19.5108 6H6.84671L8.90839 10.3557C9.23914 11.0544 9.94301 11.5 10.7161 11.5H15.2905C16.0183 11.5 16.6886 11.1046 17.0408 10.4677Z" fill="#ffffff" />
      <path d="M7.92005 18.5C6.82005 18.5 5.93005 19.4 5.93005 20.5C5.93005 21.6 6.82005 22.5 7.92005 22.5C9.02005 22.5 9.92005 21.6 9.92005 20.5C9.92005 19.4 9.02005 18.5 7.92005 18.5Z" fill="#ffffff" />
      <path d="M17.9201 18.5C16.8201 18.5 15.9301 19.4 15.9301 20.5C15.9301 21.6 16.8201 22.5 17.9201 22.5C19.0201 22.5 19.9201 21.6 19.9201 20.5C19.9201 19.4 19.0201 18.5 17.9201 18.5Z" fill="#ffffff" />
    </svg>
  );
};

const LogoutIcon = () => {
  return (
    <svg height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1" />
    </svg>
  )
}

const FoodServingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64px"
      height="64px"
      fill="#ffffff"
    >
      <g id="Food">
        <path d="M2,37v1c0,4.418,3.582,8,8,8h18v6h-2v2h12v-2h-2v-6h18c4.418,0,8-3.582,8-8v-1H2z M56,40.396 C55.535,41.715,54.353,43,52,43H12c-2.353,0-3.535-1.285-4-2.604V39h48V40.396z" />
        <path d="M19.32,16.855C21.285,18.43,24.026,20,28,20c3.974,0,6.715-1.57,8.68-3.145C38.804,16.1,39.857,15.2,41,14.13 V18h2V7.035C43,5.93,42.07,5,40.965,5c-1.16,0-2.266,0.552-4.098,1.922c-1.43,1.102-3.065,2.363-4.867,2.363 c-1.802,0-3.437-1.261-4.867-2.363C25.301,5.552,24.195,5,23.035,5C21.93,5,21,5.93,21,7.035V18h2V14.13 C24.143,15.2,25.196,16.1,27.32,16.855z M23,7.035C23,6.57,23.57,6,24.035,6c0.804,0,1.787,0.693,3.344,1.91 c1.669,1.285,3.504,2.69,6.222,2.69s4.553-1.405,6.222-2.69C41.178,6.693,42.161,6,42.965,6C43.43,6,44,6.57,44,7.035V13 c-1.343,1.486-3.782,4-8,4s-6.657-2.514-8-4V7.035z" />
        <path d="M31.894,25c-2.398,0-4.565,0.641-6.424,1.673C24.155,25.628,26.943,24,32,24c6.406,0,9.94,3.145,11.4,5.66 C44.158,27.65,42.183,25,39.106,25H31.894z" />
        <path d="M12,34h40v-1.685C51.936,27.948,45.772,22,39.106,22H31.894C25.228,22,19.064,27.948,18,32.315V34z M20.346,31 c1.009-3.526,5.832-7,11.548-7h7.212c5.716,0,10.539,3.474,11.548,7H20.346z" />
        <path d="M11.683,29.464C12.517,26.018,16.797,20,22.542,20c1.859,0,3.117-0.576,4.116-1.414C25.61,19.897,23.688,21.204,23,23 c-3.228,1.154-5.781,3.4-7.054,6.238C15.174,29.055,13.399,29.071,11.683,29.464z" />
        <path d="M48.317,29.464c-1.716-0.393-3.491-0.409-4.263-0.226C42.781,26.4,40.228,24.154,37,23c-0.688-1.796-2.61-3.103-3.658-4.414 C34.341,19.424,35.599,20,37.458,20C43.203,20,47.483,26.018,48.317,29.464z" />
      </g>
    </svg>
  );
};

const ProfileIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="32px"
      height="32px"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1
        }}
        transform="translate(1.406 1.406) scale(2.81 2.81)"
      >
        <path
          d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(255, 255, 255)",
            fillRule: "nonzero",
            opacity: 1
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
const SearchIcon = (() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" viewBox="0 0 50 50">
      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
    </svg>
  )
})
export const Icons = ({ type }: { type: IconType }) => {
  switch (type) {
    case IconType.CartIcon:
      return <CartIcon />
    case IconType.LogoutIcon:
      return <LogoutIcon />
    case IconType.FoodServingIcon:
      return <FoodServingIcon />
    case IconType.ProfileIcon:
      return <ProfileIcon />
    case IconType.SearchIcon:
      return <SearchIcon />
  }
}