    //first clock
    
    let countdown;
    let timeLeft = 24;
    let timerIsRunning = false;

    const timerDisplay = document.getElementById('timer');
    const playButton = document.getElementById('playButton');
    const resetButton = document.getElementById('resetButton');
    const stopButton = document.getElementById('stopButton');

    function updateTimerDisplay() {
      timerDisplay.textContent = timeLeft;
    }

    function startTimer() {
      if (timerIsRunning) {
        return; // Timer is already running
      }

      countdown = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateTimerDisplay();
        } else {
          clearInterval(countdown);
          timerIsRunning = false;
        }
      }, 1000);
      timerIsRunning = true;
      playButton.textContent = 'Pause';
      resetButton.disabled = true;
      stopButton.disabled = false;
    }

    function stopTimer() {
      clearInterval(countdown);
      timerIsRunning = false;
      playButton.textContent = 'Play';
      resetButton.disabled = false;
      stopButton.disabled = true;
    }

    function resetTimer() {
      stopTimer();
      timeLeft = 24;
      updateTimerDisplay();
    }

    playButton.addEventListener('click', () => {
      if (timerIsRunning) {
        stopTimer();
      } else {
        startTimer();
      }
    });
    resetButton.addEventListener('click', resetTimer);
    stopButton.addEventListener('click', stopTimer);

  
    //second clock

    let countdown2;
    let timeLeft2 = 24;
    let timerIsRunning2 = false;

    const timerDisplay2 = document.getElementById('timer2');
    const playButton2 = document.getElementById('playButton2');
    const resetButton2 = document.getElementById('resetButton2');
    const stopButton2 = document.getElementById('stopButton2');

    function updateTimerDisplay2() {
      timerDisplay2.textContent = timeLeft2;
    }

    function startTimer2() {
      if (timerIsRunning2) {
        return; // Timer is already running
      }

      countdown2 = setInterval(() => {
        if (timeLeft2 > 0) {
          timeLeft2--;
          updateTimerDisplay2();
        } else {
          clearInterval(countdown2);
          timerIsRunning2 = false;
        }
        }, 1000);

        timerIsRunning2 = true;
        playButton2.textContent = 'Pause';
        resetButton2.disabled = true;
        stopButton2.disabled = false;
    }

    function stopTimer2() {
        clearInterval(countdown2);
        timerIsRunning2 = false;
        playButton2.textContent = 'Play';
        resetButton2.disabled = false;
        stopButton2.disabled = true;
    }

    function resetTimer2() {
        stopTimer2();
        timeLeft2 = 24;
        updateTimerDisplay2();
    }
    playButton2.addEventListener('click', () => {
        if (timerIsRunning2) {
        stopTimer2();
        } else {
        startTimer2();
        }
    });

  resetButton2.addEventListener('click', resetTimer2);
  stopButton2.addEventListener('click', stopTimer2);