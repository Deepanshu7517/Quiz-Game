import { useState } from 'react';
import { questionArray } from '../database/questions';
import { useUser } from '../context/contextAPI';
export default function Home() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const { isPlaying, setisPlaying } = useUser()
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption === questionArray[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSelectedOption('');

        if (currentQuestion + 1 < questionArray.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateGrade = (): string => {
        const gradingSystem = (score / questionArray.length) * 100
        if (gradingSystem <= 25) {
            return 'Poor'
        } else if (gradingSystem >= 26 && gradingSystem <= 50) {
            return 'Fair'
        } else if (gradingSystem >= 51 && gradingSystem <= 75) {
            return 'Good'
        } else {
            return 'Excellent'
        }
    }
    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption('');
        setShowResult(false);
    };
    return (
        <main className="home md:relative left-32 max-w-screen-sm h-full m-auto flex flex-col items-center">
            {!isPlaying ?
                <>
                    <h1 className="text-[#D5B387] font-cinzel text-6xl font-semibold mt-10">Time Traveler's</h1>
                    <h1 className="text-[#D5B387] font-cinzel text-6xl font-semibold mb-5">Travia</h1>
                    <section className="h-2/4 w-full">
                        <article className="h-full w-full flex flex-col items-center font-poppins">
                            <h2 className="question bg-[#CFAC81] h-1/6 flex justify-center items-center text-3xl font-semibold px-8 rounded-full">Who invented bulb?</h2>
                            <p className="options p-2 px-4 mt-4 bg-[#CFAC81] flex justify-center items-center text-xl font-medium rounded-full">Mona Lisa</p>
                            <p className="options p-2 px-4 mt-4 bg-[#CFAC81] flex justify-center items-center text-xl font-medium rounded-full">Cola Man</p>
                            <p className="options p-2 px-4 mt-4 bg-[#CFAC81] flex justify-center items-center text-xl font-medium rounded-full">Thomas elva Edison</p>
                            <p className="options p-2 px-4 mt-4 bg-[#CFAC81] flex justify-center items-center text-xl font-medium rounded-full">Tesla</p>
                        </article>
                    </section>
                    <button
                        onClick={() => setisPlaying(true)}
                        className="md:relative md:mt-10 max-md:-mt-12 left-32 rounded-full text-3xl h-16 bg-[#C4673C] text-[#172631] font-poppins font-extrabold p-2 px-8"
                    >
                        Start Quiz
                    </button>
                </>
                : (!showResult) ? <section className="mt-24 max-sm:mt-2 max-md:mt-4 h-2/4 w-full">
                    <article className="h-full w-full flex flex-col items-center font-poppins">
                        <div className="h-full w-full flex flex-col items-center font-poppins">
                            <h2 className="question select-none m-4 bg-[#CFAC81] p-3 flex justify-center items-center text-3xl font-semibold px-8 rounded-full">{questionArray[currentQuestion].question}</h2>
                            {questionArray[currentQuestion].options.map((item, index) => {
                                return (
                                    <button
                                        onClick={() => handleOptionClick(item)}
                                        key={index}
                                        className={`options ${selectedOption == item ? 'bg-black text-white' : 'bg-[#CFAC81]'} select-none cursor-pointer px-4 mt-6 flex justify-center items-center lg:text-2xl text-xl font-medium rounded-full`}
                                    >
                                        {item}
                                    </button>
                                )
                            })}
                            <div className="slideBtns mt-12 w-full flex justify-around">
                                <button
                                    onClick={() => (!selectedOption) ? alert('please select a option') : handleNext()}
                                    className="bg-green-500 font-bold h-12 lg:h-14 px-4 select-none text-2xl lg:text-4xl lg:px-8 rounded-full text-[#1A2B38]"
                                >
                                    Submit
                                </button>
                            </div>
                            <button onClick={() => setisPlaying(false)} className="mt-8 text-red-500 underline">End Quiz</button>
                        </div>
                    </article>
                </section> : <div className="text-center mt-20">
                    <p className="mb-4 font-cinzel text-6xl font-bold text-[#CFAC81]">You Score: {score} / {questionArray.length}</p>
                    <p className="grade mt-20 font-cinzel text-6xl font-bold text-[#CFAC81]">Grade: {calculateGrade()}</p>
                    <div className="buttons  mt-32 flex flex-row justify-around items-center">
                        <button onClick={handleRestart} className="bg-blue-600 text-white rounded-full px-4 font-bold py-2 hover:bg-blue-700">Restart Quiz</button>
                        <button onClick={() => setisPlaying(false)} className=" text-red-500 underline font-bold text-2xl">End Quiz</button>
                    </div>
                </div>
            }
        </main >
    );
}
