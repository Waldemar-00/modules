const timer = ( endTime ) => {
    const getTimeRemaining = ( end ) => {
        const remainingTime = +new Date(end) - Date.now(); 
        const seconds = `${Math.floor((remainingTime / 1000) % 60)}`;
        const minutes = `${Math.floor((remainingTime / 1000 / 60) % 60)}`;
        const hours = `${Math.floor((remainingTime / 1000 / 60 / 60) % 24)}`;
        const days = `${Math.floor((remainingTime / 1000 / 60 / 60) / 24)}`;
        return {
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
            "remainingTime": remainingTime,
        };
    };
    const setTimerOnPage = () => {
        const spanDays = document.querySelector('#days');
        const spanHours = document.querySelector('#hours');
        const spanMinutes = document.querySelector('#minutes');
        const spanSeconds = document.querySelector('#seconds');
        const setTimer = () => {
            const times = getTimeRemaining(endTime);
            for (let key in times) {
                if (times[key].length === 1) {
                    times[key] = `0${times[key]}`;
                }
            }
            spanDays.innerHTML = times.days;
            spanHours.innerHTML = times.hours;
            spanMinutes.innerHTML = times.minutes;
            spanSeconds.innerHTML = times.seconds;
            if (times.days === '00' && times.hours === '00' &&
                times.minutes === '00' && times.seconds === '00') {
                return;
            }
        };
        setTimer();
        const recursionSetTimeout = () => {
            setTimer();
            setTimeout(() => {
                recursionSetTimeout();
            }, 1000);
        };
        recursionSetTimeout();
    };
    setTimerOnPage();
};
export default timer;






































