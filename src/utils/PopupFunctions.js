import { showMessage } from "react-native-flash-message";

const showError = (message, description)=>{
    showMessage({
        type: 'danger',
        icon:'danger',
        message,
        description,
        duration: 2000
    })
}

const showSuccess =(message)=>{
    showMessage({
        type:'success',
        icon:'success',
        message
    })
}
const showInfo =(message)=>{
    showMessage({
        type:'info',
        icon:'info',
        message
    })
}

export {
    showInfo,
    showError,
    showSuccess
}