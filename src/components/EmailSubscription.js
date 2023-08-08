function EmailSubscription() {
    return (
        <div className="bg-black grid grid-cols-1 lg:grid-cols-2 py-16">
            <span className="mx-12 md:pr-16 md:pl-24 pb-12">
                <p className="text-bold text-3xl">Want to get notified on Best Offers?</p>
                <p>Subscribe to our Email to get latest updates</p>
            </span>
            <span className="md:px-16">
                <span className="text-center flex pb-4">
                    <input type="email" placeholder="Enter Email" className="rounded-md w-[300px] px-8 text-black" />
                    <div className="bg-[#00d9fa] w-[200px] ml-6 rounded-md py-2 text-black font-medium cursor-pointer">Notify me</div>
                </span>
                <span>
                    <p>We care about the protection of your data. Read our <p className="text-[#00d9fa]">Privacy Policy</p></p>
                </span>
            </span>
        </div>
    )
}

export default EmailSubscription;