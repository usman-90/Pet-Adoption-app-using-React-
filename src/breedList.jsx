// import { useState, useEffect } from "react";
// const localCache = {};
// export default function useBreedlist(animal) {
//   const [breedList, setBreedList] = useState([]);
//   useEffect(() => {
//     if (!animal) {
//       setBreedList([]);
//     } else if (localCache[animal]) {
//       setBreedList(localCache[animal]);
//     } else {
//       fetchBreeds();
//     }
//     async function fetchBreeds() {
//       setBreedList([]);
//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//       );
//       const jsonres = await res.json();
//       localCache[animal] = jsonres.breeds || [];
//       setBreedList(localCache[animal]);
//     }
//   }, [animal]);
//   return breedList;
// }

const useBreedlist = async ({queryKey}) => {
    const animal = queryKey[1];

    const apiRes = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
   
    if (!apiRes.ok){
        throw new Error(`breeds ${animal} fetch not ok`)
    }
    
    return apiRes.json();
}
 export default useBreedlist;