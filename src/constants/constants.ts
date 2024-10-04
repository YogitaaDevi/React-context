export const LOGIN: string = "/login"
export const HOME: string = "/home"
export const PRODUCT: string = "/home/product"
export const CART: string = "/home/cart"
export const PAYMENT: string = "/home/payment"
export const USER: string = "/home/user"
export const USERPROFILE: string = "/home/user/profile"
export const USERORDER: string = "/home/user/order"




// <Route path="/login" element={<LoginPage />} />
//         <Route index element={<Navigate to="/login" replace />} />
//         <Route element={<PrivateRoute />}>
//           <Route element={<AppLayout />}>
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/home/product" element={<ProductDisplayPage />} />
//             <Route path="/home/cart" element={<CartPage />} />
//             <Route path="/home/user" element={<UserPage/>}/>
//             <Route path="/home/user/profile" element={<ProfilePage/>}/>
//             <Route path="/home/user/order" element={<OrderPage />} />
//             <Route path="/home/payment" element={<PaymentSuccessPage/>}/>
//           </Route>