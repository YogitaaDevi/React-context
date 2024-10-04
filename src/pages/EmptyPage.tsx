import { useContext, useMemo } from "react";
import oopsImage from "../assets/images/oops.jpg";
import { ProductContextProvider } from "../context/ProductContext";

const EmptyPage = () => {
  const { isPayment, isOrder } = useContext(ProductContextProvider);

  const message = useMemo(() => (
    <>
      {
        (!isPayment && !isOrder) ?
        "OOPS. No recent orders available" : "OOPS. Please add items and visit again"
      }
    </>
  ), [isPayment, isOrder]);

  return (
    <div className="text-2xl font-bold flex flex-col items-center w-full">
      <img src={oopsImage} className="h-72" alt="Oops!" />
      {message}
    </div>
  );
};

export default EmptyPage;
