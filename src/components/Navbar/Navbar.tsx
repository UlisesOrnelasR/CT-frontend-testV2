import { EllipsisVertical, Settings } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full mt-5 mb-8 bg-white rounded-70px p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
      <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="w-auto h-12 md:h-auto"
        />
      </h1>
      <nav className="col-span-1 md:col-span-7 flex flex-wrap items-center gap-4 justify-center">
        <div className="px-3 py-1 rounded-41px flex items-center gap-1 hover:bg-primary transition-colors">
          <img
            src="/assets/images/overview.png"
            alt="overview"
            className="w-4 h-4"
          />
          <a href="#" className="xl:py-1 xl:px-1 rounded-lg font-bold">
            Overview
          </a>
        </div>
        <div className="px-3 py-1 rounded-41px flex items-center gap-1 bg-primary transition-colors">
          <img
            src="/assets/images/patients.png"
            alt="patients"
            className="w-5 h-4"
          />
          <a href="#" className="xl:py-1 xl:px-1 rounded-lg font-bold">
            Patients
          </a>
        </div>
        <div className="px-3 py-1 rounded-41px flex items-center gap-1 hover:bg-primary transition-colors">
          <img
            src="/assets/images/schedule.png"
            alt="schedule"
            className="w-4 h-4"
          />
          <a href="#" className="xl:py-1 xl:px-1 rounded-lg font-bold">
            Schedule
          </a>
        </div>
        <div className="px-3 py-1 rounded-41px flex items-center gap-1 hover:bg-primary transition-colors">
          <img
            src="/assets/images/message.png"
            alt="message"
            className="w-4 h-4"
          />
          <a href="#" className="xl:py-1 xl:px-1 rounded-lg font-bold">
            Message
          </a>
        </div>
        <div className="px-3 py-1 rounded-41px flex items-center gap-1 hover:bg-primary transition-colors">
          <img
            src="/assets/images/transactions.png"
            alt="transactions"
            className="w-4 h-4"
          />
          <a href="#" className="xl:py-1 xl:px-1 rounded-lg font-bold">
            Transactions
          </a>
        </div>
      </nav>
      <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-4">
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <img
              src="/assets/images/portrait.png"
              alt="portrait"
              className="w-12"
            />
            <div className="flex flex-col justify-start">
              <p className="font-bold whitespace-nowrap">Dr. Jose Simmons</p>
              <p className="ml-5 text-textSecondary whitespace-nowrap">
                General Practitioner
              </p>
            </div>
          </div>
          <div className="flex gap-1 items-center border-l-2 pl-4">
            <Settings />
            <EllipsisVertical />
          </div>
        </div>
      </div>
    </div>
  );
};
