import {
  faPhoneAlt,
  faLink,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseDateString } from "../lib/utils";
import React from "react";

const AmbulanceCard = ({
  name,
  phone1,
  phone2,
  area,
  source,
  createdTime,
  verificationStatus,
}) => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 flex justify-between">
            <div>
              <div className="font-bold text-2xl">
                <h1 className="flex items-center justify-start">
                  {name ? name : "Ambulance"}
                  <span>
                    {verificationStatus &&
                    verificationStatus.toLocaleLowerCase() == "verified" ? (
                      <FontAwesomeIcon
                        className="text-green-600 w-5 ml-4"
                        title="Verified"
                        icon={faCheckCircle}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="text-yellow-400 w-4 ml-4"
                        title="Not verified"
                        icon={faExclamationTriangle}
                      />
                    )}
                  </span>
                </h1>
                <div className="text-sm text-gray-700 font-semibold"></div>
              </div>
              <div className="w-11/12 max-w-3xl mt-2">
                <div className="text-sm">{area}</div>
              </div>
            </div>
            <div className="flex space-x-2 items-start">
              {phone1 && (
                <a
                  className="font-mono text-gray-800 hover:text-gray-900 text-sm font-bold"
                  href={`tel:${phone1}`}
                >
                  <FontAwesomeIcon
                    title={phone1}
                    className="text-xl w-6"
                    icon={faPhoneAlt}
                  />
                </a>
              )}
              {phone2 && (
                <a
                  className="font-bold text-sm text-gray-700 mt-0 hover:text-gray-900"
                  target="_blank"
                  href={`tel:${phone2}`}
                >
                  <FontAwesomeIcon
                    title={phone2}
                    className="text-xl w-6"
                    icon={faPhoneAlt}
                  />
                </a>
              )}
              {source && (
                <a href={source}>
                  <FontAwesomeIcon
                    title={`${source}`}
                    className="text-xl w-6"
                    icon={faLink}
                  />
                </a>
              )}
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mx-2 mt-2 pb-3">
            <div className="font-mono text-gray-700 text-sm">
              {parseDateString(createdTime)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmbulanceCard;
