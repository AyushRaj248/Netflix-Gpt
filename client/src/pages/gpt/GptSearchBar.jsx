import React, { useRef, useState } from "react";
import { ai } from "../../utils/OpenAi";
import { Type } from "@google/genai";
import { useDispatch } from "react-redux";
import { addSearchedShows } from "../../redux/gpt.slice";
import GptSearchListItems from "./GptSearchListItems";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const searchText = useRef({});

  const searchQuery =
    "You are an intelligent movie and TV show recommendation system. The user will provide ONLY a movie name. Your task is to automatically identify the movie and recommend similar movies and TV shows based on that title. For the movie" +
    searchText.current.value;

  const handleSubmit = async () => {
    console.log(searchText.current.value);

    async function main() {
      try {
        setIsLoading(true);
        const response = await ai.models.generateContent({
          model: "gemini-1.5-flash",
          contents: searchQuery,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  movieName: {
                    type: Type.STRING,
                  },
                },
                propertyOrdering: ["movieName"],
              },
            },
          },
        });
        setIsLoading(false);
        dispatch(addSearchedShows(JSON.parse(response.text)));
      } catch (error) {
        console.log("error");
      }
    }

    await main();
  };
  // Groq API key removed for security
  return (
    <div>
      <div className="flex justify-center items-center w-full px-4 py-4 sm:py-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative flex-grow">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              ref={searchText}
              type="text"
              placeholder="Search for a movie..."
              className="w-full pl-10 pr-4 py-3 text-gray-900 text-sm sm:text-base bg-transparent outline-none placeholder-gray-400 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="px-5 py-3 bg-blue-500 text-white font-medium text-sm sm:text-base rounded-r-lg hover:bg-blue-600 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
          >
            Search
          </button>
        </form>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-72">
          <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-blue-600"></div>
        </div>
      ) : (
        <GptSearchListItems />
      )}
    </div>
  );
};

export default GptSearchBar;
