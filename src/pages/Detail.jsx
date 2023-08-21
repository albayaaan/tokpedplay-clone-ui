import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Comment from "../components/Comment";
import { useEffect, useState } from "react";

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        embedUrl: "",
        products: [],
        comments: [],
    });
    useEffect(() => {
        fetch(`http://localhost:3000/videos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className="flex px-3">
            <div>
                <iframe
                    className="w-[758px] h-[426px]"
                    src={data.embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <Comment comments={data.comments} videoId={data.videoId} />
            </div>
            <div className="flex-auto grid grid-cols-1 place-content-start gap-2 px-4">
                {data &&
                    data.products.map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                    })}
            </div>
        </div>
    );
};

export default Detail;
