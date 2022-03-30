/**
 * the-bedtime-project/scripts/licenseCrawler.js
 *
 * This is a basic custom rebuild of the npm-license-crawler package. This was
 * created to reduce the number of dependencies in the project to as few as
 * possible, to reduce the chance of getting intentional malware into our code
 * base.
 *
 * @author Alexander Burdiss
 * @since 3/29/22
 * @version 1.0.0
 */
const fs = require("fs");

const outputJson = {};

try {
  const data = fs.readFileSync("package-lock.json", "utf8");
  const parsedData = JSON.parse(data);
  // Create an array of all of the dependencies.
  const dependencies = Object.keys(parsedData.packages[""].dependencies);

  for (let dependency of dependencies) {
    try {
      processDependency(dependency);
    } catch (err) {
      console.error(err);
    }
  }
  // Call the write data function.
  writeData();
} catch (err) {
  console.error(err);
}

function processDependency(dependency) {
  // Grab the package.json for each dependency.
  const packageData = fs.readFileSync(
    `node_modules/${dependency}/package.json`,
    "utf8"
  );
  // Build an object for each dependency.
  const licenseData = {};
  const parsedDependencyPackage = JSON.parse(packageData);
  licenseData.licenses = parsedDependencyPackage.license;
  // Sometimes the repository is an object, sometimes it is a string.
  if (typeof parsedDependencyPackage.repository === "string") {
    licenseData.repository = parseRepoUrl(parsedDependencyPackage.repository);
  } else {
    licenseData.repository = parseRepoUrl(
      parsedDependencyPackage.repository.url
    );
  }
  licenseData.licenseUrl = licenseData.repository + "/raw/HEAD/LICENSE";
  // Attach that object to the global object
  outputJson[
    `${parsedDependencyPackage.name}@${parsedDependencyPackage.version}`
  ] = licenseData;
}

function parseRepoUrl(url) {
  // Update the Repo Url to be a navigatable link, instead of a git address.
  return url
    .replace("git://", "https://")
    .replace("git+http", "http")
    .replace(".git", "");
}

function writeData() {
  try {
    fs.writeFileSync(
      "src/Pages/About/Licenses/licenses.json",
      JSON.stringify(outputJson)
    );
    //file written successfully
  } catch (err) {
    console.error(err);
  }
}
// src/Pages/About/Licenses/licenses.json
