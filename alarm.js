function setAlarm() {
    const alarmTimeInput = document.getElementById("alarmTime");
    const alarmTime = alarmTimeInput.value;
  
    if (!alarmTime) {
      alert("Please enter a valid alarm time.");
      return;
    }
  
    const now = new Date();
    const alarm = new Date(now.toDateString() + " " + alarmTime);
  
    const timeUntilAlarm = alarm - now;
    if (timeUntilAlarm < 0) {
      alert("The alarm time has already passed for today.");
      return;
    }
  
    setTimeout(() => {
      alert("Time's up! Wake up!");
      playAlarmSound();
    }, timeUntilAlarm);
  }
  
  function playAlarmSound() {
    const alarmSound = document.getElementById("alarmSound");
    alarmSound.play();
  }
  