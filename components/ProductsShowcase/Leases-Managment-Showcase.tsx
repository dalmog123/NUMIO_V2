"use client"

import { useState, useEffect } from "react"
import {
    Database,
    Calendar,
    AlertCircle,
    CheckCircle,
    Building,
    ChevronDown,
    ChevronUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const LeasesManagementShowcase = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null)
    const [activeMetric, setActiveMetric] = useState(0)
    const [currentTime, setCurrentTime] = useState("")

    const leaseMetrics = [
        {
            label: "Portfolio Value",
            value: "$12.4M",
            trend: "+8.2%",
            color: "from-green-400 to-emerald-500",
            icon: Building,
            status: "healthy",
        },
        {
            label: "Compliance Rate",
            value: "99.1%",
            trend: "IFRS 16",
            color: "from-emerald-400 to-teal-500",
            icon: CheckCircle,
            status: "excellent",
        },
        {
            label: "Expiring Soon",
            value: "8",
            trend: "Next 90d",
            color: "from-orange-400 to-red-500",
            icon: AlertCircle,
            status: "attention",
        },
    ]

    const leaseClassification = [
        {
            type: "Operating Leases",
            count: 45,
            percentage: 68,
            amount: "$8.4M",
            color: "bg-green-400",
        },
        {
            type: "Finance Leases",
            count: 21,
            percentage: 32,
            amount: "$4.0M",
            color: "bg-emerald-400",
        },
    ]

    const leasePortfolio = [
        {
            id: "lease-001",
            property: "Downtown Office",
            type: "Operating",
            rou_asset: 2400000,
            liability: 2280000,
            monthly_payment: 45000,
            expiry: "2026-12-31",
            status: "active",
            compliance: "compliant",
        },
        {
            id: "lease-003",
            property: "Retail Space",
            type: "Operating",
            rou_asset: 950000,
            liability: 890000,
            monthly_payment: 18500,
            expiry: "2024-03-31",
            status: "expiring",
            compliance: "compliant",
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % leaseMetrics.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    // Fix hydration issue by rendering time only on client
    useEffect(() => {
        const now = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        setCurrentTime(now)
    }, [])

    const toggleSection = (sectionId: string) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId)
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-green-500/20 text-green-400 border-green-500/30"
            case "expiring":
                return "bg-orange-500/20 text-orange-400 border-orange-500/30"
            case "review_needed":
                return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            default:
                return "bg-gray-500/20 text-gray-400 border-gray-500/30"
        }
    }

    const getComplianceColor = (compliance: string) => {
        return compliance === "compliant"
            ? "bg-green-500/20 text-green-400 border-green-500/30"
            : "bg-red-500/20 text-red-400 border-red-500/30"
    }

    return (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl border border-zinc-700 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20" />
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="lease-grid" width="12" height="12" patternUnits="userSpaceOnUse">
                            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="currentColor" strokeWidth="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#lease-grid)" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col p-4">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                    <Database className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">
                        Leases Management
                    </span>
                </div>

                {/* Metric */}
                <Card className="mb-4 bg-zinc-800/50 border-zinc-700">
                    <CardContent className="p-3">
                        <div className="flex items-center gap-3 mb-2">
                            {(() => {
                                const Icon = leaseMetrics[activeMetric].icon
                                return <Icon className="w-4 h-4 text-green-400" />
                            })()}
                            <span className="text-sm text-zinc-400">{leaseMetrics[activeMetric].label}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-white">
                                {leaseMetrics[activeMetric].value}
                            </span>
                            <Badge
                                className={cn(
                                    "text-xs px-2 py-0.5 bg-gradient-to-r text-black font-medium",
                                    leaseMetrics[activeMetric].color
                                )}
                            >
                                {leaseMetrics[activeMetric].trend}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Lease Classification */}
                <Card className="mb-4 bg-zinc-800/50 border-zinc-700">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-zinc-300">Lease Classification</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                        <div className="space-y-2">
                            {leaseClassification.map((classification, index) => (
                                <div key={classification.type} className="flex items-center gap-2">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <div className={`w-2 h-2 rounded-full ${classification.color}`} />
                                        <span className="text-xs text-zinc-300 truncate">{classification.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-zinc-400">{classification.amount}</span>
                                        <div className="w-8 h-1 bg-zinc-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${classification.color} transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: `${classification.percentage}%`,
                                                    animationDelay: `${index * 200}ms`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-zinc-300 font-mono w-6 text-right">
                                            {classification.count}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Lease Portfolio */}
                <Card className="flex-1 bg-zinc-800/50 border-zinc-700">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-blue-400" />
                            <CardTitle className="text-sm text-zinc-300">Portfolio Overview</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 space-y-2">
                        {leasePortfolio.map((lease) => (
                            <div key={lease.id} className="border border-zinc-700 rounded-lg bg-zinc-900/50">
                                <div
                                    className="p-2 cursor-pointer hover:bg-zinc-800/50 transition-colors"
                                    onClick={() => toggleSection(lease.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Badge
                                                variant="secondary"
                                                className={cn("text-xs px-1.5 py-0.5", getStatusColor(lease.status))}
                                            >
                                                {lease.type}
                                            </Badge>
                                            <span className="text-xs text-zinc-300 truncate">{lease.property}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge
                                                variant="outline"
                                                className={cn("text-xs px-1 py-0", getComplianceColor(lease.compliance))}
                                            >
                                                {lease.compliance === "compliant" ? "✓" : "!"}
                                            </Badge>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-5 w-5 p-0 text-zinc-400 hover:text-zinc-200"
                                            >
                                                {expandedSection === lease.id ? (
                                                    <ChevronUp className="h-3 w-3" />
                                                ) : (
                                                    <ChevronDown className="h-3 w-3" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {expandedSection === lease.id && (
                                    <div className="px-2 pb-2">
                                        <div className="bg-zinc-800/30 rounded p-2 text-xs space-y-2">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                    <span className="text-zinc-400">ROU Asset:</span>
                                                    <div className="font-semibold text-zinc-200">
                                                        {formatCurrency(lease.rou_asset)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-400">Liability:</span>
                                                    <div className="font-semibold text-zinc-200">
                                                        {formatCurrency(lease.liability)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                    <span className="text-zinc-400">Monthly Payment:</span>
                                                    <div className="font-semibold text-zinc-200">
                                                        {formatCurrency(lease.monthly_payment)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-400">Expires:</span>
                                                    <div className="font-semibold text-zinc-200">{lease.expiry}</div>
                                                </div>
                                            </div>
                                            <div className="pt-1 border-t border-zinc-600">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-zinc-400">Asset Utilization:</span>
                                                    <div className="flex items-center gap-2">
                                                        <Progress
                                                            value={(lease.liability / lease.rou_asset) * 100}
                                                            className="w-12 h-1"
                                                        />
                                                        <span className="text-zinc-300 text-xs">
                                                            {Math.round((lease.liability / lease.rou_asset) * 100)}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                            <span className="text-xs text-zinc-400">IFRS 16 Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-zinc-500" />
                            {currentTime && (
                                <span className="text-xs text-zinc-500 font-mono">{currentTime}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeasesManagementShowcase
