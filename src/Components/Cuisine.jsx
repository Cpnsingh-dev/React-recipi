import React from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Cuisine = ({ filterArea }) => {

    const featuredArea = [
        "American",
        "British",
        "Canadian",
        "Chinese",
        "Italian",
        "Mexican",
        "Russian",
        "Thai"
    ];

    return (
        <>
            <div className="bg-gray-900/80 border-b border-y-gray-800 shadow-inner shadow-black/20">

                <div className="max-w-8xl mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide">

                    <div className="flex space-x-4 py-3 items-center">

                        {/* Heading */}
                        <div className="flex items-center text-lg font-bold text-yellow-400 mr-3 pr-3 whitespace-nowrap">
                            <Globe className="w-5 h-5 mr-2" />
                            Cuisines
                        </div>

                        {/* Buttons */}
                        {featuredArea.map((area) => (
                            <Link to={`/search/${area}`}
                                onClick={() => filterArea(area)}
                                key={area}
                                className="px-4 py-1.5 bg-gray-800 text-white font-md rounded-full hover:bg-yellow-400 hover:text-black transition"
                            >
                                {area}
                            </Link>
                        ))}

                    </div>

                </div>

            </div>
        </>
    );
};

export default Cuisine;