import {
  buttonLightMode,
  buttonDarkMode,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMost,
  buttonLess,
  minutes,
  buttonPlayDark,
  buttonPauseDark,
  buttonStopDark,
  buttonMostDark,
  buttonLessDark,
  minutesDark
} from './elements.js'

export default function ({
  controls,
  timer,
  soundsControls,
  incrementTimer,
  incrementTimerDark
}) {
  buttonLightMode.addEventListener('click', function () {
    controls.lightMode()
  })

  buttonDarkMode.addEventListener('click', function () {
    controls.darkMode()
  })

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.coutdown()
    soundsControls.buttonPressAudio()
  })

  buttonPlayDark.addEventListener('click', function () {
    controls.play()
    timer.coutdown()
    soundsControls.buttonPressAudio()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    soundsControls.buttonPressAudio()
  })

  buttonPauseDark.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    soundsControls.buttonPressAudio()
  })

  buttonStop.addEventListener('click', function () {
    timer.resetTimer()
    controls.stop()
    timer.updateDisplay(minutes, 0, incrementTimer)
    timer.updateDisplayDark(minutesDark, 0, incrementTimerDark)
  })

  buttonStopDark.addEventListener('click', function () {
    timer.resetTimer()
    controls.stop()
    timer.updateDisplayDark(minutesDark, 0, incrementTimerDark)
    timer.updateDisplay(minutes, 0, incrementTimer)
  })

  buttonMost.addEventListener('click', function () {
    incrementTimer = incrementTimer + 5
    incrementTimerDark = incrementTimerDark + 5

    timer.updateDisplay(minutes, 0, incrementTimer)
    timer.updateDisplayDark(minutesDark, 0, incrementTimerDark)
    soundsControls.buttonPressAudio()
  })

  buttonMostDark.addEventListener('click', function () {
    incrementTimer = incrementTimer + 5
    incrementTimerDark = incrementTimerDark + 5

    timer.updateDisplay(minutes, 0, incrementTimer)
    timer.updateDisplayDark(minutesDark, 0, incrementTimerDark)
    soundsControls.buttonPressAudio()
  })

  buttonLess.addEventListener('click', function () {
    if (incrementTimer > 0) {
      incrementTimer = incrementTimer - 5
      incrementTimerDark = incrementTimerDark - 5

      timer.updateDisplay(minutes, 0, incrementTimer)
      timer.updateDisplayDark(minutesDark, 0, incrementTimerDark)
      soundsControls.buttonPressAudio()
    }
  })

  buttonLessDark.addEventListener('click', function () {
    if (incrementTimerDark > 0) {
      incrementTimer = incrementTimer - 5
      incrementTimerDark = incrementTimerDark - 5

      timer.updateDisplay(minutes, 0, incrementTimer)
      timer.updateDisplayDark(minutesDark, 0, incrementTimerDark)
      soundsControls.buttonPressAudio()
    }
  })
}
