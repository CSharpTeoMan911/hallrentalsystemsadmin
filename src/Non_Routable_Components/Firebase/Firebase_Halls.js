import { firebase_database } from "./Firebase_Connection";
import { set, ref, push, get, query, orderByKey, limitToFirst, startAt} from "firebase/database";

export async function Load_Halls(page_index) {
    const elements_per_page = 50;

    let return_value = undefined;
    let is_last = false;

    let previous_page_tokens = await localStorage.getItem("previous_page_tokens");
    let current_page_token = await localStorage.getItem("current_page_token");
    let next_page_token = await localStorage.getItem("next_page_token");


      
  switch (page_index) {
    case -1:
        if(previous_page_tokens !== undefined && previous_page_tokens !== null){
            if(typeof previous_page_tokens !== typeof Object){
                previous_page_tokens = await JSON.parse(previous_page_tokens);
            }


            if(previous_page_tokens.length > 1) {
                let current_token = previous_page_tokens.pop();
                await localStorage.setItem("previous_page_tokens", await JSON.stringify(previous_page_tokens));
                await localStorage.setItem("current_page_token", current_token);
                let current_page = (await get(query(ref(firebase_database, '/Halls/Hall_ID'),  orderByKey("Hall_ID"), limitToFirst(elements_per_page), startAt(current_token)))).val();
                await localStorage.setItem("next_page_token", current_page_token);
                return_value = current_page;
            }
            else{
                let current_page = (await get(query(ref(firebase_database, '/Halls/Hall_ID'),  orderByKey("Hall_ID"), limitToFirst(elements_per_page)))).val();
                let keys = Object.keys(current_page);
                let next_page = (await get(query(ref(firebase_database, '/Halls/Hall_ID'),  orderByKey("Hall_ID"), limitToFirst(elements_per_page), startAt(keys[keys.length -1])))).val();
                keys = Object.keys(next_page);
                await localStorage.removeItem("previous_page_tokens");
                await localStorage.setItem("current_page_token", keys[0]);
                await localStorage.setItem("next_page_token", keys[keys.length - 1]);
                return_value = current_page;
            }
        }
      break;
    case 0:
        if(current_page_token !== undefined && current_page_token !== null) {
            return_value = (await get(query(ref(firebase_database, '/Halls/Hall_ID'),  orderByKey("Hall_ID"), limitToFirst(elements_per_page), startAt(current_page_token)))).val();
        }
        else{
            return_value = (await get(query(ref(firebase_database, '/Halls/Hall_ID'), orderByKey("Hall_ID"), limitToFirst(elements_per_page)))).val();
        }
        if(return_value !== null){
          let keys = Object.keys(return_value);

          let current_key = keys[0];
          let current_last_key = keys[keys.length - 1];
          let next_page = (await get(query(ref(firebase_database, '/Halls/Hall_ID'),  orderByKey("Hall_ID"), limitToFirst(elements_per_page), startAt(current_last_key)))).val();
          keys = Object.keys(next_page);
  
          await localStorage.setItem("current_page_token", current_key);
  
          if(current_last_key === keys[keys.length - 1]) {
              await localStorage.removeItem("next_page_token");
              is_last = true;
          }
          else{
              await localStorage.setItem("next_page_token", keys[keys.length - 1]);
          }
        }
      break;
    case 1:
        if(next_page_token !== undefined && next_page_token !== null) {
            is_last = false;
            let next_page = (await get(query(ref(firebase_database, '/Halls/Hall_ID'),  orderByKey("Hall_ID"), limitToFirst(elements_per_page), startAt(next_page_token)))).val();
            let keys = Object.keys(next_page);

            if(keys[keys.length - 1] !== current_page_token){
                return_value = next_page;
                try{
                    previous_page_tokens = await JSON.parse(previous_page_tokens);
                    previous_page_tokens.push(current_page_token);
                }
                catch{
                    previous_page_tokens = [current_page_token];
                }
                await localStorage.setItem("previous_page_tokens", await JSON.stringify(previous_page_tokens));
                await localStorage.setItem("current_page_token", next_page_token);
                let current_last_key = keys[keys.length - 1];

                next_page = (await get(query(ref(firebase_database, '/Halls/Hall_ID'),  orderByKey("Hall_ID"), limitToFirst(elements_per_page), startAt(current_last_key)))).val();
                keys = Object.keys(next_page);

                if(current_last_key === keys[keys.length - 1]) {
                    await localStorage.removeItem("next_page_token");
                }
                else{
                    await localStorage.setItem("next_page_token", keys[keys.length - 1]);
                }
                is_last = false;

            }
            else{
                is_last = true;
            }
        }
      break;
  }

  return {"return_value":return_value, "is_last":is_last}
}

export async function Insert_Hall(
  hall_name,
  hall_location,
  hall_capacity,
  hall_amenities
) {
  if (typeof hall_name === typeof "") {
    if (typeof hall_location === typeof "") {
      if (typeof hall_capacity === typeof 0) {
        if (typeof hall_amenities === typeof {}) {
          let amenities = [];
          let keys = Object.keys(hall_amenities);

          keys.forEach((element) => {
            amenities.push(element);
          });

          const newPostRef = await push(ref(firebase_database, "Halls/Hall_ID"));
          await set(newPostRef, {
            Name: hall_name,
            Location: hall_location,
            Capacity: hall_capacity,
            Amenities: amenities
          });
        }
      }
    }
  }
}

export function Update_Hall() {}

export function Delete_Hall() {}
