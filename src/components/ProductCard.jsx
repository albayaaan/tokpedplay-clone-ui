const ProductCard = ({ product }) => {
    return (
        <>
            <article className="flex bg-white w-10/12 justify-between">
                <div className="">
                    <img
                        alt="product"
                        src={product.imageUrl}
                        className="aspect-square h-40 w-40"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div className="">
                        <a href="#">
                            <h3 className="font-bold uppercase text-gray-900">
                                {product.title}
                            </h3>
                        </a>

                        <p className="line-clamp-3 text-sm/relaxed text-gray-700">
                            {product.price}
                        </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                        <a
                            href={product.productUrl}
                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                            See Prroduct
                        </a>
                    </div>
                </div>
            </article>
        </>
    );
};

export default ProductCard;
