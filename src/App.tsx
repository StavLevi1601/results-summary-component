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
        <div className="md:h-[550px] w-full md:w-[800px] bg-white shadow-2xl rounded-[20px] flex flex-col md:flex-row">
          <div className="w-full md:w-[380px] bg-gradient-to-b from-[#6743ff] to-[#352feb] h-[550px] md:p-4 p-56 shadow-2xl rounded-l-[20px] md:rounded-r-[20px]">
            <div className="flex flex-col gap-10 items-center pt-9">
              <div className="text-[#cdc6ff] text-2xl">Your Result</div>
              <div className="flex justify-center items-center rounded-full md:w-48 md:h-48 w-28 h-28 gap-3 flex-col bg-gradient-to-b from-[#4927d3] to-[#4533eb]">
                <div className="text-[#fdfef8] md:text-7xl text-5xl md:justify-start justify-center items-center  font-Hankees font-bold">
                  76
                </div>
                <div className="text-[#8374fe] text-base font-Hankees font-extrabold">
                  of 100
                </div>
              </div>
              <div className="gap-4 flex flex-col items-center">
                <div className="text-[#fdfef8] text-3xl font-Hankees font-semibold">
                  Great
                </div>
                <div className="text-[#d4d6c8f1] text-base font-Hankees w-56 text-center font-semibold">
                  You scored higher than 65% of the people who have taken these
                  tests.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-6">
            <div className="pt-16 pl-12">
              <div className="text-[#000000] text-2xl font-bold font-Hankees">
                Summary
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-4 pl-12">
              {summaryData.map((data) => (
                <div
                  className="flex justify-between w-72 p-4"
                  style={{
                    backgroundColor: data.colorBackground,
                    borderRadius: "20px",
                  }}
                >
                  <div className="flex justify-start gap-3">
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
              <div className="bg-[#303b59] flex justify-center pr-12 mt-6 w-72 h-14 text-center  rounded-full hover:bg-[#4736f1]">
                <div className="text-white text-base font-bold font-Hankees pl-12 text-center m-auto">
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
