import React from "react";
function Loading() {
  return (
    <div className="flex flex-col justify-center mx-auto mt-5">
      <div className="relative w-[35px] h-[35px] animate-spin mx-auto">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            opacity="0.5"
            d="M17.5 2.9165C14.6157 2.9165 11.7961 3.7718 9.3979 5.37424C6.99968 6.97668 5.1305 9.25428 4.02672 11.919C2.92294 14.5838 2.63415 17.516 3.19685 20.3449C3.75955 23.1738 5.14848 25.7723 7.18799 27.8118C9.22751 29.8513 11.826 31.2403 14.6549 31.803C17.4838 32.3657 20.416 32.0769 23.0808 30.9731C25.7455 29.8693 28.0231 28.0001 29.6256 25.6019C31.228 23.2037 32.0833 20.3841 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM17.5 29.1665C15.1925 29.1665 12.9369 28.4823 11.0183 27.2003C9.09974 25.9184 7.60439 24.0963 6.72137 21.9645C5.83835 19.8327 5.60731 17.4869 6.05747 15.2238C6.50763 12.9607 7.61877 10.8819 9.25039 9.25026C10.882 7.61865 12.9608 6.5075 15.2239 6.05734C17.487 5.60718 19.8328 5.83822 21.9646 6.72124C24.0964 7.60427 25.9185 9.09961 27.2004 11.0182C28.4824 12.9368 29.1666 15.1924 29.1666 17.4998C29.1666 20.594 27.9375 23.5615 25.7495 25.7494C23.5616 27.9373 20.5942 29.1665 17.5 29.1665Z"
            fill="white"
          />
          <path
            d="M29.1667 17.4998H32.0833C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2404 10.1497 29.1662 8.54205 27.812 7.18786C26.4578 5.83368 24.8501 4.75948 23.0808 4.02659C21.3115 3.29371 19.4151 2.9165 17.5 2.9165V5.83317C20.5942 5.83317 23.5617 7.06233 25.7496 9.25026C27.9375 11.4382 29.1667 14.4056 29.1667 17.4998Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="text-white font-bold text-center ">Loading...</p>
    </div>
  );
}

export default Loading;