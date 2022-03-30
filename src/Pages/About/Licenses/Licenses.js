// @ts-check
/*

You can use either the npm-license-crawler dependency to get data that will
work with this component, or the custom script at:
the-bedtime-project/scripts/licenseCrawler.js

Run the script to generate the file ./licenses.json

*/

import React from "react";

import LicensesList from "./LicensesList/LicensesList";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import RepeatingRadialGradient from "../../../Components/Background/RepeatingRadialGradient/RepeatingRadialGradient";
import SEO from "../../../Components/Structural/SEO/SEO";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";

import { extractNameFromGithubUrl } from "./utils/extractNameFromGithubUrl/extractNameFromGithubUrl";

import "./Licenses.scss";
import Data from "./licenses.json";

/**
 * @function sortDataByKey
 * @description Sorts the licenses data by key.
 * [Created with help from an online article]{@link https://blog.expo.io/licenses-the-best-part-of-your-app-29e7285b544f}
 * @author Alexander Burdiss
 * @since 12/17/20
 * @version 1.0.3
 * @param {Array} data The list of licenses.
 * @param {String|Number} key An object key inside each member of data.
 * @returns {Array} A sorted version of the data array that is passed in.
 */
function sortDataByKey(data, key) {
  data.sort(function (a, b) {
    return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
  });
  return data;
}

let licenses = Object.keys(Data).map((key) => {
  let { licenses, ...license } = Data[key];
  let name, version;
  if (key[0] == "@") {
    [, name, version] = key.split("@");
  } else {
    [name, version] = key.split("@");
  }

  let username = extractNameFromGithubUrl(license.repository);

  let userUrl;
  let image;
  if (username) {
    image = `http://github.com/${username}.png`;
    userUrl = `http://github.com/${username}`;
  }

  return {
    key,
    name,
    image,
    userUrl,
    username,
    licenses: licenses.slice(0, 405),
    version,
    ...license,
  };
});

sortDataByKey(licenses, "username");

/**
 * @function Licenses
 * @description The licences for the software that we used in this application.
 * @author Alexander Burdiss
 * @since 6/10/21
 * @version 1.0.1
 * @component
 * @example
 * <Licenses />
 */
export default function Licenses() {
  return (
    <StandardWrapper>
      <div className="LicensesContainer">
        <SEO title="Licenses" />
        <PageTitle>Licenses</PageTitle>
        <RepeatingRadialGradient
          primaryColor={"#f3f6f6"}
          secondaryColor={"#cccff1"}
          tertiaryColor={"#4f68d0"}
        />
        <div className="LicensesContainer-Description">
          This project is made possible by these great open-source developers:
        </div>
        <div>
          <LicensesList licenses={licenses} />
        </div>
      </div>
    </StandardWrapper>
  );
}
