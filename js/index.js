import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import ControlSound from './soundsControls.js'
import Events from './events.js'
import {
  buttonLightMode,
  buttonDarkMode,
  buttonPlay,
  buttonPause,
  secondsDisplay,
  minutesDisplay,
  buttonForest,
  buttonForestTwo,
  buttonRain,
  buttonRainTwo,
  buttonCoffeShop,
  buttonCoffeShopTwo,
  buttonFireplace,
  buttonFireplaceTwo,
  buttonForestAudio,
  buttonRainAudio,
  buttonCoffeShopAudio,
  buttonFireplaceAudio,
  incrementTimer,
  buttonPlayDark,
  buttonPauseDark,
  secondsDisplayDark,
  minutesDisplayDark,
  buttonForestDark,
  buttonForestTwoDark,
  buttonRainDark,
  buttonRainTwoDark,
  buttonCoffeShopDark,
  buttonCoffeShopTwoDark,
  buttonFireplaceDark,
  buttonFireplaceTwoDark,
  buttonForestAudioDark,
  buttonRainAudioDark,
  buttonCoffeShopAudioDark,
  buttonFireplaceAudioDark,
  incrementTimerDark
} from './elements.js'

const controls = Controls({
  buttonPause,
  buttonPauseDark,
  buttonPlay,
  buttonPlayDark,
  buttonLightMode,
  buttonDarkMode
})

const soundsControls = ControlSound({
  buttonForest,
  buttonForestTwo,
  buttonForestAudio,
  buttonRain,
  buttonRainTwo,
  buttonRainAudio,
  buttonCoffeShop,
  buttonCoffeShopTwo,
  buttonCoffeShopAudio,
  buttonFireplace,
  buttonFireplaceTwo,
  buttonFireplaceAudio,

  buttonForestDark,
  buttonForestTwoDark,
  buttonForestAudioDark,
  buttonRainDark,
  buttonRainTwoDark,
  buttonRainAudioDark,
  buttonCoffeShopDark,
  buttonCoffeShopTwoDark,
  buttonCoffeShopAudioDark,
  buttonFireplaceDark,
  buttonFireplaceTwoDark,
  buttonFireplaceAudioDark
})

const timer = Timer({
  controls,
  soundsControls,
  minutesDisplay,
  secondsDisplay,
  minutesDisplayDark,
  secondsDisplayDark
})

Sound({
  soundsControls,
  controls
})

Events({
  controls,
  timer,
  soundsControls,
  incrementTimer,
  incrementTimerDark
})
