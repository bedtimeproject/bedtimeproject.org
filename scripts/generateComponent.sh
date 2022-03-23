#!/bin/bash
# generateComponent.sh
# Author: Alexander Burdiss
# Since: 9/7/21
# Description: Generates a React component and all the necessary files that go
# along with it.
version="1.0.3"

path=$1
component=$2
date=`date +"%D"`

echo
echo "        ▄▄▄▄▄ ▄ .▄▄▄▄ .    ▄▄▄▄· ▄▄▄ .·▄▄▄▄  ▄▄▄▄▄▪  • ▌ ▄ ·. ▄▄▄ . "
echo "        •██  ██▪▐█▀▄.▀·    ▐█ ▀█▪▀▄.▀·██▪ ██ •██  ██ ·██ ▐███▪▀▄.▀· "
echo "         ▐█.▪██▀▐█▐▀▀▪▄    ▐█▀▀█▄▐▀▀▪▄▐█· ▐█▌ ▐█.▪▐█·▐█ ▌▐▌▐█·▐▀▀▪▄ "
echo "         ▐█▌·██▌▐▀▐█▄▄▌    ██▄▪▐█▐█▄▄▌██. ██  ▐█▌·▐█▌██ ██▌▐█▌▐█▄▄▌ "
echo "         ▀▀▀ ▀▀▀ · ▀▀▀     ·▀▀▀▀  ▀▀▀ ▀▀▀▀▀•  ▀▀▀ ▀▀▀▀▀  █▪▀▀▀ ▀▀▀  "
echo "                     ▄▄▄·▄▄▄         ▐▄▄▄▄▄▄ . ▄▄· ▄▄▄▄▄            "
echo "                    ▐█ ▄█▀▄ █·▪       ·██▀▄.▀·▐█ ▌▪•██              "
echo "                     ██▀·▐▀▀▄  ▄█▀▄ ▪▄ ██▐▀▀▪▄██ ▄▄ ▐█.▪            "
echo "                    ▐█▪·•▐█•█▌▐█▌.▐▌▐▌▐█▌▐█▄▄▌▐███▌ ▐█▌·            "
echo "                    .▀   .▀  ▀ ▀█▄▀▪ ▀▀▀• ▀▀▀ ·▀▀▀  ▀▀▀             "
echo "                        generateComponent.sh v$version              "
echo

if [[ ! $component ]]; then
  echo
  echo "Enter a Component and a Directory!"
  echo
  exit 1;
fi

if [[ ! -d "src/$path" ]]; then
  echo
  echo "Directory src/$path Doesn't exist!"
  echo
  exit 1
elif [[ -d "src/$path/$component" ]]; then
  echo
  echo "Component src/$path/$component Already exists!"
  echo
  exit 1
fi

mkdir "src/$path/$component"

# Make JS File
echo "// @ts-check
import React from \"react\";
import \"./$component.scss\";

/**
 * @namespace $component
 * @function $component
 * @author Alexander Burdiss
 * @since $date
 * @version 1.0.0
 * @component
 */
export default function $component() {
  return (
    <div className=\"$component-Container\">
      <div>$component Works!</div>
    </div>
  );
}" > "src/$path/$component/$component.js"

# Make SCSS File
touch "src/$path/$component/$component.scss"

# Make Jest test file
echo "import { render } from \"@testing-library/react\";
import $component from \"./$component\";

describe(\"renders $component\", () => {
  test(\"renders base component\", () => {
    render(<$component />);
  });
});" > "src/$path/$component/$component.test.js"

echo
echo "Component src/$path/$component Created Successfully!"
echo
exit 0
