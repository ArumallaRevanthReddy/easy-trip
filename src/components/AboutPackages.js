import Travel from '../assets/travel.jpg';

function AboutPackages() {
    return (
        <div className="bg-white px-4 py-16 text-black">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <img className="mx-8 px-32" src={Travel} alt='/' />
                <div className="flex flex-col justify-center text-center mx-12 py-4">
                    <h1 className="font-bold text-lg pb-4">TRAVEL PACKAGES</h1>
                    <p className="pb-16">
                        Welcome to Easy Trip, Our curated range of options suits various budgets and preferences,
                        ensuring travel is accessible to all. We stand out by delivering exceptional adventures,
                        going beyond the ordinary to create lasting memories. Our team of experts negotiates the best deals,
                        guaranteeing competitive prices without compromising quality. With Easy Trip,
                        you can confidently invest in your travel aspirations,
                        knowing you'll receive unparalleled value.
                        Join us on a journey where affordability meets uniqueness and
                        book your next adventure with Easy Trip today!
                    </p>
                    <div className="bg-[#00d9fa] w-[200px] mx-auto rounded-md py-3 text-black font-medium cursor-pointer">Explore</div>
                </div>
            </div>
        </div>
    )
}

export default AboutPackages;