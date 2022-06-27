import {
  buttonForestTwo,
  buttonRainTwo,
  buttonCoffeShopTwo,
  buttonFireplaceTwo,
  buttonForestTwoDark,
  buttonRainTwoDark,
  buttonCoffeShopTwoDark,
  buttonFireplaceTwoDark,
  buttonModeLight,
  buttonModeDark
} from './elements.js'

export default function ({
  buttonPause,
  buttonPauseDark,
  buttonPlay,
  buttonPlayDark,
  buttonLightMode,
  buttonDarkMode
}) {
  function lightMode() {
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')

    buttonModeLight.classList.add('hide')
    buttonModeDark.classList.remove('hide')

    document.body.style.backgroundColor = 'var(--bg-color-dark)'
    document.body.style.transition = '400ms'
  }

  function darkMode() {
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')

    buttonModeDark.classList.add('hide')
    buttonModeLight.classList.remove('hide')

    document.body.style.backgroundColor = 'var(--bg-color)'
    document.body.style.transition = '400ms'
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    buttonPlayDark.classList.add('hide')
    buttonPauseDark.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    buttonPauseDark.classList.add('hide')
    buttonPlayDark.classList.remove('hide')
  }

  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    buttonPauseDark.classList.add('hide')
    buttonPlayDark.classList.remove('hide')

    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
    buttonFireplaceTwo.click()

    buttonForestTwoDark.click()
    buttonRainTwoDark.click()
    buttonCoffeShopTwoDark.click()
    buttonFireplaceTwoDark.click()
  }

  return {
    lightMode,
    darkMode,
    play,
    pause,
    stop
  }
}
