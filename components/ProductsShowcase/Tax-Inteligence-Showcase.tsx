"use client"

import { useState, useEffect } from "react"
import {
    TrendingUp,
    AlertTriangle,
    CheckCircle,
    BarChart3,
    Eye,
    ChevronDown,
    ChevronUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TaxIntelligenceShowcase = () => {
    const [activeMetric, setActiveMetric] = useState(0)
    const [expandedSection, setExpandedSection] = useState<string | null>(null)
    const [time, setTime] = useState("")

    // Sample data that represents your tax intelligence capabilities
    const metrics = [
        {
            label: "VAT Compliance",
            value: "98.7%",
            trend: "+2.3%",
            color: "from-cyan-400 to-blue-500",
            icon: CheckCircle,
            status: "excellent",
        },
        {
            label: "Risk Detection",
            value: "24",
            trend: "Flagged",
            color: "from-orange-400 to-red-500",
            icon: AlertTriangle,
            status: "warning",
        },
        {
            label: "Processing Speed",
            value: "2.4s",
            trend: "Real-time",
            color: "from-green-400 to-emerald-500",
            icon: TrendingUp,
            status: "good",
        },
    ]

    const recordTypes = [
        { type: "S", name: "Standard Sales", percentage: 45, color: "bg-cyan-400", amount: "₪2.4M" },
        { type: "T", name: "Domestic Purchases", percentage: 28, color: "bg-blue-400", amount: "₪1.8M" },
        { type: "L", name: "Unidentified", percentage: 15, color: "bg-orange-400", amount: "₪890K" },
        { type: "M", name: "Reverse Charge", percentage: 12, color: "bg-green-400", amount: "₪650K" },
    ]

    const redFlags = [
        {
            id: "high-risk",
            title: "High Risk Transactions",
            count: 8,
            severity: "high",
            transactions: [
                { amount: "₪12,500", taxRate: "0%", date: "2024-01-15", ref: "INV-2024-001" },
                { amount: "₪8,900", taxRate: "25%", date: "2024-01-14", ref: "INV-2024-002" },
            ],
        },
        {
            id: "tax-anomalies",
            title: "Tax Rate Anomalies",
            count: 16,
            severity: "medium",
            transactions: [
                { amount: "₪3,200", taxRate: "19.5%", date: "2024-01-13", ref: "INV-2024-003" },
                { amount: "₪5,100", taxRate: "16.8%", date: "2024-01-12", ref: "INV-2024-004" },
            ],
        },
    ]

    // Auto-cycle through metrics
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % metrics.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    // Time update on client only
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
        const timer = setInterval(updateTime, 60 * 1000)
        return () => clearInterval(timer)
    }, [])

    const toggleSection = (sectionId: string) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId)
    }

    return (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl border border-zinc-700 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">Tax Intelligence</span>
                    </div>
                    <div className="flex gap-1">
                        {metrics.map((_, index) => (
                            <div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === activeMetric ? "bg-cyan-400" : "bg-zinc-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Active Metric Display */}
                <Card className="mb-4 bg-zinc-800/50 border-zinc-700">
                    <CardContent className="p-3">
                        <div className="flex items-center gap-3 mb-2">
                            {(() => {
                                const IconComponent = metrics[activeMetric].icon
                                return <IconComponent className="w-4 h-4 text-cyan-400" />
                            })()}
                            <span className="text-sm text-zinc-400">{metrics[activeMetric].label}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-white">{metrics[activeMetric].value}</span>
                            <Badge
                                className={cn(
                                    "text-xs px-2 py-0.5 bg-gradient-to-r text-black font-medium",
                                    metrics[activeMetric].color,
                                )}
                            >
                                {metrics[activeMetric].trend}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Record Type Distribution */}
                <Card className="mb-4 bg-zinc-800/50 border-zinc-700">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-zinc-300">Record Distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                        <div className="space-y-2">
                            {recordTypes.map((record, index) => (
                                <div key={record.type} className="flex items-center gap-2">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <div className={`w-2 h-2 rounded-full ${record.color}`} />
                                        <span className="text-xs text-zinc-300 font-mono">{record.type}</span>
                                        <span className="text-xs text-zinc-400 truncate">{record.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-1 bg-zinc-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${record.color} transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: `${record.percentage}%`,
                                                    animationDelay: `${index * 200}ms`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-zinc-300 font-mono w-6 text-right">{record.percentage}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Red Flags Section */}
                <Card className="flex-1 bg-zinc-800/50 border-zinc-700">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            <CardTitle className="text-sm text-zinc-300">Risk Alerts</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 space-y-2">
                        {redFlags.map((flag) => (
                            <div key={flag.id} className="border border-zinc-700 rounded-lg bg-zinc-900/50">
                                <div
                                    className="p-2 cursor-pointer hover:bg-zinc-800/50 transition-colors"
                                    onClick={() => toggleSection(flag.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Badge
                                                variant="secondary"
                                                className={cn(
                                                    "text-xs px-1.5 py-0.5",
                                                    flag.severity === "high"
                                                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                                                        : "bg-orange-500/20 text-orange-400 border-orange-500/30",
                                                )}
                                            >
                                                {flag.count}
                                            </Badge>
                                            <span className="text-xs text-zinc-300">{flag.title}</span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0 text-zinc-400 hover:text-zinc-200">
                                            {expandedSection === flag.id ? (
                                                <ChevronUp className="h-3 w-3" />
                                            ) : (
                                                <ChevronDown className="h-3 w-3" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                {expandedSection === flag.id && (
                                    <div className="px-2 pb-2 space-y-1">
                                        {flag.transactions.slice(0, 2).map((transaction, index) => (
                                            <div key={index} className="bg-zinc-800/30 rounded p-2 text-xs">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-semibold text-zinc-200">{transaction.amount}</span>
                                                    <Badge variant="outline" className="text-xs px-1 py-0 border-red-500/30 text-red-400">
                                                        {transaction.taxRate}
                                                    </Badge>
                                                </div>
                                                <div className="text-zinc-400 space-y-0.5">
                                                    <div>Date: {transaction.date}</div>
                                                    <div>Ref: {transaction.ref}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Bottom Status */}
                <div className="mt-3 pt-2 border-t border-zinc-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-xs text-zinc-400">Live Processing</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="w-3 h-3 text-zinc-500" />
                            <span className="text-xs text-zinc-500 font-mono">{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaxIntelligenceShowcase
