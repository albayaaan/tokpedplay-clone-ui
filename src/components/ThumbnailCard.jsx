const ThumbnailCard = ({ video }) => {
    return (
        <>
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt="Office"
                    src={video.thumbnailUrl}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-20">
                    <div className="p-4">
                        <a href={"videos/" + video._id}>
                            <h3 className="mt-0.5 text-lg text-white">
                                {video.title}
                            </h3>
                        </a>
                    </div>
                </div>
            </article>
        </>
    );
};

export default ThumbnailCard;
