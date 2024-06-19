import React from "react";

function ListComp({ url,caption,timeStamp }) {


    //on click, index value is updated to clicked component index
    // const handleClick = () => {
    //     //console.log(list.listData[id].sources[0])
    //     setList({ ...list, index: id })
    // }

    return (<>
        <div className={`w-full h-full text-gray-200 px-2 hover:bg-gray-500 font-semibold rounded bg-gray-400 opacity-70`}>
            <button onClick={null} className="w-full h-full">
                <div className="flex w-full">
                    <div className=" text-black">
                        {caption}
                    </div>
                </div>
            </button>
        </div>
    </>)
}

export default ListComp
