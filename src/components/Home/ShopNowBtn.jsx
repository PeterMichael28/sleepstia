/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const ShopNowBtn = ({ classNames, label = "Visit Shop" }) => {
  return (
    <button
      className={cn(
        "flex h-[50px] w-[225px] items-center justify-center rounded-[5px] bg-[#FC5959] text-sm font-semibold tracking-[0.14px] text-white",
        classNames,
      )}
    >
      {label}
    </button>
  );
};

export default ShopNowBtn;
