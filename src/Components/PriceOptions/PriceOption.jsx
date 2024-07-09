import Features from "./Features";


const PriceOption = ({ Pprice }) => {
    const { packageName, price, features } = Pprice
    return (
        <div className="bg-blue-600 p-4 rounded-lg mt-2 text-yellow-300 flex flex-col">
            <h2 className="text-5xl">{packageName}</h2>
            <span className="ml-3 text-2xl">Price : {price}/mt</span>
            <div className="mt-1 p-2 flex-grow">
                {features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)}
            </div>

            <button className="bg-green-500 p-5 text-white rounded-lg w-96  ">Buy Now</button>

        </div>
    );
};

export default PriceOption;