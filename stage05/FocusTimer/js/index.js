import Controls from "./controls.js"
import Timer from "./timer.js"
import events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"
import Sound from "./sounds.js"

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  sound
})

events({
  controls,
  timer,
  sound
})