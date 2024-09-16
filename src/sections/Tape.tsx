// import StarIcon from "@/assets/icons/star.svg"
// import { Fragment } from "react";

// const words = [
//   "Performance",
//   "Accessible",
//   "Secure",
//   "Interactive",
//   "Scalable",
//   "User Friendly",
//   "Responsive",
//   "Maintainable",
//   "Search Optimised",
//   "Usable",
//   "Reliable",
// ];

// export const TapeSection = () => {
//   function newArray(arg0: number) {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="py-16 lg:py-24 overflow-x-clip">
//       <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
//         <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//           <div className="flex flex-none gap-4 py-3">
//             {[...newArray(2)].fill(0).map((_, idx) => {
//               <Fragment key={idx}>
              
//               {
//                 words.map(word => (
//                   <div key={word} className="inline-flex gap-4 items-center">
//                     <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
//                     <StarIcon className="size-6 text-gray-900 -rotate-12" />
//                   </div>
//                 ))
//               }
//               </Fragment>
//             })}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimised",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  // Removed the unnecessary function newArray.
  const repeatCount = 2; // Number of times the words array should repeat

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]"
          >
            {[...Array(repeatCount)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
