export enum IconType {
  CartIcon = "CartIcon",
  LogoutIcon = "LogoutIcon"
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

export const Icons = ({ type }: { type: IconType }) => {
  switch (type) {
    case IconType.CartIcon:
      return <CartIcon />
    case IconType.LogoutIcon:
      return <LogoutIcon />
  }
}