import storageManager from "./storageManager"

const addApply = (payload) => {
    const applyItem = storageManager.get();
    if(applyItem !== null){
        const combineItem = [...applyItem, payload];
        storageManager.set(combineItem)
    }else{
        storageManager.set([payload]);
    }

    
    return{
        data: payload,
    };
};

const getApply = () => {
    const result = storageManager.get();
    const response = {
        data: result !== null ? result : [],
    };
    return response;
};

const updateApply = (applyId, payload) => {
    const listApply = storageManager.get();
    const updatedApply = listApply.map((item) => {
        if(item.id === applyId){
            return{
                ...item,
                ...payload
            };
        }
        return item;        
    });
    storageManager.set(updateApply);
    return {
        data: payload,
    };
};

const deleteApply = (applyId) => {
    const listApplys = storageManager.get();
    const newApplys = listApplys.filter((item)=> item.id !== applyId)

    storageManager.set(newApplys);
}

const applyService = {
    addApply,
    getApply,
    updateApply,
    deleteApply,
};

export default applyService;