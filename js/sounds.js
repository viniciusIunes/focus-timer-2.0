import {
  buttonForest,
  buttonForestTwo,
  buttonRain,
  buttonRainTwo,
  buttonCoffeShop,
  buttonCoffeShopTwo,
  buttonFireplace,
  buttonFireplaceTwo,
  buttonForestDark,
  buttonForestTwoDark,
  buttonRainTwoDark,
  buttonCoffeShopTwoDark,
  buttonFireplaceTwoDark,
  buttonRainDark,
  buttonCoffeShopDark,
  buttonFireplaceDark
} from './elements.js'

export default function ({ soundsControls, controls }) {
  buttonForest.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressButtonFlorestAdd()
    soundsControls.pressButtonSoundForest()

    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
    buttonFireplaceTwo.click()
    buttonRainTwoDark.click()
    buttonCoffeShopTwoDark.click()
    buttonFireplaceTwoDark.click()
  })

  buttonForestDark.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressButtonFlorestAdd()
    soundsControls.pressButtonSoundForest()

    buttonRainTwoDark.click()
    buttonCoffeShopTwoDark.click()
    buttonFireplaceTwoDark.click()
    buttonFireplaceTwo.click()
    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
  })

  buttonForestTwo.addEventListener('click', function () {
    soundsControls.pressButtonFlorestRemove()
    soundsControls.pressButtonFlorestRemoveDark()
  })

  buttonForestTwoDark.addEventListener('click', function () {
    soundsControls.pressButtonFlorestRemoveDark()
    soundsControls.pressButtonFlorestRemove()
  })

  buttonRain.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressButtonRainAdd()
    soundsControls.pressButtonSoundRain()

    buttonForestTwo.click()
    buttonCoffeShopTwo.click()
    buttonFireplaceTwo.click()
    buttonForestTwoDark.click()
    buttonCoffeShopTwoDark.click()
    buttonFireplaceTwoDark.click()
  })

  buttonRainDark.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressButtonRainAddDark()
    soundsControls.pressButtonSoundRainDark()

    buttonForestTwoDark.click()
    buttonCoffeShopTwoDark.click()
    buttonFireplaceTwoDark.click()
    buttonForestTwo.click()
    buttonCoffeShopTwo.click()
    buttonFireplaceTwo.click()
  })

  buttonRainTwo.addEventListener('click', function () {
    soundsControls.pressButtonRainRemoveDark()
    soundsControls.pressButtonRainRemove()
  })

  buttonRainTwoDark.addEventListener('click', function () {
    soundsControls.pressButtonRainRemoveDark()
    soundsControls.pressButtonRainRemove()
  })

  buttonCoffeShop.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressCoffeShopAdd()
    soundsControls.pressButtonSoundCoffeShop()

    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonFireplaceTwo.click()
    buttonForestTwoDark.click()
    buttonRainTwoDark.click()
    buttonFireplaceTwoDark.click()
  })

  buttonCoffeShopTwo.addEventListener('click', function () {
    soundsControls.pressCoffeShopRemoveDark()
    soundsControls.pressCoffeShopRemove()
  })

  buttonCoffeShopDark.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressCoffeShopAddDark()
    soundsControls.pressButtonSoundCoffeShopDark()

    buttonForestTwoDark.click()
    buttonRainTwoDark.click()
    buttonFireplaceTwoDark.click()
    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonFireplaceTwo.click()
  })

  buttonCoffeShopTwoDark.addEventListener('click', function () {
    soundsControls.pressCoffeShopRemoveDark()
    soundsControls.pressCoffeShopRemove()
  })

  buttonFireplace.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressFireplaceShopAdd()
    soundsControls.pressButtonSoundFireplace()

    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
    buttonForestTwoDark.click()
    buttonRainTwoDark.click()
    buttonCoffeShopTwoDark.click()
  })

  buttonFireplaceDark.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressFireplaceShopAddDark()
    soundsControls.pressButtonSoundFireplaceDark()

    buttonForestTwoDark.click()
    buttonRainTwoDark.click()
    buttonCoffeShopTwoDark.click()
    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
  })

  buttonFireplaceTwo.addEventListener('click', function () {
    soundsControls.pressFireplaceRemove()
    soundsControls.pressFireplaceRemoveDark()
  })

  buttonFireplaceTwoDark.addEventListener('click', function () {
    soundsControls.pressFireplaceRemoveDark()
    soundsControls.pressFireplaceRemove()
  })
}
