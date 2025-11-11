function SaleBanner() {
  try {
    const [timeLeft, setTimeLeft] = React.useState({
      days: 3,
      hours: 12,
      minutes: 45,
      seconds: 30
    });

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          let { days, hours, minutes, seconds } = prev;
          
          if (seconds > 0) seconds--;
          else if (minutes > 0) { minutes--; seconds = 59; }
          else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
          else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
          
          return { days, hours, minutes, seconds };
        });
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="bg-gradient-to-r from-[var(--terracotta)] via-[var(--golden-wheat)] to-[var(--moss-green)] text-white py-3 px-4 text-center" data-name="sale-banner" data-file="components/SaleBanner.js">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <div className="icon-clock text-lg"></div>
            <span className="font-semibold text-sm md:text-base">Hurry! The FurrLoops Cozy Sale ends soon</span>
          </div>
          <div className="flex gap-3 text-xs md:text-sm font-medium">
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{timeLeft.days}d</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{timeLeft.hours}h</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{timeLeft.minutes}m</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{timeLeft.seconds}s</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SaleBanner component error:', error);
    return null;
  }
}