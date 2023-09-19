import React from "react";


function OnboardingQuoteCard() {
  return (
    <div className="max-w-[22rem] md:max-w-md mx-auto px-4 pt-4 pb-8 bg-dark rounded-3xl">
      <p className="text-white text-xl md:text-3xl font-semibold">
        TalentYard is a <span className="text-accentSecondary">playground</span>{" "}
        for innovative talents
        <div className="flex space-x-2 my-5">
          <div>
            <svg
              width="40"
              height="29"
              viewBox="0 0 40 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.248 28.336C8.46933 28.336 6.844 27.876 5.372 26.956C3.96133 25.9747 2.82667 24.656 1.968 23C1.10933 21.2827 0.68 19.32 0.68 17.112C0.68 15.272 1.048 13.4933 1.784 11.776C2.52 9.99733 3.532 8.34133 4.82 6.80799C6.108 5.27466 7.64133 3.92533 9.42 2.76C11.1987 1.53333 13.1 0.643999 15.124 0.0919988L19.172 4.968C16.6573 6.072 14.6027 7.39066 13.008 8.92399C11.4747 10.4573 10.708 11.776 10.708 12.88C10.708 13.616 10.9533 14.2907 11.444 14.904C11.996 15.5173 12.6707 16.1 13.468 16.652C14.8787 17.756 15.8293 18.768 16.32 19.688C16.872 20.5467 17.148 21.4973 17.148 22.54C17.148 24.3187 16.504 25.7293 15.216 26.772C13.928 27.8147 12.272 28.336 10.248 28.336ZM30.764 28.336C28.9853 28.336 27.36 27.876 25.888 26.956C24.4773 25.9747 23.3427 24.656 22.484 23C21.6253 21.2827 21.196 19.32 21.196 17.112C21.196 15.272 21.564 13.4933 22.3 11.776C23.036 9.99733 24.048 8.34133 25.336 6.80799C26.624 5.27466 28.1573 3.92533 29.936 2.76C31.7147 1.53333 33.616 0.643999 35.64 0.0919988L39.688 4.968C37.1733 6.072 35.1187 7.39066 33.524 8.92399C31.9907 10.4573 31.224 11.776 31.224 12.88C31.224 13.616 31.4693 14.2907 31.96 14.904C32.512 15.5173 33.1867 16.1 33.984 16.652C35.3947 17.756 36.3453 18.768 36.836 19.688C37.388 20.5467 37.664 21.4973 37.664 22.54C37.664 24.3187 37.02 25.7293 35.732 26.772C34.444 27.8147 32.788 28.336 30.764 28.336Z"
                fill="#4D90DB"
              />
            </svg>
          </div>
          <p className="font-light text-white text-sm md:text-xl">
            The goal of TalentYard is not just about connecting talents with
            work opportunities, it’s about fostering a community of innovative
            and disruptive minds.
          </p>
        </div>
      </p>
    </div>
  );
}

export default OnboardingQuoteCard;
