import {
  minutes,
  minutesDark,
  incrementTimer,
  incrementTimerDark,
  buttonStop
} from './elements.js'

export default function Timer({
  controls,
  soundsControls,
  minutesDisplay,
  secondsDisplay,
  minutesDisplayDark,
  secondsDisplayDark
}) {
  let timerTimeout

  function updateDisplay(minutes, seconds, incrementTimer) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    minutesDisplay.textContent = String(incrementTimer).padStart(2, '0')
  }

  function updateDisplayDark(minutesDark, secondsDark, incrementTimerDark) {
    minutesDisplayDark.textContent = String(minutesDark).padStart(2, '0')
    secondsDisplayDark.textContent = String(secondsDark).padStart(2, '0')
    minutesDisplayDark.textContent = String(incrementTimerDark).padStart(2, '0')
  }
  function hold() {
    clearTimeout(timerTimeout)
  }

  function resetTimer() {
    updateDisplay(minutes, 0, incrementTimer)
    updateDisplay(minutesDark, 0, incrementTimerDark)

    hold()
  }

  function coutdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      let secondsDark = Number(secondsDisplayDark.textContent)
      let minutesDark = Number(minutesDisplayDark.textContent)
      let isFinishedDark = minutesDark <= 0 && secondsDark <= 0

      if (isFinished && isFinishedDark) {
        soundsControls.timeEnd()
        buttonStop.click()
        controls.stop()
        return
      }

      if (seconds <= 0 && secondsDark <= 0) {
        seconds = 60
        secondsDark = 60
        --minutes
        --minutesDark
      }

      updateDisplay(minutes, Number(--seconds), minutes)
      updateDisplayDark(minutesDark, Number(--secondsDark), minutesDark)

      coutdown()
    }, 1000)
  }

  return {
    updateDisplay,
    updateDisplayDark,
    resetTimer,
    coutdown,
    hold
  }
}
