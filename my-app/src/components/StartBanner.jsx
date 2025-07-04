const StartBanner = ({
    setIsStart,
    category,
    setCategory,
    numOfQuestion,
    setNumOfQuestion,
}) => {
    const handleStart = (event) => {
        event.preventDefault();
        setIsStart(true);
    };

    return (
        <div>
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
                Answer to Learn
            </h2>
            <hr className="mb-6 border-t-2 border-gray-200" />
            <form onSubmit={handleStart} className="space-y-4">
                <label className="block mb-1 font-medium text-gray-700">
                    Category
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                >
                    <option value="all">All</option>
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                    <option value="math">Math</option>
                    <option value="economics">Economics</option>
                    <option value="general">General</option>
                    <option value="english">English</option>
                    <option value="geography">Geography</option>
                    <option value="history">History</option>
                    <option value="bangla">Bangla</option>
                    <option value="politics">Politics</option>
                    <option value="sports">Sports</option>
                </select>
                <label className="block mb-1 font-medium text-gray-700">
                    Number of Questions
                </label>
                <select
                    value={numOfQuestion}
                    onChange={(e) => setNumOfQuestion(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                </select>
                <button
                    className="block w-2/3 px-6 py-2 mx-auto my-4 text-2xl font-semibold text-white shadow shadow-black rounded-xl bg-emerald-700"
                    type="submit"
                >
                    Begin Quiz
                </button>
            </form>
            <ul className="mb-4 text-sm text-gray-500 list-disc list-inside">
                <li>প্রতি কুইজে থাকবে এলোমেলো প্রশ্ন</li>
                <li>বিভিন্ন বিষয়ে প্রশ্ন নির্বাচন করা যাবে</li>
                <li>উত্তরের মাধ্যমে শিখার সুযোগ</li>
            </ul>
            <p className="mb-4 italic text-center text-green-700">
                "Practice makes perfect – প্রতিদিন একটু একটু করে শিখুন!"
            </p>
        </div>
    );
};

export default StartBanner;
