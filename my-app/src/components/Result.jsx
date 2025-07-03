const Reaction = ({ children }) => {
    return (
        <div className="flex justify-center mb-5">
            <span className="my-8 sm:my-0 text-8xl">{children}</span>
        </div>
    );
};

const Result = ({ score, totall, reset }) => {
    let persentage = Math.round((score / totall) * 100);
    return (
        <div>
            {(() => {
                if (persentage >= 99) return <Reaction>😍</Reaction>;
                if (persentage >= 80) return <Reaction>🥰</Reaction>;
                if (persentage >= 50) return <Reaction>🥳</Reaction>;
                if (persentage >= 40) return <Reaction>😢</Reaction>;
                if (persentage >= 33) return <Reaction>🥺</Reaction>;
                if (persentage >= 20) return <Reaction>😭</Reaction>;
                if (persentage >= 10) return <Reaction>😰</Reaction>;
                if (persentage > 0) return <Reaction>😵</Reaction>;
                return <Reaction>🤡</Reaction>;
            })()}

            <h2 className="mb-1 text-6xl font-semibold text-center neon-text">
                {persentage}%
            </h2>
            <p className="mb-3 font-semibold text-center text-green-700">
                Your Score is{" "}
                <span className="font-extrabold text-pink-700">
                    {score} of {totall}
                </span>
            </p>
            <button
                className="block w-2/3 py-1 mx-auto mb-3 text-4xl font-semibold text-white uppercase rounded-md shadow-md bg-emerald-700 shadow-black"
                onClick={reset}
            >
                Re-Start
            </button>
        </div>
    );
};

export default Result;
