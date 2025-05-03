import {TechIcon} from '@/components/TechIcon';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';


export const ToolboxItems = ({ toolboxItems ,className,itemWrapperClassName}: { toolboxItems: { title: string; iconType: React.ElementType; }[];className?:string; itemWrapperClassName?:string}) => {
    return (
        <div className={twMerge('flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",itemWrapperClassName)}>
         {[...new Array(2)].fill(0).map((_, index)=>(
            <Fragment key={index}>
            {toolboxItems.map((item) => (
                <div className="inline-flex items-center gap-4 py-2 px-2 outline outline-2 outline-white/10 rounded-lg" key={item.title}>
                 <TechIcon component={item.iconType}/>
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
            </Fragment>
         ))}      
        </div>
    </div>
    );
}