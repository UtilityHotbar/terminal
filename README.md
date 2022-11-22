# Terminal Game
*A Javascript implementation of [assembly_game](https://github.com/UtilityHotbar/assembly_game) with a web interface.*

## Description
This is an assembly debugging game where you are faced with a simple web emulator running an assembly program (enter `print` to view the program). You can `run` the program, but it will have errors that prevent the current memory state (left display) from reaching the target memory state (right display). Therefore you will need to reset (command `res`) memory and `patch` the program via `patch {LINE NO.} {NEW CODE}`. A manual is provided (see `manual.pdf`, starting page 5) for more detailed information.

## Demo
A web demo can be found [here](https://zhengzi-archive.com/terminal/). Code on the web version was obfuscated via [obfuscator.io](https://obfuscator.io/) to prevent tampering.

## Notes
* This was originally a part of a larger alternate reality game project, hence the NOVOS branding, copyright 1999 stuff.
* This version uses publically available google fonts. Hence there are small differences in cosmetic and css design. No functionality should be different.

## Usage
1. Clone repository and do `cd terminal`.
2. Open `index.html` in browser. (No server should be required)
