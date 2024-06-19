import React, { forwardRef } from "react";

function Input({ type = "text", placeholder="",ref}) {

    

    return (<>
        <div className="w-full my-2">
            <div className="flex justify-center w-full">
                <input 
                    ref={ref}
                    type={type} 
                    placeholder={` ${placeholder}`}
                    className={`border-[1px] border-black hover:border-green-400 rounded h-8 font-thin bg-gray-300`} />
            </div>
        </div>
    </>)
}

//export default Input
export default forwardRef(Input)
