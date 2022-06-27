import {
  rangeCardOne,
  rangeCardTwo,
  rangeCardThree,
  rangeCardOFour
} from './elements.js'

export default function ({
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
}) {
  function controlRange() {
    rangeCardOne.addEventListener('change', function () {
      buttonForestAudio.volume = this.value
      buttonForestAudioDark.volume = this.value
    })

    rangeCardTwo.addEventListener('change', function () {
      buttonRainAudio.volume = this.value
      buttonRainAudioDark.volume = this.value
    })

    rangeCardThree.addEventListener('change', function () {
      buttonCoffeShopAudio.volume = this.value
      buttonCoffeShopAudioDark.volume = this.value
    })

    rangeCardOFour.addEventListener('change', function () {
      buttonFireplaceAudio.volume = this.value
      buttonFireplaceAudioDark.volume = this.value
    })
  }

  function pressButtonFlorestAdd() {
    buttonForest.classList.add('hide')
    buttonForestTwo.classList.remove('hide')

    buttonForestDark.classList.add('hide')
    buttonForestTwoDark.classList.remove('hide')
  }

  function pressButtonFlorestAddDark() {
    buttonForestDark.classList.add('hide')
    buttonForestTwoDark.classList.remove('hide')

    buttonForest.classList.add('hide')
    buttonForestTwo.classList.remove('hide')
  }

  function pressButtonFlorestRemove() {
    buttonForestTwo.classList.add('hide')
    buttonForest.classList.remove('hide')

    buttonForestTwoDark.classList.add('hide')
    buttonForestDark.classList.remove('hide')

    buttonForestAudio.pause()
  }

  function pressButtonFlorestRemoveDark() {
    buttonForestTwoDark.classList.add('hide')
    buttonForestDark.classList.remove('hide')

    buttonForestTwo.classList.add('hide')
    buttonForest.classList.remove('hide')

    buttonForestAudio.pause()
  }

  function pressButtonRainAdd() {
    buttonRain.classList.add('hide')
    buttonRainTwo.classList.remove('hide')

    buttonRainDark.classList.add('hide')
    buttonRainTwoDark.classList.remove('hide')
  }

  function pressButtonRainAddDark() {
    buttonRainDark.classList.add('hide')
    buttonRainTwoDark.classList.remove('hide')

    buttonRain.classList.add('hide')
    buttonRainTwo.classList.remove('hide')
  }

  function pressButtonRainRemove() {
    buttonRainTwo.classList.add('hide')
    buttonRain.classList.remove('hide')

    buttonRainTwoDark.classList.add('hide')
    buttonRainDark.classList.remove('hide')

    buttonRainAudio.pause()
    buttonRainAudioDark.pause()
  }

  function pressButtonRainRemoveDark() {
    buttonRainTwoDark.classList.add('hide')
    buttonRainDark.classList.remove('hide')

    buttonRainTwo.classList.add('hide')
    buttonRain.classList.remove('hide')

    buttonRainAudio.pause()
    buttonRainAudioDark.pause()
  }

  function pressCoffeShopAdd() {
    buttonCoffeShop.classList.add('hide')
    buttonCoffeShopTwo.classList.remove('hide')

    buttonCoffeShopDark.classList.add('hide')
    buttonCoffeShopTwoDark.classList.remove('hide')
  }

  function pressCoffeShopAddDark() {
    buttonCoffeShopDark.classList.add('hide')
    buttonCoffeShopTwoDark.classList.remove('hide')

    buttonCoffeShop.classList.add('hide')
    buttonCoffeShopTwo.classList.remove('hide')
  }

  function pressCoffeShopRemove() {
    buttonCoffeShopTwo.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')

    buttonCoffeShopTwoDark.classList.add('hide')
    buttonCoffeShopDark.classList.remove('hide')

    buttonCoffeShopAudio.pause()
    buttonCoffeShopAudioDark.pause()
  }

  function pressCoffeShopRemoveDark() {
    buttonCoffeShopTwoDark.classList.add('hide')
    buttonCoffeShopDark.classList.remove('hide')

    buttonCoffeShopTwo.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')

    buttonCoffeShopAudio.pause()
    buttonCoffeShopAudioDark.pause()
  }

  function pressFireplaceShopAdd() {
    buttonFireplace.classList.add('hide')
    buttonFireplaceTwo.classList.remove('hide')

    buttonFireplaceDark.classList.add('hide')
    buttonFireplaceTwoDark.classList.remove('hide')
  }

  function pressFireplaceShopAddDark() {
    buttonFireplaceDark.classList.add('hide')
    buttonFireplaceTwoDark.classList.remove('hide')

    buttonFireplace.classList.add('hide')
    buttonFireplaceTwo.classList.remove('hide')
  }

  function pressFireplaceRemove() {
    buttonFireplaceTwo.classList.add('hide')
    buttonFireplace.classList.remove('hide')

    buttonFireplaceTwoDark.classList.add('hide')
    buttonFireplaceDark.classList.remove('hide')

    buttonFireplaceAudio.pause()
    buttonFireplaceAudioDark.pause()
  }

  function pressFireplaceRemoveDark() {
    buttonFireplaceTwoDark.classList.add('hide')
    buttonFireplaceDark.classList.remove('hide')

    buttonFireplaceTwo.classList.add('hide')
    buttonFireplace.classList.remove('hide')

    buttonFireplaceAudio.pause()
    buttonFireplaceAudioDark.pause()
  }

  function pressButtonSoundForest() {
    buttonForestAudio = new Audio(' ./sounds/Floresta.wav')
    buttonForestAudio.play()
    buttonForestAudio.loop = true
    controlRange()
  }

  function pressButtonSoundForestDark() {
    buttonForestAudioDark = new Audio(' ./sounds/Floresta.wav')
    buttonForestAudioDark.play()
    buttonForestAudioDark.loop = true
    controlRange()
  }

  function pressButtonSoundRain() {
    buttonRainAudio = new Audio(' ./sounds/Chuva.wav')
    buttonRainAudio.play()
    buttonRainAudio.loop = true
    controlRange()
  }

  function pressButtonSoundRainDark() {
    buttonRainAudioDark = new Audio(' ./sounds/Chuva.wav')
    buttonRainAudioDark.play()
    buttonRainAudioDark.loop = true
    controlRange()
  }

  function pressButtonSoundCoffeShop() {
    buttonCoffeShopAudio = new Audio(' ./sounds/Cafeteria.wav')
    buttonCoffeShopAudio.play()
    buttonCoffeShopAudio.loop = true
    controlRange()
  }

  function pressButtonSoundCoffeShopDark() {
    buttonCoffeShopAudioDark = new Audio(' ./sounds/Cafeteria.wav')
    buttonCoffeShopAudioDark.play()
    buttonCoffeShopAudioDark.loop = true
    controlRange()
  }

  function pressButtonSoundFireplace() {
    buttonFireplaceAudio = new Audio(' ./sounds/Lareira.wav')
    buttonFireplaceAudio.play()
    buttonFireplaceAudio.loop = true
    controlRange()
  }

  function pressButtonSoundFireplaceDark() {
    buttonFireplaceAudioDark = new Audio(' ./sounds/Lareira.wav')
    buttonFireplaceAudioDark.play()
    buttonFireplaceAudioDark.loop = true
    controlRange()
  }

  function timeEnd() {
    let timeEnd = new Audio(
      'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
    )
    timeEnd.play()
  }

  function buttonPressAudio() {
    let buttonPressAudio = new Audio(
      'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
    )
    buttonPressAudio.play()
  }

  return {
    buttonPressAudio,
    timeEnd,
    pressButtonSoundFireplace,
    pressButtonSoundCoffeShop,
    pressButtonSoundRain,
    pressButtonSoundForest,
    pressFireplaceRemove,
    pressFireplaceShopAdd,
    pressCoffeShopRemove,
    pressCoffeShopAdd,
    pressButtonRainRemove,
    pressButtonRainAdd,
    pressButtonFlorestRemove,
    pressButtonFlorestAdd,
    controlRange,

    pressButtonSoundFireplaceDark,
    pressButtonSoundCoffeShopDark,
    pressButtonSoundRainDark,
    pressButtonSoundForestDark,
    pressFireplaceRemoveDark,
    pressFireplaceShopAddDark,
    pressCoffeShopRemoveDark,
    pressCoffeShopAddDark,
    pressButtonRainRemoveDark,
    pressButtonRainAddDark,
    pressButtonFlorestRemoveDark,
    pressButtonFlorestAddDark
  }
}
