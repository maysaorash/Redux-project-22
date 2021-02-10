import axios from "axios";

export const SEARCH_WORD = "SEARCH_WORD"; //Step-1 Define Action Type
export const SENT = "SENT";
export const CLEAR = "CLEAR";


// export function handleData() {
//     return {
//       type: SEARCH_WORD,

//     };
//   }
  
export const getWikies = searchValue => async dispatch => {
      try {const result=await axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchValue}&format=json&origin=*&limit=10`);
        dispatch(sendResults(result.data));
        console.log(result)
      } catch (error) {
        dispatch(clearResults())
       
      }

    }  

    export function sendResults(result){
      return {
          type: SENT,
          result
      }
  } 

export function clearResults() {
    return {
      type: CLEAR
    };
  }


