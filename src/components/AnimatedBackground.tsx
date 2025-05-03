export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 animate-gradient"></div>
      <div className="absolute inset-0 opacity-40">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
        <div className="absolute h-[40rem] w-[40rem] rounded-full bg-blue-400/30 dark:bg-blue-700/30 blur-3xl animate-blob"></div>
        <div className="absolute h-[35rem] w-[35rem] rounded-full bg-purple-400/30 dark:bg-purple-700/30 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute h-[30rem] w-[30rem] rounded-full bg-pink-400/30 dark:bg-pink-700/30 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 backdrop-blur-[100px]"></div>
    </div>
  );
}
