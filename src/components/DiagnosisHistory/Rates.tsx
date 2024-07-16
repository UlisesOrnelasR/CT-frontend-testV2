export const Rates = () => {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex-1 bg-respiratory rounded-xl p-4 text-left">
        <img
          src="assets/images/respiratory.png"
          alt="respiratory"
          className="w-24 mb-4"
        />
        <p className="text-lg font-semibold">Respiratory Rate</p>
        <p className="text-3xl font-extrabold mb-4">20 bpm</p>
        <p>
          <span>Normal</span>
        </p>
      </div>
      <div className="flex-1 bg-temperatureR rounded-xl p-4 text-left">
        <img
          src="assets/images/temperatureR.png"
          alt="respiratory"
          className="w-24 mb-4"
        />
        <p className="text-lg font-semibold">Temperature</p>
        <p className="text-3xl font-extrabold mb-4">98.6°F</p>
        <p>
          <span>Normal</span>
        </p>
      </div>
      <div className="flex-1 bg-heart rounded-xl p-4 text-left">
        <img
          src="assets/images/heart.png"
          alt="respiratory"
          className="w-24 mb-4"
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
  );
};
