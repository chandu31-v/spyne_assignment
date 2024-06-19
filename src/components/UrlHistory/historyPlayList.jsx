import React, { useEffect, useRef, useState } from "react";
import ListComp from "./ListComponentCreator";

function PlayList({HistoryData}) {

    
    const [list,setList] = useState([])

    useEffect(()=>{
        setList([...list,HistoryData])
    },[HistoryData])

    //ref -  refers index value, to swap each other place 
    const drag = useRef(0)
    const dragOver = useRef(0)

    // const handleDragDrop = () => {

    //     //swap the list , using temp variable
    //     const listTemp = [...list.listData]
    //     const temp = listTemp[drag.current]
    //     listTemp[drag.current] = listTemp[dragOver.current]
    //     listTemp[dragOver.current] = temp

    //     //reset state to updated list
    //     setList([...list,listTemp])
    // }

    // draggable 
    // onDragStart={()=>drag.current=index}
    // onDragEnter={()=>dragOver.current=index}
    // onDragEnd={handleDragDrop}
    // onDragOver={(e)=>e.preventDefault()}


    return (<>

        <div className='w-full h-full'>
            {
            list.length>1 ? list?.map((value, index) => {
                return <div key={index} className="sm:h-1/6 h-1/4 pt-2">
                    <ListComp key={index} url={value?.url} caption={value?.caption} timeStamp={value?.timeStamp} />
                </div>
            })
            : null
        }
        </div>

        
    </>)
}

export default PlayList
