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

const applyService = {
    addApply,
    getApply,
};

export default applyService;