import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faPhoneAlt,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseDateString } from "../lib/utils";

const HospitalCard = ({
  name,
  pointOfContact,
  createdTime,
  phone1,
  district,
  state,
  verificationStatus,
}) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 flex justify-between">
        <div>
          <div className="font-bold text-2xl">
            {name}
            <span>
              {(verificationStatus && verificationStatus.toLocaleLowerCase()) ==
              "verified" ? (
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
            <div className="text-sm  uppercase mt-3 text-gray-700 font-semibold">
              <span className="mr-2">{district}</span>|
              <span className="ml-2">{state}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-7 items-start">
          {phone1 && (
            <a
              className="font-mono text-gray-800 hover:text-gray-900 text-xl font-bold"
              href={`tel:${phone1}`}
            >
              <FontAwesomeIcon
                title={`${phone1}`}
                className="text-xl w-6"
                icon={faPhoneAlt}
              />
            </a>
          )}
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center mx-2 mt-2 pb-3">
        <div className="font-semibold">{pointOfContact}</div>
        <div className="font-mono text-gray-700 text-sm">
          {parseDateString(createdTime)}
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
