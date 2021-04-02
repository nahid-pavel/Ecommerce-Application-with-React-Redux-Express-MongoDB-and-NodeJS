
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


export default function IConfirmModal(props) {
    const { title, message, yesAlertFunc, noAlertFunc, yes, no } = props;
    return confirmAlert({
        title: title,
        message: message,
        buttons: [
            {
                label: yes,
                onClick: () => yesAlertFunc()

            },
            {
                label: no,
                onClick: () => noAlertFunc()

            },

        ]

    })
}


