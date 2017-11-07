#!/bin/sh

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
open -a Terminal

osascript <<END
tell application "Terminal"
    do script "clear;cd $dir/../../..; ./node_modules/.bin/babel littleLamb.js --out-file ./littleLamb.app/Contents/MacOS/littleLambES5.js; ./runJS.sh ./littleLamb.app/Contents/MacOS/littleLambES5.js"
end tell
END
