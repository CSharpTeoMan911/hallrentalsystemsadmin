export default function Render_Hall_Addition_Amenity(properties) {
    const context =  properties.context;
    let amenityClass = "amenity_disabled";
    let new_value = "Disabled";

    if(properties.value[context] === "Disabled"){
        new_value = "Enabled";
        amenityClass = "amenity_enabled"
    }
    return(
        <button className={amenityClass} onClick={()=>{
            properties.setValue(value => ({
                ...value,
                [context]:new_value
              })
            );
        }}>
            {properties.context}
        </button>
    );
}