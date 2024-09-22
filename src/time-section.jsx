const TimeSection = () => {
  return (
    <section className="mt-8 bg-redwood w-4/5 h-240 p-20">
      <section>
        <div className="text-4xl flex flex-row justify-center items-center font-mono">
          This is Time Section
        </div>
      </section>
      <section>
        <div className="mt-4 text-4xl flex flex-row justify-center items-center font-mono">
          25:00
        </div>
      </section>
      <section className="mt-12 grid grid-cols-2 justify-items-center items-center">
        <button className="border border-white px-4 rounded-full max-w-[128px] font-mono">
          Start
        </button>
        <button className="border border-white px-4 rounded-full max-w-[128px] font-mono">
          Reset
        </button>
      </section>
      <section className="mt-12 grid grid-cols-2 justify-items-center items-center">
        <div className="">
          <div className="px-4 rounded-full text-4xl items-center font-mono">
            Session Timer
          </div>
          <div className="px-4 rounded-full text-4xl font-mono flex flex-row justify-center items-center">
            25
          </div>
          <div className="mt-6 grid grid-cols-2">
            <button className="rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper">
              -
            </button>
            <button className="rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper">
              +
            </button>
          </div>
        </div>
        <div className="">
          <div className="px-4 rounded-full text-4xl font-mono">
            Break Timer
          </div>
          <div className="px-4 rounded-full text-4xl flex flex-row justify-center items-center font-mono">
            5
          </div>
          <div className="mt-6 grid grid-cols-2">
            <button className="rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper">
              -
            </button>
            <button className="rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper">
              +
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TimeSection;
