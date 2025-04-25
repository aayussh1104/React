import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Hompage() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) =>state.paste.pastes)

    useEffect(()=>{
        console.log("Inside useEffect")
        if(pasteId){
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
        
    }, [pasteId])

    function createPaste(){
        const paste = {
            title : title,
            content : value,
            _id : pasteId ||
                Date.now().toString(36),
            createdAt : new Date().toISOString(),
        }

        if(pasteId){
            // update paste
            dispatch(updateToPastes(paste));
        }
        else{
            // create
            dispatch(addToPastes(paste));
        }

        // after creation or updation
        setTitle('');
        setValue('');
        setParams({});
        
    }

    return (
        <div>
            <div className=' flex flex-row gap-7 place-content-between'>
                <input 
                    className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
                    type=""
                    placeholder='Enter title here'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <button onClick={createPaste} className='p-2 rounded-2xl mt-2'>
                    {pasteId ? "Update Paste" : "Create Paste"}
                </button>
            </div>

            <div className = "mt-8">
                <textarea 
                className = "rounded-2xl mt-4 min-w-[500px] p-4 "
                value = {value}
                placeholder='Enter content here'
                onChange={(e)=> setValue(e.target.value)}
                rows={20}
                />
            </div>
        </div>
    )
}

export default Hompage
