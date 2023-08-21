import { useState } from "react";

const Comment = ({ videoId, comments }) => {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = async () => {
        const rawResponse = await fetch(
            `http://localhost:3000/videos/${videoId}/comments`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, text }),
            }
        );
        const content = await rawResponse.json();

        console.log(content);
    };

    return (
        <section className="bg-white py-4">
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-900">
                        Comments (20)
                    </h2>
                </div>
                <form className="" onSubmit={handleSubmit}>
                    <input
                        className="py-2 px-4 bg-white rounded-lg rounded-t-lg border mb-2 border-gray-200 text-sm"
                        type="text"
                        placeholder="Write your username..."
                        name="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                    />
                    <div className="py-2 px-4 bg-white rounded-lg rounded-t-lg border mb-2 border-gray-200">
                        <textarea
                            id="comment"
                            rows={2}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                            placeholder="Write a comment..."
                            name="text"
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-slate-200 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
                    >
                        Post comment
                    </button>
                </form>
                {comments.map((comment, index) => {
                    return (
                        <article
                            key={index}
                            className="p-3 text-base bg-white rounded-lg"
                        >
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 font-bold text-sm text-gray-900">
                                        {comment.username}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <time
                                            pubdate=""
                                            dateTime="2022-02-08"
                                            title="February 8th, 2022"
                                        >
                                            {comment.createdAt}
                                        </time>
                                    </p>
                                </div>
                            </footer>
                            <p className="text-gray-500 dark:text-gray-700">
                                {comment.text}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Comment;
