import { faL } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue"

export const getTreeviewItems = () => {
    const data = ref(null);    
    const error = ref(false);       
    let itemsArr = ref([]); 

    const getItems = (items, event, text) => {    
        try {
            itemsArr = items || [];
            if (event) {
                itemsArr.push(text);
            } else {
                for (var i = itemsArr.length - 1; i >= 0; i--) {
                    if (itemsArr[i] == text) {
                        itemsArr.splice(i, 1);
                    }
                }
            }
            data.value = itemsArr;            
        } catch {
            error.value = true;
        }        
    }

    return {
        getItems,
        data,
        error        
    }
}