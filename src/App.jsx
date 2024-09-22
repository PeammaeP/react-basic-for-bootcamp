import TimeSection from "./time-section";

function App() {
  return (
    <div className="mt-6 flex flex-col justify-center items-center py-10">
      <header className="text-4xl font-mono text-redwood ">
        Pomodoro Timer
      </header>
      <TimeSection />
    </div>
  );
}

export default App;
