import React, { useEffect, useRef, useState } from "react";

const Review = () => {
  const scrollingDiv = useRef();
  const card = useRef(null);
  const [count, setCount] = useState(0);

  let widthDiv = 0;

  const scrollLeft = scrollingDiv.current?.scrollLeft;
  useEffect(() => {
    widthDiv = card.current.offsetWidth;
    scrollBack();
    // console.log(count);
    // console.log("window.onscrollleft : ", scrollLeft);
    // console.log("allWidth : ", scrollingDiv.current.scrollWidth);
    // console.log(scrollingDiv.current.scrollWidth - scrollLeft);
  }, [count]);

  const scrollBack = () => {
    if (scrollingDiv.current?.scrollWidth - scrollLeft <= scrollingDiv.current?.offsetWidth) {
      scrollingDiv?.current?.scrollBy({
        top: 0,
        left: -scrollingDiv.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  // * auto scroll
  // const timeScroll = setInterval(() => {
  //   scrollingDiv?.current?.scrollBy({
  //     top: 0,
  //     left: widthDiv + 20,
  //     behavior: "smooth",
  //   });
  //   setCount(count+1);
  // }, 5000);

  return (
    <div className="relative flex justify-center p-16">
      <div
        ref={scrollingDiv}
        className="w-[900%] whitespace-nowrap overflow-x-hidden overflow-y-hidden"
      >
        <button
          onClick={() => {
            scrollingDiv.current.scrollBy({
              top: 0,
              left: widthDiv + 18 ,
              behavior: "smooth",
            });
            setCount(count + 1);
          }}
          className="absolute right-4 bg-black rounded-full w-10 h-10 text-white top-[50%]"
        >
          right
        </button>
        <button
          onClick={() => {
            scrollingDiv.current.scrollBy({
              top: 0,
              left: -widthDiv + 18,
              behavior: "smooth",
            });
            setCount(count - 1);
          }}
          className="absolute left-4 bg-black rounded-full w-10 h-10 text-white top-[50%]"
        >
          left
        </button>
        <div
          ref={card}
          className="w-[32%] ml-4 inline-block h-[30vh] bg-red-500"
        >0</div>
        <div className="w-[32%] ml-4 inline-block h-[30vh] bg-yellow-500">1</div>
        <div className="w-[32%] ml-4 inline-block h-[30vh] bg-purple-500">2</div>
        <div className="w-[32%] ml-4 inline-block h-[30vh] bg-orange-500">3</div>
        <div className="w-[32%] ml-4 inline-block h-[30vh] bg-pink-500">4</div>
        <div className="w-[32%] ml-4 inline-block h-[30vh] bg-purple-500">5</div>
        <div className="w-[32%] ml-4 inline-block h-[30vh] bg-orange-500">6</div>
        <div className="w-[32%] ml-4 mr-4 inline-block h-[30vh] bg-pink-500">7</div>
      </div>
    </div>
  );
};

export default Review;
