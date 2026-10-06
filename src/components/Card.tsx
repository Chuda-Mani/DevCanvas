import grainImage from "@/assets/images/grain.jpg"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge"

export const Card = ({
    className,
    children,
    ...other
} : ComponentPropsWithoutRef<'div'>) => {
    return (
        <div className={twMerge("group bg-gray-800 rounded-3xl relative z-0 overflow-hidden transition duration-500 hover:shadow-[0_0_60px_-15px] hover:shadow-emerald-300/30 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none after:transition-colors after:duration-500 hover:after:outline-emerald-300/40",className)}
        {...other}
        >

            <div className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            {children}
        </div>
    )
}