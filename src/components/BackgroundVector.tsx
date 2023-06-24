import skeleton_image from "../assets/bg.webp"; 

const BackgroundVector = () => {
    return(
        <>
            <div className="svg-container-bl">
                <img src={skeleton_image} className="svg-bl" alt=""/>
            </div>
            <div className="svg-container-tr">
                <img src={skeleton_image} className="svg-tr" alt=""/>
            </div>
        </>
    );
};

export default BackgroundVector;
