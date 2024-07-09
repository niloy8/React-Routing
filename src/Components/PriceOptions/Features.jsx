import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Features = ({ feature }) => {
    return (
        <div className="flex items-center m-4">

            <IoMdCheckmarkCircleOutline className="mr-1"> </IoMdCheckmarkCircleOutline><h3 className="font-thin font-semibold">{feature}</h3>

        </div>
    );
};

export default Features;