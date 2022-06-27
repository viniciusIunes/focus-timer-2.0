let rangeCardOne = document.querySelector('.control-range-1')
let rangeCardTwo = document.querySelector('.control-range-2')
let rangeCardThree = document.querySelector('.control-range-3')
let rangeCardOFour = document.querySelector('.control-range-4')

let buttonLightMode = document.querySelector('.light-mode')
let buttonDarkMode = document.querySelector('.dark-mode')
let buttonModeLight = document.querySelector('.mode-light')
let buttonModeDark = document.querySelector('.mode-dark')

let buttonPlay = document.getElementsByClassName('play')[0]
let buttonPlayDark = document.getElementsByClassName('play')[1]

let buttonPause = document.getElementsByClassName('pause')[0]
let buttonPauseDark = document.getElementsByClassName('pause')[1]

let buttonStop = document.getElementsByClassName('stop')[0]
let buttonStopDark = document.getElementsByClassName('stop')[1]

let buttonMost = document.getElementsByClassName('most')[0]
let buttonMostDark = document.getElementsByClassName('most')[1]

let buttonLess = document.getElementsByClassName('less')[0]
let buttonLessDark = document.getElementsByClassName('less')[1]

let secondsDisplay = document.getElementsByClassName('seconds')[0]
let secondsDisplayDark = document.getElementsByClassName('seconds')[1]

let minutesDisplay = document.getElementsByClassName('minutes')[0]
let minutesDisplayDark = document.getElementsByClassName('minutes')[1]

let buttonForest = document.getElementsByClassName('card-01')[0]
let buttonForestDark = document.getElementsByClassName('card-01')[1]

let buttonForestTwo = document.getElementsByClassName('card-florest-01')[0]
let buttonForestTwoDark = document.getElementsByClassName('card-florest-01')[1]

let buttonRain = document.getElementsByClassName('card-02')[0]
let buttonRainDark = document.getElementsByClassName('card-02')[1]

let buttonRainTwo = document.getElementsByClassName('card-rain-02')[0]
let buttonRainTwoDark = document.getElementsByClassName('card-rain-02')[1]

let buttonCoffeShop = document.getElementsByClassName('card-03')[0]
let buttonCoffeShopDark = document.getElementsByClassName('card-03')[1]

let buttonCoffeShopTwo = document.getElementsByClassName('card-coffeShop-03')[0]
let buttonCoffeShopTwoDark =
  document.getElementsByClassName('card-coffeShop-03')[1]

let buttonFireplace = document.getElementsByClassName('card-04')[0]
let buttonFireplaceDark = document.getElementsByClassName('card-04')[1]

let buttonFireplaceTwo = document.getElementsByClassName('card-fireplace-04')[0]
let buttonFireplaceTwoDark =
  document.getElementsByClassName('card-fireplace-04')[1]

let buttonForestAudio = buttonForest
let buttonForestAudioDark = buttonForestDark

let buttonRainAudio = buttonRain
let buttonRainAudioDark = buttonRainDark

let buttonCoffeShopAudio = buttonCoffeShop
let buttonCoffeShopAudioDark = buttonCoffeShopDark

let buttonFireplaceAudio = buttonFireplace
let buttonFireplaceAudioDark = buttonFireplaceDark

let minutes = minutesDisplay.textContent
let minutesDark = minutesDisplayDark.textContent

let incrementTimer = Number(minutes)
let incrementTimerDark = Number(minutesDark)

export {
  buttonModeLight,
  buttonModeDark,
  rangeCardOne,
  rangeCardTwo,
  rangeCardThree,
  rangeCardOFour,
  buttonLightMode,
  buttonDarkMode,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMost,
  buttonLess,
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
  minutes,
  incrementTimer,
  buttonPlayDark,
  buttonPauseDark,
  buttonStopDark,
  buttonMostDark,
  buttonLessDark,
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
  minutesDark,
  incrementTimerDark
}
