import "./index.css";
import visutalImage from "./images/icon-visual.svg";
import verbalImage from "./images/icon-verbal.svg";
import memoryImage from "./images/icon-memory.svg";
import reactionImage from "./images/icon-reaction.svg";

const summaryData = [
  {
    title: "Reaction",
    icon: reactionImage,
    colorBackground: "#fff6f5",
    colorText: "#eb3a37",
    score: "80 / 100",
  },
  {
    title: "Memory",
    icon: memoryImage,
    colorBackground: "#fffbf2",
    colorText: "#ffc700",
    score: "92 / 100",
  },
  {
    title: "Verbal",
    icon: verbalImage,
    colorBackground: "#f2fbfa",
    colorText: "#58bdb7",
    score: "61 / 100",
  },
  {
    title: "Visual",
    icon: visutalImage,
    colorBackground: "#f3f3fd",
    colorText: "#6a89ff",
    score: "72 / 100",
  },
];

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex justify-center flex-col">
        <div className="md:h-[550px] md:w-[800px] bg-white shadow-2xl rounded-[30px] flex flex-col md:flex-row">
          <div className="md:w-[380px] bg-gradient-to-b from-[#6340fc] to-[#352feb] md:h-[550px] h-[550px] md:p-4 p-56 shadow-2xl rounded-[30px]">
            <div className="flex flex-col md:gap-10 gap-5 items-center md:pt-9">
              <div className="text-[#cdc6ff] md:text-2xl text-lg">
                Your Result
              </div>
              <div className="flex justify-center items-center rounded-full md:w-48 md:h-48 w-28 h-28 md:gap-3 gap-1 flex-col bg-gradient-to-b from-[#4c22cc] to-[#4734ee]">
                <div className="text-[#fdfef8] md:text-7xl text-5xl md:justify-start sm:justify-center sm:items-center mt-5 md:mt-0 justify-center items-center  font-Hankees font-bold">
                  76
                </div>
                <div className="text-[#8374fe] text-base font-Hankees font-extrabold">
                  of 100
                </div>
              </div>
              <div className="gap-4 flex flex-col items-center">
                <div className="text-[#fdfef8] text-3xl font-Hankees font-semibold ">
                  Great
                </div>
                <div className="text-[rgba(212,214,200,0.8)] text-base font-Hankees md:w-56 w-72 text-center font-semibold">
                  You scored higher than 65% of the people who have taken these
                  tests.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center item gap-6">
            <div className="md:pt-16 md:pl-12 pl-52 pt-4">
              <div className="text-[#000000] md:text-2xl text-lg font-bold font-Hankees md:mt-0 mt-3">
                Summary
              </div>
            </div>
            <div className="flex justify-center items-center flex-col md:gap-4 gap-5 md:pl-12 pr-2">
              {summaryData.map((data) => (
                <div
                  className="flex justify-between md:w-72 w-80 h-13 md:p-4 p-4 pl-"
                  style={{
                    backgroundColor: data.colorBackground,
                    borderRadius: "20px",
                  }}
                >
                  <div className="flex justify-start gap-3 font-medium">
                    <img src={data.icon} alt={data.title} className="w-5 h-8" />
                    <div style={{ color: data.colorText }} className="text-lg">
                      {data.title}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="text-[#000000] text-base font-bold">
                      {data.score.split(" ")[0]}
                    </div>
                    <div className="text-[#aab3ba] text-base font-bold">
                      / {data.score.split(" ")[2]}
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-[#303b59] flex justify-center pr-12 mt-6 w-72 h-14 text-center  rounded-full hover:bg-[#4736f1] cursor-pointer caret-white">
                <div className="text-white text-base font-bold font-Hankees pl-12 text-center m-auto	">
                  Continue
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
