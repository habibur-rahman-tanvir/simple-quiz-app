import { useState } from "react";
import StartBanner from "./components/StartBanner";
import Quiz from "./components/Quiz";

const App = () => {
    const [isStart, setIsStart] = useState(false);
    const [category, setCategory] = useState("all");
    const [numOfQuestion, setNumOfQuestion] = useState(20);

    const handleReset = () => {
        setIsStart(false);
    };
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-300 select-none">
            <div className="overflow-hidden shadow-md shadow-black max-w-[90%] min-h-screen sm:min-h-auto min-w-full sm:min-w-[600px] bg-white sm:rounded-xl">
                <h1 className="py-5 pb-6 text-5xl font-bold text-center text-white bg-emerald-700">
                    Quiz
                </h1>
                <div className="p-2.5">
                    {!isStart ? (
                        <StartBanner
                            setIsStart={setIsStart}
                            category={category}
                            setCategory={setCategory}
                            numOfQuestion={numOfQuestion}
                            setNumOfQuestion={setNumOfQuestion}
                        />
                    ) : (
                        <Quiz
                            category={category}
                            numOfQuestion={numOfQuestion}
                            reset={handleReset}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
