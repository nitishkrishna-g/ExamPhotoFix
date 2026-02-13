
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXAMS } from "@/lib/exam-config";
import { ArrowRight, FileCheck, Scissors, Camera, GraduationCap, TrainFront } from "lucide-react";

export default function Home() {

  // Helper to get icon
  const getIcon = (id: string) => {
    if (id.includes('upsc')) return GraduationCap;
    if (id.includes('ssc')) return Scissors;
    if (id.includes('ibps')) return FileCheck;
    if (id.includes('rrb')) return TrainFront;
    return Camera;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
          Select Your Exam
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          One-stop tool to resize photos, signatures, and documents for
          <strong> UPSC, SSC, IBPS, NEET, and RRB</strong>.
          Auto-formatted to official 2026 guidelines.
        </p>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.values(EXAMS).map((exam) => {
          const Icon = getIcon(exam.id);
          return (
            <Card key={exam.id} className="hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-primary/20 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/5 rounded-xl text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg line-clamp-1">{exam.id.toUpperCase()}</CardTitle>
                </div>
                <CardDescription className="line-clamp-2 min-h-[40px]">{exam.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-500 bg-slate-50 p-2 rounded">
                  <span className="font-semibold block mb-1">Includes:</span>
                  <ul className="list-disc list-inside">
                    {exam.tools.slice(0, 2).map((t, i) => (
                      <li key={i}>{t.title}</li>
                    ))}
                    {exam.tools.length > 2 && <li>+ {exam.tools.length - 2} more</li>}
                  </ul>
                </div>
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  <Link href={`/resize/${exam.id}`}>
                    Open {exam.id.toUpperCase()} Tools <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <footer className="mt-20 text-center text-slate-400 text-sm">
        <p>© 2026 SarkariPhoto.in. Not affiliated with the Govt of India.</p>
      </footer>

    </div>
  );
}
