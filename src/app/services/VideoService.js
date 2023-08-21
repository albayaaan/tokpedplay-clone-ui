const VideoRepository = require("../repositories/VideoRepository");
const ProductRepository = require("../repositories/ProductRepository");
const CommentRepository = require("../repositories/CommentRepository");

async function getAllVideosThumbnail() {
    const videos = VideoRepository.getAllVideos();
    return (await videos).map((video) => {
        return {
            _id: video._id,
            title: video.title,
            thumbnailUrl: video.thumbnailUrl,
        };
    });
}

async function getDetailVideo(videoId) {
    const video = await VideoRepository.getVideoById(videoId);
    const products = [];
    for (let i = 0; i < video.products.length; i++) {
        const product = await ProductRepository.getProductById(
            video.products[i]
        );
        products.push(product);
    }
    const comments = [];
    for (let i = 0; i < video.comments.length; i++) {
        const comment = await CommentRepository.getCommentById(
            video.comments[i]
        );
        comments.push(comment);
    }
    const data = {
        videoId: video._id,
        embedUrl: video.embedUrl,
        products,
        comments,
    };
    return data;
}

module.exports = {
    getAllVideosThumbnail,
    getDetailVideo,
};
