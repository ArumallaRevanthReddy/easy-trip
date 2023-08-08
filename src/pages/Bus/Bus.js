function BusBooking() {
    return (
        <div className="ml-48 flex justify-center">
            <span className="mx-8">
                <p>From: </p>
                <input />
            </span>
            <span className="mx-8">
                <p>To: </p>
                <input />
            </span>
            <button className="align-top">search</button>
        </div>
    )
}

export default BusBooking;