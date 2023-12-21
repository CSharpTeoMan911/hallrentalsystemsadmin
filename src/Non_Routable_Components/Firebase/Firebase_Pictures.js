import { firebase_storage } from "./Firebase_Connection"
import { ref, list } from "firebase/storage"

export async function Load_Storage_Images(page_index) {
    var return_value = undefined;
    const num_res = 1;
   
    let previous_page_tokens = await localStorage.getItem("previous_page_tokens");
    let current_page_token = await localStorage.getItem("current_page_token");
    let next_page_token = await localStorage.getItem("next_page_token");
    let page = undefined;

    console.log(previous_page_tokens);
    console.log(next_page_token);

    const listRef = ref(firebase_storage, '/');

    switch(page_index){
        case -1:
            if(previous_page_tokens !== null || [previous_page_tokens !== undefined]){
                try{
                    previous_page_tokens = previous_page_tokens.split(",");
                }catch{
                    previous_page_tokens = [previous_page_tokens];
                }

                current_page_token = previous_page_tokens.pop();

                page = await list(listRef, { maxResults: num_res, pageToken: current_page_token });
                await localStorage.setItem("previous_page_tokens", previous_page_tokens);
                await localStorage.setItem("current_page_token", current_page_token);
                await localStorage.setItem("next_page_token", page.nextPageToken);
                return_value = page.items[0]._location.path_;
            }
            break;
        case 0:
            if(current_page_token === null || [current_page_token === undefined]){
                page = await list(listRef, { maxResults: num_res });
                await localStorage.setItem("next_page_token", page.nextPageToken);
            }else{
                page = await list(listRef, { maxResults: num_res, pageToken: current_page_token});
                await localStorage.setItem("next_page_token", page.nextPageToken);
            }
            return_value = page.items[0]._location.path_;
            break;
        case 1:      
            if(next_page_token !== undefined || next_page_token !== null) {
                if(current_page_token !== null || current_page_token !== undefined){
                    page = await list(listRef, { maxResults: num_res, pageToken: current_page_token});

                    if(page.nextPageToken)
                    {
                        try{
                            previous_page_tokens = previous_page_tokens.split(",")
                            previous_page_tokens.push(current_page_token);
                        }catch{
                            previous_page_tokens = [current_page_token]
                        }
                        await localStorage.setItem("previous_page_tokens", previous_page_tokens);
        
                        page = await list(listRef, { maxResults: num_res, pageToken: current_page_token});
                        await localStorage.setItem("current_page_token", page.nextPageToken);
    
                        page = await list(listRef, { maxResults: num_res, pageToken: page.nextPageToken});
                        if(page.nextPageToken){
                            await localStorage.setItem("next_page_token", page.nextPageToken);
                        }
                        else{
                            await localStorage.setItem("next_page_token", undefined);
                        }   

                        return_value = page.items[0]._location.path_;
                    }
                }
            }
            break;
    }

    return return_value;
}

export function Insert_Storage_Image() {
    
}

export function Delete_Storage_Image() {

}