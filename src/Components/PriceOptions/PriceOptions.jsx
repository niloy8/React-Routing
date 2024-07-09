import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const Pricefeatures = [
        {
            "packageName": "Basic",
            "price": 29.99,
            "features": [
                "Access to gym facilities during business hours",
                "Use of cardio equipment and free weights",
                "Limited group fitness classes"
            ]
        },
        {
            "packageName": "Premium",
            "price": 49.99,
            "features": [
                "Access to gym facilities 24/7",
                "Use of cardio equipment, free weights",
                "Unlimited group fitness classes",
                "Personal training sessions (1 per month)",
                "Free guest passes (2 per month)"
            ]
        },
        {
            "packageName": "Elite",
            "price": 79.99,
            "features": [
                "Access to gym facilities 24/7",
                "Use of cardio equipment, f",
                "Unlimited group fitness classes",
                "Personal training sessions (2 per month)",
                "Free guest passes (4 per month)",
                "Priority access to new equipment and facilities",
                "Complimentary towel service and locker room amenities"
            ]
        }
    ]
    return (
        <div>
            <h1 className=" text-3xl text-emerald-400 font-serif text-center mt-3">Best Price Options</h1>
            <div className="p-4 grid grid-cols-3  gap-4">
                {Pricefeatures.map((Pprice, inx) => <PriceOption key={inx} Pprice={Pprice}></PriceOption>)}
            </div>
        </div>
    );
};

export default PriceOptions;