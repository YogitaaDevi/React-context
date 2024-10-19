import "../assets/scss/Dashboard.scss";
import i2i from "../assets/images/i2i.webp";
import { useState } from "react";

const DashboardPage = () => {
  const [isAboutus, setIsAboutUs] = useState<boolean>(false);

  return (
    <div className="relative overflow-hidden bg bg-no-repeat text-center">
      <div
        className="flex justify-center transition delay-300 duration-300 ease-in-out"
        onMouseEnter={() => setIsAboutUs(true)}
        onMouseLeave={() => setIsAboutUs(false)}
      >
        <img src={i2i} className="i2i" />
        {isAboutus && (
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white w-120 text-2xl font-bold">
                Over a decade of experience building a silicon-valley style
                engineering mindset to solve complex tech problems for
                enterprises and helping launch and successfully execute
                technology initiatives leading to disproportionate outcomes.
                Enterprises like Roche, Medtronic, Facebook, Netsmart, Siemens
                etc look to us to solve some of the most future forward tech
                initiatives right from feasibility analysis to large scale
                deployments. We're loved by the best, certified, compliant and
                are one of the fastest growing technology services companies on
                INC 5000! We shine bright and outrank most companies for metrics
                that relate to average client tenures, employee retention &
                satisfaction and are an inclusive, women-led enterprise with
                presence in US, Mexico and India
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
