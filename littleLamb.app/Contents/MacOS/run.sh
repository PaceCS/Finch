#!/bin/sh

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
open -a Terminal

osascript <<END
tell application "Terminal"
    do script "echo Hello?"
    do script "cd $dir/../../..; echo File?; read var;echo $1; echo $var; ./node_modules/.bin/babel littleLamb.js --out-file ./littleLamb.app/Contents/MacOS/littleLambES5.js; ./runJS.sh ./littleLamb.app/Contents/MacOS/littleLambES5.js"
end tell
END
