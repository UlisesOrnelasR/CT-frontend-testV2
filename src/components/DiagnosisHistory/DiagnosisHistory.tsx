import { Title } from "../ui";

export const DiagnosisHistory = () => {
  return (
    <div className="mb-7 h-673 bg-white rounded-16px pr-1 pb-6">
      <div className="p-4">
        <Title title="Diagnostic History" />
      </div>
      <div className="px-4 pl-4 mt-9 w-full">
        <div>graph</div>
        <div className="flex flex-row gap-5">
          <div className="bg-respiratory rounded-xl p-4 text-left">
            <img
              src="assets/images/respiratory.png"
              alt="respiratory"
              className="w-24"
            />
            <p className="text-lg font-semibold">Respiratory Rate</p>
            <p className="text-3xl font-extrabold mb-4">20 bpm</p>
            <p>
              <span>Normal</span>
            </p>
          </div>
          <div className="bg-temperatureR rounded-xl p-4 text-left">
            <img
              src="assets/images/temperatureR.png"
              alt="respiratory"
              className="w-24"
            />
            <p className="text-lg font-semibold">Temperature</p>
            <p className="text-3xl font-extrabold mb-4">98.6°F</p>
            <p>
              <span>Normal</span>
            </p>
          </div>
          <div className="bg-heart rounded-xl p-4 text-left">
            <img
              src="assets/images/heart.png"
              alt="respiratory"
              className="w-24"
            />
            <p className="text-lg font-semibold">Heart Rate</p>
            <p className="text-3xl font-extrabold mb-4">78 bpm</p>
            <p className="flex items-center">
              <img
                src="assets/images/ArrowDown.png"
                alt="ArrowDown"
                className="mr-3 w-2 h-1.5"
              />
              <span>Lower than Average</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
