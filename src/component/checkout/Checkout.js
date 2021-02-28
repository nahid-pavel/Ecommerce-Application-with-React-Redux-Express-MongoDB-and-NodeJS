import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, shallowEqual } from "react-redux";
import Shipping from './checkoutSteps/shipping/Shipping';
import Payment from './checkoutSteps/payment/Payment';
import Placeorder from './checkoutSteps/placeorder/Placeorder';
import { Nav } from 'react-bootstrap';






export default function Checkout() {

    const [currentStep, setCurrentStep] = React.useState("one");

    const history = useHistory();
    const { profileData } = useSelector(
        (state) => state?.auth,
        shallowEqual
    );

    useEffect(() => {
        if (!profileData?.isAuth) {
            history.push('/')
        }

    }, [profileData, history])


    return (
        <>


            <div className="signUp-parent mt-5">
                <div className={currentStep === "one" ? "activeStep shippingStep" : "shippingStep"}>
                    <Shipping setCurrentStep={setCurrentStep} />
                </div>
                <div className={currentStep === "two" ? "activeStep placeorder" : "placeorder"}>
                    <Payment setCurrentStep={setCurrentStep} />

                </div>
                <div className={currentStep === "three" ? "activeStep payment" : "payment"}>
                    <Placeorder setCurrentStep={setCurrentStep} />

                </div>

            </div>
        </>
    )
}
