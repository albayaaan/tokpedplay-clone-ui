import { useEffect, useState } from "react";
import ThumbnailCard from "../components/ThumbnailCard";

const Home = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/videos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVideos(data);
            });
    }, []);

    return (
        <div className="grid grid-cols-4 gap-3 px-3">
            {videos.map((video, index) => {
                return <ThumbnailCard key={index} video={video} />;
            })}
        </div>
    );
};

export default Home;
