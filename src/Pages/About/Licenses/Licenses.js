/*

Download this lib: https://www.npmjs.com/package/npm-license-crawler
I did it globally: `npm i npm-license-crawler -g`

Run this command to get the data
`npm-license-crawler --onlyDirectDependencies --json src/Pages/About/Licenses/licenses.json`

*/

import React from "react";

import { capitalize } from "../../../utils/capitalize/capitalize";

import LicensesList from "./LicensesList/LicensesList";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import "./Licenses.scss";
import Data from "./licenses.json";
import RepeatingRadialGradient from "../../../Components/Background/RepeatingRadialGradient/RepeatingRadialGradient";
import SEO from "../../../Components/Structural/SEO/SEO";

/**
 * @function extractNameFromGithubUrl
 * @description Takes a url to a gitHub repository and returns the username of
 * the author of the software.
 * [Created with help from an online article]{@link https://blog.expo.io/licenses-the-best-part-of-your-app-29e7285b544f}
 * @author Alexander Burdiss
 * @version 1.1.0
 * @since 12/17/20
 * @param {String} url The GitHub url of a piece of software.
 * @returns {String} The GitHub username
 */
function extractNameFromGithubUrl(url) {
  if (!url) {
    return null;
  }

  const reg = /((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9_]{1,15})(\/([-a-z]{1,20}))?/i;
  const components = reg.exec(url);

  if (components && components.length > 5) {
    return components[5];
  }
  return null;
}

/**
 * @function sortDataByKey
 * @description Sorts the licenses data by key.
 * [Created with help from an online article]{@link https://blog.expo.io/licenses-the-best-part-of-your-app-29e7285b544f}
 * @author Alexander Burdiss
 * @since 12/17/20
 * @version 1.0.1
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

// Add license for library I downloaded directly and use
const allData = Data;
allData["react-crossword@0.2.3"] = {
  licenses: "Apache-2.0",
  repository: "https://github.com/guardian/react-crossword",
  licenseUrl:
    "https://raw.githubusercontent.com/guardian/react-crossword/master/LICENSE",
  parents: "the-bedtime-project",
};

let licenses = Object.keys(allData).map((key) => {
  let { licenses, ...license } = allData[key];
  let name, version;
  if (key[0] == "@") {
    [, name, version] = key.split("@");
  } else {
    [name, version] = key.split("@");
  }

  let username =
    extractNameFromGithubUrl(license.repository) ||
    extractNameFromGithubUrl(license.licenseUrl);

  let userUrl;
  let image;
  if (username) {
    username = capitalize(username);
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
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Licenses />
 * ```
 */
export default function Licenses() {
  return (
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
  );
}
