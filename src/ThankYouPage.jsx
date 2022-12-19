import React from 'react';
import thanYou from '../src/common/images/thank-you.png'
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const ThankYouPage = () => {
    const navigate = useNavigate();
    return (
        <div className="app" style={{ maxHeight: '100vh'}}>
                <div style={{paddingTop: '80px'}}>
                    <img className="thank_image" alt="thank-you" src={thanYou} width={500} height={440}/>
                </div>

                <p className="thank_title">
                    Thank you for taking part in our survey
                </p>
                <p className="thank_subtitle">
                    We want to make the best content writing services out there so we are doing a lot of research. We will notify you as soon as the service launches, and we'll send you a discount coupon.
                </p>
                <Button
                    style={
                        {
                            margin: 'auto',
                            width: '162px',
                            backgroundColor: '#367FD3',
                            borderRadius: '4px',
                            fontSize: '16px',
                            height: '40px',
                            display: 'block',
                            marginTop: '64px',
                            fontWeight: 700
                        }
                    }
                    type="primary"
                    htmlType="submit"
                    onClick={() => navigate('/')}
                >
                    Go to Homepage
                </Button>
            </div>

    );
};

export default ThankYouPage;