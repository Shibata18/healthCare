import React from 'react';
import { Widget } from 'rasa-webchat';



export default function ChatBot() {

    return (
        <Widget
            selector={"#webchat"}
            interval={1000}
            customData={{ "language": "pt-BR" }}
            socketUrl={"https://e75a636b051c.ngrok.io"}
            socketPath={"/socket.io/"}
            title={"Anamna Bot"}
            subtitle={"Digite 'Oi' para começarmos"}
            inputTextFieldHint={"Sua mensagem..."}
            connectingText={"Conectando..."}
            hideWhenNotConnected={true}
            fullScreenMode={true}
            showFullScreenButton={true}
            profileAvatar={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD////8/Pw7OztNTU2dnZ1zc3OZmZlDQ0OmpqYmJibx8fFsbGwuLi6+vr7q6uo2NjaTk5Pj4+OMjIyFhYWysrL39/ddXV1WVlbIyMgRERHu7u7Pz89ubm5kZGTX19d7e3urq6tGRkYXFxcqKioMDAwgICD14oseAAAEa0lEQVR4nO3a63aiMBSGYTdqaSseQMVDrdo69f4vcRJASELSI9q1ut7nz3SYPcJHEpJgez0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD3DY4fVdwNujvbKunusz7pnMvi/YqF5OOuztYXWXX1WZ8+ZyTD9yuGIq9dnW0gctfVZ33Wxwljie67OhsJr4GEJPwaEl4DCUn4NSS8BhL+rYSPs9n41KoIJbSrH70V/fHWOvKrCZNJFonI0y519krehE31rPj7QdyN33NZMd3N/zUHrYT7eNu7gSrhXSa1fGk1iCehXX1WR0QerIqjWfHwdjlsJlyIzLvP01Yk3E70lRyW6Xy4meqmeTYqWglPm0v1w+ZJV+9bCZfqcHRYzlXFSDfkujpuJFTbztvshouE6oZHD2V3622Tgzq3se93E/4rqquufHrWjXV0E2aSD6vPO+kGj6pcTUJ1D6LbbPdVwlhFymbGsVTM4eImVBd8GDvViZNwlpodXTdX2Yp1QtVp8n43CT6iEqoHwsY+mKhjdWQn4cRTrdrDGYe2O5Gy318Sqnv6dP7RdX9eXz/wDu7Ro3HMTpj4q402HB/f3ILeuhrYZcKz7gbtoivRCT2zgWqpffWjnTDz9a6JmTCTl+DZioSzUasbXJNOuGwfnkWyq360Eq7Ed/1jI6HqkeFFkkqYDHKRyfcv+Mt0Qt+Q30hUDRQr4dK/wNk1CVV7+tY3JZXwJXfnzitTCae+44v6cWolnEoWqL5cddYep41BsQS4yURfUwk9nVR1U5G0/MlK6O3SRTetEo5zf0WpSHj81oV+Wz/0nK+v2Ux4Dg2yuvq1vjM+KmG0D//zVQR3T/UjxUz4+JmE73TCwc1bMJzwVGeJRcxe+kGLB/tE4bf3h6Z9vTbtZ8bAyutJxFYnPE3fm+uqhDeb7bVQwpfQJJJ7N3VN2+5kFD5bmTCe3vJpGko4Ck4i3q8bm4TpZQ3qUybMbjojBhKmoUei+JM316ymC++UWSgTrvNbLtv8CWe55PVfEnMVM/Tff+Po8p1lWzUOZ2qbnd3kFUYvkHCbWW8brG+5n7z91Ei4VRWhb+svz9I3tX3KZ4GijvkS9jNzbaw6rPmrCoPI14HNll1JYLCas4Xejphzf7xbtl/zdaJMuJ3s6hSnVGUw5oS1s1JTmwfZ1d/sn9ODvlCr7+r94sb73b/znqa5D/rFTnj4/kiZcK+verG+vx8kS/3qyNrdqBZ9eTVeCSajpnoyKu+GPTqTvKpwf4nDnPGPxpbrpD9SrrOeu7RhseiPouKP6dEq0Y8+yY02GdvV+oWS+55mU1bkzssm+31pXveOtyLhdd5MPUblOnI9GVWvNw9z9ym3zsRZbQ2a6kVRHUls/5/VRN8XdzzeWw113+zFYpHAaunn9pfHxmmwiIfzxPvbQavYXYWo6uEwratXaevhrytaa5dnK/JjXI/+4zJ2awEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwF/0H/qxK9DN24FUAAAAAElFTkSuQmCC"}
            params={{
                images: {
                    dims: {
                        width: 250,
                        height: 200,
                    }
                },
                "storage": "session"
            }}
        />
    );
}