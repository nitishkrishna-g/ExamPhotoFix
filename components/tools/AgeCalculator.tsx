"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCw } from "lucide-react";

export function AgeCalculator() {
    const [dob, setDob] = useState("");
    const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
    const [result, setResult] = useState<string | null>(null);

    const calculateAge = () => {
        if (!dob) return;

        const birthDate = new Date(dob);
        const onDate = new Date(targetDate);

        let years = onDate.getFullYear() - birthDate.getFullYear();
        let months = onDate.getMonth() - birthDate.getMonth();
        let days = onDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            // Get days in previous month
            const prevMonth = new Date(onDate.getFullYear(), onDate.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setResult(`You are ${years} Years, ${months} Months, and ${days} Days old.`);
    }

    return (
        <Card className="w-full border-2 border-blue-100 shadow-sm bg-white">
            <CardHeader className="bg-blue-50/50 border-b border-blue-100">
                <CardTitle className="text-xl text-blue-900">Sarkari Age Calculator</CardTitle>
                <CardDescription>Calculate your exact age for exam eligibility.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 min-h-[300px] flex flex-col items-center justify-center space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
                    <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                            id="dob"
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="h-12 text-lg"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="target">Calculate Age As Of</Label>
                        <Input
                            id="target"
                            type="date"
                            value={targetDate}
                            onChange={(e) => setTargetDate(e.target.value)}
                            className="h-12 text-lg"
                        />
                    </div>
                </div>

                <Button size="lg" className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-lg py-6" onClick={calculateAge}>
                    Calculate Age
                </Button>

                {result && (
                    <div className="mt-8 text-center animate-in fade-in zoom-in duration-300">
                        <h3 className="text-3xl font-bold text-blue-900 bg-blue-50 px-6 py-4 rounded-xl border border-blue-100 inline-block">
                            {result}
                        </h3>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
