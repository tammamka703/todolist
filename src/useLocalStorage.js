
export function useLocalStorage(key){
    const getitems = ()=>{
        return window.localStorage.getItem(key)
    }
    const updateitems = (value)=>{
        window.localStorage.clear()
        window.localStorage.setItem(key,value)
    }
    const setitems =(value)=>{
        window.localStorage.setItem(key,value)
    }
    return {getitems,updateitems,setitems}
}