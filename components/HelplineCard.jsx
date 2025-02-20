import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faLink, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseDateString } from "../lib/utils";

const HelplineCard = ({
  category,
  createdTime,
  description,
  district,
  phone1,
  source,
  slink,
  state,
  subCategory,
}) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 flex justify-between">
        <div>
          <div className="font-bold text-2xl">
            <div>
              <h1>{category}</h1>
              <div className="text-sm mt-1 mb-5 text-gray-700 font-semibold">
                <span>({subCategory})</span>
              </div>
            </div>
            <div className="text-sm  uppercase mt-3 text-gray-700 font-semibold">
              <span className="mr-2">{district}</span>|
              <span className="ml-2">{state}</span>
            </div>
            <div className="w-11/12 max-w-3xl mt-2">
              <div className="text-sm">{source}</div>
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
          {slink && (
            <a
              className="font-mono text-gray-700 font-bold text-xl hover:text-gray-900"
              target="_blank"
              href={slink}
            >
              <FontAwesomeIcon
                title={`${slink}`}
                className="text-xl w-6"
                icon={faLink}
              />
            </a>
          )}
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center mx-2 mt-2 pb-3">
        <div className="font-semibold">{description}</div>
        <div className="font-mono text-gray-700 text-sm">
          {parseDateString(createdTime)}
        </div>
      </div>
    </div>
  );
};

export default HelplineCard;
