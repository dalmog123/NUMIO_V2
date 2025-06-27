"use client"

import { useState, useEffect } from "react"
import { FileText, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const RevenueRecognitionShowcase = () => {
    const [activeSSPAnalysis, setActiveSSPAnalysis] = useState(0)
    const [time, setTime] = useState("")

    const sspAnalyses = [
        {
            product: "Software License",
            category: "Enterprise",
            average: 125000,
            lowerBound: 87500,
            upperBound: 162500,
            inRangeCount: 69.2,
            belowCount: 8,
            aboveCount: 12,
            totalCount: 65,
            inRangePercent: 69.2,
        },
        {
            product: "Software License",
            category: "SMB",
            average: 45000,
            lowerBound: 31500,
            upperBound: 58500,
            inRangeCount: 78.0,
            belowCount: 15,
            aboveCount: 7,
            totalCount: 100,
            inRangePercent: 78.0,
        },
        {
            product: "Support Services",
            category: "Premium",
            average: 25000,
            lowerBound: 17500,
            upperBound: 32500,
            inRangeCount: 80.0,
            belowCount: 5,
            aboveCount: 3,
            totalCount: 40,
            inRangePercent: 80.0,
        },
    ]

    const performanceObligations = [
        { type: "Software License", percentage: 45, amount: "$2.8M", color: "bg-purple-400" },
        { type: "Support Services", percentage: 28, amount: "$1.7M", color: "bg-pink-400" },
        { type: "Implementation", percentage: 18, amount: "$1.1M", color: "bg-blue-400" },
        { type: "Training", percentage: 9, amount: "$560K", color: "bg-cyan-400" },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSSPAnalysis((prev) => (prev + 1) % sspAnalyses.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    // Update time on client only, avoid SSR mismatch
    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            )
        }
        updateTime()
        const timer = setInterval(updateTime, 60 * 1000) // update every minute

        return () => clearInterval(timer)
    }, [])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <div className="w-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl border border-zinc-700 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="revenue-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#revenue-grid)" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col p-4">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">
                        Revenue Recognition
                    </span>
                </div>

                {/* SSP Analysis */}
                <Card className="mb-4 bg-zinc-800/50 border-zinc-700">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-green-400" />
                            <CardTitle className="text-sm text-zinc-300">SSP Analysis</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                        {(() => {
                            const analysis = sspAnalyses[activeSSPAnalysis]
                            return (
                                <div className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-xs text-zinc-400">{analysis.product}</div>
                                            <div className="text-sm font-semibold text-white">{analysis.category}</div>
                                        </div>
                                        <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                                            {analysis.inRangePercent}% in range
                                        </Badge>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-zinc-400">SSP Range</span>
                                            <span className="text-zinc-300">
                                                {formatCurrency(analysis.lowerBound)} - {formatCurrency(analysis.upperBound)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-zinc-400">Average</span>
                                            <span className="text-white font-semibold">{formatCurrency(analysis.average)}</span>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="relative h-2 bg-zinc-700 rounded-full overflow-hidden">
                                                {/* Below (left side) */}
                                                <div
                                                    className="absolute left-1/2 top-0 h-full bg-green-400 transition-all duration-700 ease-out"
                                                    style={{
                                                        width: `${(analysis.belowCount / analysis.totalCount) * 100}%`,
                                                        transform: "translateX(-100%)",
                                                    }}
                                                />

                                                {/* Above (right side) */}
                                                <div
                                                    className="absolute left-1/2 top-0 h-full bg-green-400 transition-all duration-700 ease-out"
                                                    style={{
                                                        width: `${(analysis.aboveCount / analysis.totalCount) * 100}%`,
                                                        transform: "translateX(0%)",
                                                    }}
                                                />
                                            </div>

                                            <div className="flex justify-between text-xs text-zinc-500">
                                                <span>Below: {analysis.belowCount}</span>
                                                <span>In Range: {analysis.inRangeCount}</span>
                                                <span>Above: {analysis.aboveCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })()}
                    </CardContent>
                </Card>

                {/* Performance Obligations */}
                <Card className="bg-zinc-800/50 border-zinc-700">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-zinc-300">Performance Obligations</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                        <div className="space-y-2">
                            {performanceObligations.map((obligation, index) => (
                                <div key={obligation.type} className="flex items-center gap-2">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <div className={`w-2 h-2 rounded-full ${obligation.color}`} />
                                        <span className="text-xs text-zinc-300 truncate">{obligation.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-zinc-400">{obligation.amount}</span>
                                        <div className="w-8 h-1 bg-zinc-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${obligation.color} transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: `${obligation.percentage}%`,
                                                    animationDelay: `${index * 200}ms`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-zinc-300 font-mono w-6 text-right">
                                            {obligation.percentage}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Bottom Status */}
                <div className="pt-4 mt-4 border-t border-zinc-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                            <span className="text-xs text-zinc-400">ASC 606 Processing</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 text-zinc-500" />
                            <span className="text-xs text-zinc-500 font-mono">{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueRecognitionShowcase
