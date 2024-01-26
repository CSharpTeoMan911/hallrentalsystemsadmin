export function Render_Notification(properties){
    if(properties.showNotification === true){
        if(properties.type == "Error") {
           //"background-color:rgba(255,255,255);"
           console.log("!!! Error render !!!");
            return(
                <div role="alert" aria-live="assertive" aria-atomic="true" className="toast show notification_system" style={{backgroundColor:"rgba(255,255,255)", zIndex:10}} data-autohide="false">
                    <div className="toast-header">
    
                        <img src="https://cdn-icons-png.flaticon.com/128/463/463612.png" className="notification_type_image" alt="Error notification"/>  
    
                        <strong className="mr-auto eror_type">{properties.type}</strong>
    
                        <div className="notification-system-info">
                            <button type="button" className="ml-2 mb-1 close close_notification" data-dismiss="toast" aria-label="Close" onClick={()=>{properties.setShowNotification(false)}}>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" className="close_notification_image" alt="Error notification"/>
                            </button>
                        </div>
                    </div>
                    <div className="toast-body toast-body-custom">
                        <p className="notification_content">
                            {properties.message}
                        </p>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div role="alert" aria-live="assertive" aria-atomic="true" className="toast show notification_system"  style={{backgroundColor:"rgba(255,255,255)"}} data-autohide="false">
                    <div className="toast-header">
    
                        <img src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png" className="notification_type_image" alt="Information notification"/>
    
                        <strong className="mr-auto eror_type">{properties.type}</strong>
    
                        <div className="notification-system-info">
                            <button type="button" className="ml-2 mb-1 close close_notification" data-dismiss="toast" aria-label="Close" onClick={()=>{properties.setShowNotification(false)}}>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" className="close_notification_image" alt="Error notification"/>
                            </button>
                        </div>
                    </div>
                    <div className="toast-body toast-body-custom">
                        <p className="notification_content">
                            {properties.message}
                        </p>
                    </div>
                </div>
            );
        }
    }
    else{
        return<></>
    }
}
