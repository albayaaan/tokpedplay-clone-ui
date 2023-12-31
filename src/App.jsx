import { useState } from "react";
import AppRoute from "./AppRoute";

function App() {
    const [search, setSearch] = useState("");
    return (
        <>
            <header className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end gap-4">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <label className="sr-only" htmlFor="search">
                                    Search
                                </label>

                                <input
                                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                                    id="search"
                                    type="search"
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                    placeholder="Search website..."
                                />

                                <button
                                    type="button"
                                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                                >
                                    <span className="sr-only">Search</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <span
                            aria-hidden="true"
                            className="block h-6 w-px rounded-full bg-gray-200"
                        ></span>

                        <a href="#" className="block shrink-0">
                            <span className="sr-only">Profile</span>
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                        </a>
                        <p className="font-semibold">Tsaqib Abyan</p>
                    </div>
                </div>
            </header>
            <AppRoute search={search} />
        </>
    );
}

export default App;
