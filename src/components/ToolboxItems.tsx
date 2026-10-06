// import { twMerge } from "tailwind-merge";
// import { TechIcon } from "./TechIcons";

// export const ToolboxItems = ({
//     items,
//     className,
//     itemsWrapperClassName,
// }: {
//     items: {
//         title: string;
//         iconType: React.ElementType;
        
//     }[];
//     className?: string;
//     itemsWrapperClassName?:string;
// }) => {
//     return (
//         <div className={twMerge("flex  [mask-image : linear-gradient(to_right,transparent,black_10%,blac_90%,transparent)]",className)}>
//             <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",itemsWrapperClassName)}>

//                 {[...newArray(2)].fill(0).map((_, index) => {
//                     <Fragment key={index}>
//                         {items.map((item) => (
//                     <div
//                         key={item.title}
//                         className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg transition duration-300 hover:outline-emerald-300/50 hover:bg-white/5">
//                         <TechIcon component={item.iconType} />
//                         <span className="font-semibold">{item.title}</span>
//                     </div>

//                 ))}

//                     </Fragment>
//                 })}
                
//             </div>
//         </div>
//     );
// }

import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcons";
import { Fragment } from "react";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
    highlight?: boolean;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      {/* Pause this row's scroll while the cursor is over it */}
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6 hover:[animation-play-state:paused]", itemsWrapperClassName)}>
        {Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className={twMerge(
                  "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg transition duration-300 hover:outline-emerald-300/50 hover:bg-white/5",
                  item.highlight && "outline-emerald-300/60 bg-gradient-to-r from-emerald-300/15 to-sky-400/15 shadow-[0_0_24px_-6px] shadow-emerald-300/40"
                )}
              >
                <TechIcon component={item.iconType} />
                <span className={twMerge("font-semibold", item.highlight && "gradient-text")}>{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
