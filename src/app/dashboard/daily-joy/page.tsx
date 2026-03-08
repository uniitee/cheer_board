import DailyJoyMissions from "@/app/_components/dashboard/DailyJoyMissions";
import MonthlyJoyCalendar from "@/app/_components/dashboard/MonthlyJoyCalendar";

export default function DailyJoyPage() {
  return (

    <div className="p-6">

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Daily Joy <span className="text-emerald-300">Missions</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          Take a small step toward positivity each day. Complete simple missions designed to 
          bring moments of joy, gratitude, and connection into your classroom. 
          These small actions can brighten your day and create a more positive learning environment.
        </p>
      </div>
      <br></br>
      <div className="grid md:grid-cols-2 gap-8">
        <DailyJoyMissions />
        <MonthlyJoyCalendar />
      </div>
    </div>
  );
}