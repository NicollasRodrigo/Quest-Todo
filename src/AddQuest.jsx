import React,{ useState } from "react";

function AddQuest(props){
    const [title, setTitle] = useState('')
    

    return(
        <div className="flex gap-4 mt-5 w-full justify-center items-center">
            <input 
            onChange={(event) => setTitle(event.target.value)}
            placeholder="quest" 
            className="bg-slate-500 rounded-full bg-secundary p-1 input-sm flex w-[70%] focus:outline-none"/>
            <button className="bg-blue-800 text-white flex items-center text-center rounded-full bg-primary h-fit px-2 text-lg transform ease-out duration-300"
            onClick={()=>props.saveAddQuest(title)}>
                +
            </button>
        </div>
    );
}
export default AddQuest;