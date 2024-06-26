import { useState } from "react"

const Todo = () => {
    const [store, setStore] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    
    const handleClick = () =>{
        if(value.length > 0){
            const currentTime = new Date().toLocaleTimeString();
            setStore((preVal)=> {
                return [...preVal, {value, finished: false, time: currentTime}];
            });
            setValue("");
        }else{
            alert("please enter atleast one character!");
        }
    }

    const handleFinished = (index) =>{
        setStore((preVal)=> {
            const updatedStore = [...preVal];
            updatedStore[index].finished = true;
            return updatedStore;
        })
    }

    const handleDelete = (index) => {
        setStore((preVal)=> {
            return preVal.filter((_, i) => i !== index);
        });
    };

    // console.log(store);

  return (
    <>
        <div className="w-[100%] bg-white shadow-sm p-6 rounded-sm flex flex-col items-center gap-8 xl:w-[60%] lg:w-[70%] md:w-[80%]">
            <h1 className="text-2xl font-bold">To Do App</h1>
            <div className="">
                <input type="text" placeholder="Enter a item here" value={value} onChange={handleChange} className="outline-none text-lg border border-b-slate-600 p-1"/>
                <button onClick={handleClick} className="px-6 py-1 bg-blue-600 text-white rounded-sm text-lg">Save</button>
            </div>
            <div className="w-full">
                <table className=" w-full flex flex-col gap-4">
                    <thead className="flex flex-col gap-1">
                        <tr className="flex justify-between w-full">
                            <th>NO.</th>
                            <th className="w-1/5">Todo Item</th>
                            <th>Actions</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col gap-1">
                        {
                            store.length > 0 ? (
                                
                                    store.map((item, index)=> (
                                        <>
                                            <tr className="flex justify-between w-full" key={index}>
                                                <td>{index + 1}</td>
                                                <td className={` w-1/5 ${item.finished ? 'line-through': ''}`}>{item?.value}</td>
                                                <td><button onClick={()=> handleDelete(index)} className="px-6 py-1 bg-red-600 rounded-sm text-white">DELETE</button> <button onClick={() => handleFinished(index)} className="px-6 py-1 bg-green-600 rounded-sm text-white">FINISHED</button></td>
                                                <td>{item?.time}</td>
                                            </tr>
                                        </>
                                    ))
                                
                            ) : (
                                <tr>
                                    <td className="text-2xl text-red-500">Empty!</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Todo