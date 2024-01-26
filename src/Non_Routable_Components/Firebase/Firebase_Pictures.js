import { firebase_storage } from "./Firebase_Connection"
import { ref, list, getDownloadURL, deleteObject, uploadBytes } from "firebase/storage"

export async function Clear_Pictures_Local_Storage_Values() {
    localStorage.removeItem("previous_page_tokens");
    localStorage.removeItem("current_page_token");
    localStorage.removeItem("next_page_token");
}

export async function Load_Storage_Images(page_index) {
    let return_value = undefined;
    let is_last = false;
    const max_elements_per_page = 50;
   

    let previous_page_tokens = await localStorage.getItem("previous_page_tokens");
    let current_page_token = await localStorage.getItem("current_page_token");
    let next_page_token = await localStorage.getItem("next_page_token");
    let page = undefined;

    const listRef = ref(firebase_storage, '/');

    switch(page_index){
        case -1:
            if(previous_page_tokens !== null && previous_page_tokens !== undefined){
                if(previous_page_tokens.length > 0){
                    try{
                        previous_page_tokens = await JSON.parse(previous_page_tokens);
                    }catch{
                        previous_page_tokens = [previous_page_tokens];
                    }
    
                    current_page_token = await previous_page_tokens.pop();
    
                    page = await list(listRef, { maxResults: max_elements_per_page, pageToken: current_page_token });
                    await localStorage.setItem("previous_page_tokens", await JSON.stringify(previous_page_tokens));
                    await localStorage.setItem("current_page_token", current_page_token);
                    await localStorage.setItem("next_page_token", page.nextPageToken);
    
                    if(previous_page_tokens.length === 0) {
                        await Clear_Pictures_Local_Storage_Values();
                        page = await list(listRef, { maxResults: max_elements_per_page });
                        await localStorage.setItem("next_page_token", page.nextPageToken);
                    }

                    return_value = await Extract_Download_URLs(page.items);
                }
            }
            else{
                page = await list(listRef, { maxResults: max_elements_per_page });
                await localStorage.setItem("next_page_token", page.nextPageToken);
                return_value = await Extract_Download_URLs(page.items);
            }
            break;
        case 0:
            if(current_page_token === null && current_page_token === undefined){
                page = await list(listRef, { maxResults: max_elements_per_page });
                await localStorage.setItem("next_page_token", page.nextPageToken);
            }else{
                page = await list(listRef, { maxResults: max_elements_per_page, pageToken: current_page_token});
                await localStorage.setItem("next_page_token", page.nextPageToken);
            }

            return_value = await Extract_Download_URLs(page.items);
            break;
        case 1:      
            if(next_page_token !== undefined && next_page_token !== null) {
                page = await list(listRef, { maxResults: max_elements_per_page, pageToken: current_page_token});

                if(page.nextPageToken)
                {
                    try{
                        previous_page_tokens = await JSON.parse(previous_page_tokens)
                        previous_page_tokens.push(current_page_token);
                    }catch{
                        previous_page_tokens = [current_page_token]
                    }
                    await localStorage.setItem("previous_page_tokens", await JSON.stringify(previous_page_tokens));
    
                    page = await list(listRef, { maxResults: max_elements_per_page, pageToken: current_page_token});
                    await localStorage.setItem("current_page_token", page.nextPageToken);

                    page = await list(listRef, { maxResults: max_elements_per_page, pageToken: page.nextPageToken});
                    if(page.nextPageToken){
                        await localStorage.setItem("next_page_token", page.nextPageToken);
                    }
                    else{
                        await localStorage.setItem("next_page_token", undefined);
                    }   

                    return_value = await Extract_Download_URLs(page.items);
                }
                else{
                    page = await list(listRef, { maxResults: max_elements_per_page, pageToken:current_page_token });
                    is_last = true;
                    return_value = await Extract_Download_URLs(page.items);
                }
            }
            break;
    }
    return {"return_value":return_value, "is_last":is_last};
}

async function Extract_Download_URLs(items) {
    let return_value = [];

    for(var i = 0; i < items.length; i++) {
        let picture_object = {}
        picture_object["location"] = items[i]._location.path_;
        let download_url = await getDownloadURL(ref(firebase_storage, items[i]._location.path_));
        picture_object["download_url"] = download_url; 
        return_value.push(picture_object)
    }

    return return_value;
}


export async function Insert_Storage_Image(file_name, file_bytes) {
    // CREATE A STORAGE BUCKET NODE WITH THE SAME NAME AS THE PICTURE WE WANT TO ADD
    const file_ref = ref(firebase_storage, file_name);

    // UPLOAD THE BINARY INFO OF THE PICTURE WITHIN THE NODE CREATED
    await uploadBytes(file_ref, file_bytes);
}

export async function Delete_Storage_Image(img_location) {
    try{
        // DELETE THE FIREBASE IMAGE AT THE SPECIFIED NODE LOCATION 
        await deleteObject(ref(firebase_storage, img_location));
        return true;
    }
    catch{
        return false;
    }
}