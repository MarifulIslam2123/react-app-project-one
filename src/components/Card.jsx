function Card({ cardInfo }) {
    const { Name, Price, des, imgUrl } = cardInfo;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>{des}</p>
                    <p>BDT {Price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card