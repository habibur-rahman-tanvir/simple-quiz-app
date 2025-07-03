import { useMemo, useRef, useState } from "react";
import { data } from "../assets/data";
import Result from "./Result";

const Quiz = ({ category, numOfQuestion, reset }) => {
    const [index, setIndex] = useState(0);
    const [locked, setLocked] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);

    const getFilteredData = (category, numOfQue, data) => {
        if (category === "all") {
            return data.sort(() => Math.random() - 0.5).slice(0, numOfQue);
        }
        return data
            .filter((item) => item.category === category)
            .sort(() => Math.random() - 0.5)
            .slice(0, numOfQue);
    };

    const currentData = useMemo(() => {
        return getFilteredData(category, numOfQuestion, data);
    }, []);

    const option1Elem = useRef();
    const option2Elem = useRef();
    const option3Elem = useRef();
    const option4Elem = useRef();
    const optionElemArr = [option1Elem, option2Elem, option3Elem, option4Elem];

    const checkAnswer = (ans) => {
        if (locked) return;
        if (currentData[index].ans === ans) {
            optionElemArr[ans - 1].current.style.background = "green";
            setScore((prev) => prev + 1);
        } else {
            optionElemArr[ans - 1].current.style.background = "red";
            optionElemArr[currentData[index].ans - 1].current.style.background =
                "lightgreen";
        }
        setLocked(true);
    };

    const next = () => {
        if (!locked) return;
        if (index >= currentData.length - 1) {
            setResult(true);
            return;
        }
        optionElemArr.forEach((element) => {
            element.current.style.background = "";
        });
        setLocked(false);
        setIndex((prev) => prev + 1);
    };

    return (
        <div>
            {!result ? (
                <>
                    <h2 className="mb-2.5 text-lg text-gray-900 font-bold">
                        <span>{index + 1}.</span> {currentData[index].question}
                    </h2>
                    <ul className="space-y-2.5">
                        <li
                            ref={option1Elem}
                            onClick={() => checkAnswer(1)}
                            className="px-2 py-1 text-lg italic font-semibold text-gray-800 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-200 "
                        >
                            {currentData[index].option1}
                        </li>
                        <li
                            ref={option2Elem}
                            onClick={() => checkAnswer(2)}
                            className="px-2 py-1 text-lg italic font-semibold text-gray-800 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-200 "
                        >
                            {currentData[index].option2}
                        </li>
                        <li
                            ref={option3Elem}
                            onClick={() => checkAnswer(3)}
                            className="px-2 py-1 text-lg italic font-semibold text-gray-800 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-200 "
                        >
                            {currentData[index].option3}
                        </li>
                        <li
                            ref={option4Elem}
                            onClick={() => checkAnswer(4)}
                            className="px-2 py-1 text-lg italic font-semibold text-gray-800 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-200 "
                        >
                            {currentData[index].option4}
                        </li>
                    </ul>
                    <button
                        className={`block ${
                            locked
                                ? "opacity-100 shadow cursor-pointer shadow-black"
                                : "opacity-40"
                        } w-2/3 m-auto mt-5 text-2xl py-0.5 font-extrabold text-white rounded-2xl bg-emerald-700`}
                        onClick={() => next()}
                    >
                        NEXT
                    </button>
                    <p className="text-center">
                        {index + 1} of {currentData.length}
                    </p>
                    <p className="text-gray-500 cursor-pointer" onClick={reset}>
                        BACK
                    </p>
                </>
            ) : (
                <Result
                    score={score}
                    reset={reset}
                    totall={currentData.length}
                />
            )}
        </div>
    );
};

export default Quiz;
