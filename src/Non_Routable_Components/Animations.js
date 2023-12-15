let animations = {};
let animations_values = {};
let animations_offsets = {}


function Gradient_Flutuation_Animation(element_id, min_offset, max_offset, rgb1, rgb2) {
    let element = document.getElementById(element_id);
    let current_gradient_value = animations_values[element_id];
    let rgb_string_1 = "rgb("+ rgb1.r + "," + rgb1.g + "," + rgb1.b + ")";
    let rgb_string_2 = "rgb("+ rgb2.r + "," + rgb2.g + "," + rgb2.b + ")";
 
    console.log(rgb_string_1)
    element.style.background = "linear-gradient(to left, " + rgb_string_1 + current_gradient_value + "%, " + rgb_string_2 + " 80%)";
    element.style.background = "-moz-linear-gradient(to left, " + rgb_string_1 + current_gradient_value + "%, " + rgb_string_2 + " 80%)";
    
    console.log(animations_values[element_id]);

    switch(animations_offsets[element_id])
    {
        case true:
            if(animations_values[element_id] < max_offset)
            {
                animations_values[element_id]++;
            }
            else{
                animations_offsets[element_id] = false;
            }
            break;
        case false:
            if(animations_values[element_id] > min_offset)
            {
                animations_values[element_id]--;
            }
            else{
                animations_offsets[element_id] = true;
            }
            break;
    }
}

export async function Unset_Gradient_Flutuation_Animation(element_id) {
    Object.keys(animations).forEach(async(element)=> {
        if(element === element_id) {
            await clearInterval(animations[element_id]);
            delete animations[element_id];
        }
    });
}

export async function Clear_All_Intervals() {
    Object.keys(animations).forEach(element => {
        clearInterval(animations[element]); 
    });
}

export async function Set_Gradient_Flutuation_Animation(element_id, min_offset, max_offset, rgb1, rgb2, interval){
    if(element_id != undefined || element_id != null)
    {
        animations_values[element_id] = max_offset;
        animations_offsets[element_id] = true;
        animations[element_id] = await setInterval(async()=>{
            await Gradient_Flutuation_Animation(element_id, min_offset, max_offset, rgb1, rgb2);
        }, interval);
    }
}