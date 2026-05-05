"use client";

import { useState } from "react";
import {
  Zap, X, Check, Calendar, Clock, Users, FileText,
  Thermometer, DollarSign, Brain, AlertTriangle,
  ChevronRight, Smartphone, BarChart2,
  ClipboardList, BookOpen, Handshake, Fingerprint,
  Umbrella, HeartPulse, Award, Timer, Wrench, Truck,
  TrendingUp, Bell, MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";


/* ─── NAVBAR ────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-white" />
          <span className="text-white font-black text-lg tracking-tight">LaGasy</span>
        </a>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {(["Features", "Compliance", "Pricing", "Docs"] as const).map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-400 hover:text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent"
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:flex text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg">
            Sign in
          </Button>
          <Button size="sm" className="bg-white text-black hover:bg-zinc-100 font-semibold rounded-lg">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ─── HERO DASHBOARD MOCK ───────────────────────────────────── */
function HeroDashboard() {
  const kpis = [
    { label: "Est. Daily Revenue", value: "€12,450", trend: "+8%", trendColor: "text-emerald-500" },
    { label: "Labor Cost %", value: "21.4%", trend: "↓1.2pp", trendColor: "text-emerald-500" },
    { label: "Sales / Labor Hr", value: "€38.20", trend: "+5%", trendColor: "text-emerald-500" },
    { label: "Active Today", value: "47 / 52", trend: "90%", trendColor: "text-blue-500" },
    { label: "Absence Rate", value: "9.6%", trend: "↑2.1pp", trendColor: "text-amber-500" },
    { label: "Open Issues", value: "3", trend: "critical", trendColor: "text-red-500" },
  ];
  const stores = [
    { name: "Flagship Lisboa", health: 97, revenue: "€4,350", dot: "bg-emerald-500", bar: "bg-emerald-500", pct: "97%", label: "text-emerald-500" },
    { name: "Uptown Porto", health: 71, revenue: "€2,780", dot: "bg-amber-500", bar: "bg-amber-500", pct: "71%", label: "text-amber-500" },
    { name: "Downtown Cascais", health: 42, revenue: "€1,640", dot: "bg-red-500", bar: "bg-red-500", pct: "42%", label: "text-red-500" },
  ];
  return (
    <div className="bg-zinc-900 ring-1 ring-white/5 shadow-2xl rounded-2xl p-5 md:p-6 max-w-4xl mx-auto text-left">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest">Executive Briefing</p>
          <p className="text-white font-semibold text-sm mt-0.5">Tuesday, 5 May 2026</p>
        </div>
        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs font-medium">● Live</Badge>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mb-5">
        {kpis.map((k) => (
          <div key={k.label} className="bg-zinc-950 rounded-xl p-3 ring-1 ring-white/5">
            <p className="text-zinc-500 text-[11px] mb-1 leading-tight">{k.label}</p>
            <p className="text-white text-xl font-bold leading-none">{k.value}</p>
            <p className={cn("text-[11px] font-medium mt-1", k.trendColor)}>{k.trend}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest mb-3">Store Health</p>
        <div className="space-y-2.5">
          {stores.map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              <div className={cn("w-2 h-2 rounded-full shrink-0", s.dot)} />
              <p className="text-white text-xs font-medium w-36 shrink-0">{s.name}</p>
              <div className="flex-1 bg-zinc-800 rounded-full h-1.5 min-w-0">
                <div className={cn("h-1.5 rounded-full transition-all", s.bar)} style={{ width: s.pct }} />
              </div>
              <p className={cn("text-xs font-bold w-9 text-right shrink-0", s.label)}>{s.health}%</p>
              <p className="text-zinc-400 text-xs w-14 text-right shrink-0 hidden sm:block">{s.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs mb-6 rounded-full px-3">
          Built for hospitality groups
        </Badge>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Run every shift.<br />
          Every store.<br />
          Without the chaos.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
          LaGasy gives restaurant groups a single operating system — attendance, compliance, scheduling, payroll and HR — built for the floor, not the office.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-100 font-semibold rounded-lg px-8">
            Start free trial
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 rounded-lg px-8">
            See the platform
          </Button>
        </div>
        <p className="text-zinc-600 text-sm mb-16">
          No credit card required · Setup in under 30 minutes · Cancel anytime
        </p>
        <HeroDashboard />
      </div>
    </section>
  );
}

/* ─── SOCIAL PROOF ──────────────────────────────────────────── */
function SocialProof() {
  return (
    <div className="bg-zinc-900 border-y border-zinc-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm font-medium">Trusted by hospitality operators across Portugal</p>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {["Restaurant A", "Hotel B", "Group C", "Catering D"].map((l) => (
            <span key={l} className="text-zinc-500 text-sm font-semibold">{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── PROBLEM STATEMENT ─────────────────────────────────────── */
function ProblemStatement() {
  const problems = [
    {
      title: "No more chat app operations",
      desc: "Paper timesheets, WhatsApp groups and shared spreadsheets — you can't run a 40-person operation on chat apps.",
    },
    {
      title: "HACCP failures are expensive",
      desc: "Health inspections fail because HACCP logs are forgotten, incomplete or illegible.",
    },
    {
      title: "Payroll errors drain your margins",
      desc: "Payroll errors, scheduling conflicts and missed absences cost you thousands every month.",
    },
  ];
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Every operator knows the pain.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 ring-1 ring-white/5">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <X className="h-4 w-4 text-red-500" />
              </div>
              <h3 className="text-white font-bold mb-2 text-sm">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURE TAB MOCKS ─────────────────────────────────────── */
function OperationsMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const shifts = [
    { name: "Ana F.", slots: [1, 1, 1, 1, 1, 0, 0], color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20" },
    { name: "Carlos R.", slots: [1, 1, 0, 1, 1, 1, 0], color: "bg-blue-500/20 text-blue-400 border-blue-500/20" },
    { name: "Vanessa C.", slots: [0, 0, 1, 1, 1, 1, 1], color: "bg-purple-500/20 text-purple-400 border-purple-500/20" },
    { name: "Tiago A.", slots: [1, 0, 0, 1, 0, 1, 1], color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20" },
  ];
  return (
    <div className="bg-zinc-950 rounded-xl ring-1 ring-white/5 p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-zinc-300 text-xs font-semibold">Week Schedule · Kitchen</p>
        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]">Published</Badge>
      </div>
      <div className="grid grid-cols-8 gap-1 text-[10px] mb-1">
        <div />
        {days.map((d) => <p key={d} className="text-zinc-500 text-center font-medium">{d}</p>)}
      </div>
      <div className="space-y-1.5">
        {shifts.map((s) => (
          <div key={s.name} className="grid grid-cols-8 gap-1 items-center">
            <p className="text-zinc-400 text-[11px] truncate">{s.name}</p>
            {s.slots.map((on, i) => (
              <div key={i} className={cn("h-5 rounded text-[9px] flex items-center justify-center border", on ? s.color : "bg-zinc-900 border-zinc-800")} >
                {on ? "AM" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AttendanceMock() {
  return (
    <div className="bg-zinc-950 rounded-xl ring-1 ring-white/5 p-4 text-xs">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-zinc-300 font-semibold text-sm">Carlos Rodrigues</p>
          <p className="text-zinc-500">Kitchen · Today</p>
        </div>
        <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px]">Needs Review</Badge>
      </div>
      <div className="space-y-2 mb-4">
        {[
          { label: "Punch In", value: "08:07", tag: "NFC ✓", note: "Deviation: +7 min", noteColor: "text-amber-400" },
          { label: "Break", value: "12:02 → 12:35", tag: "", note: "33 min", noteColor: "text-zinc-500" },
          { label: "Punch Out", value: "16:09", tag: "NFC ✓", note: "On time", noteColor: "text-emerald-400" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between bg-zinc-900 rounded-lg px-3 py-2">
            <span className="text-zinc-500 w-20">{row.label}</span>
            <span className="text-white font-medium">{row.value}</span>
            <span className={cn("text-[10px]", row.noteColor)}>{row.note}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-zinc-900 rounded-lg px-3 py-2 mb-4">
        <span className="text-zinc-400">Worked</span>
        <span className="text-white font-bold">7h 47m</span>
      </div>
      <div className="flex gap-2">
        <Button size="sm" className="flex-1 h-7 text-[11px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">Approve</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7 text-[11px] border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-md">Edit</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7 text-[11px] border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-md">Flag</Button>
      </div>
    </div>
  );
}

function PeopleMock() {
  const requests = [
    { name: "Ana Ferreira", dates: "Jul 14–21", status: "Pending", statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20", note: "" },
    { name: "Carlos R.", dates: "Jun 3–7", status: "Approved", statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", note: "reviewed by HR" },
    { name: "Vanessa C.", dates: "May 30", status: "Rejected", statusColor: "bg-red-500/10 text-red-400 border-red-500/20", note: "Staffing period" },
    { name: "Tiago A.", dates: "Aug 1–10", status: "Pending", statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20", note: "" },
  ];
  return (
    <div className="bg-zinc-950 rounded-xl ring-1 ring-white/5 p-4">
      <p className="text-zinc-300 text-xs font-semibold mb-3">Vacation Requests</p>
      <div className="space-y-2">
        {requests.map((r) => (
          <div key={r.name + r.dates} className="flex items-center justify-between bg-zinc-900 rounded-lg px-3 py-2.5 gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-white text-xs font-medium truncate">{r.name}</p>
              {r.note && <p className="text-zinc-500 text-[10px]">{r.note}</p>}
            </div>
            <p className="text-zinc-400 text-[11px] shrink-0">{r.dates}</p>
            <Badge className={cn("text-[10px] shrink-0 border", r.statusColor)}>{r.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComplianceMock() {
  const rows = [
    { check: "Fridge Check", time: "Today", status: "CRITICAL", statusColor: "text-red-400", bg: "bg-red-500/10 border-red-500/20", detail: "11.2°C (max 5°C)" },
    { check: "Oil Quality", time: "Today", status: "WARNING", statusColor: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", detail: "TPC 27% (max 24%)" },
    { check: "Cleaning", time: "Today", status: "OK", statusColor: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", detail: "Completed" },
    { check: "Food Expiry", time: "Today", status: "WARNING", statusColor: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", detail: "3 expired items" },
  ];
  return (
    <div className="bg-zinc-950 rounded-xl ring-1 ring-white/5 p-4">
      <p className="text-zinc-300 text-xs font-semibold mb-1">HACCP Log · Downtown Cascais</p>
      <p className="text-zinc-500 text-[10px] mb-3">Kitchen · 5 May 2026</p>
      <div className="space-y-1.5 mb-3">
        {rows.map((r) => (
          <div key={r.check} className="flex items-center gap-2 bg-zinc-900 rounded-lg px-3 py-2">
            <p className="text-zinc-300 text-xs flex-1">{r.check}</p>
            <p className="text-zinc-500 text-[10px]">{r.time}</p>
            <Badge className={cn("text-[10px] border", r.bg, r.statusColor)}>{r.status}</Badge>
            <p className={cn("text-[10px] w-28 text-right hidden sm:block", r.statusColor)}>{r.detail}</p>
          </div>
        ))}
      </div>
      <Button size="sm" className="w-full h-7 text-[11px] bg-red-600 hover:bg-red-700 text-white rounded-md">
        Review Flags
      </Button>
    </div>
  );
}

function FinanceMock() {
  const months = [3, 5, 4, 6, 7, 8, 9, 7, 6, 8, 7, 9];
  return (
    <div className="bg-zinc-950 rounded-xl ring-1 ring-white/5 p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-zinc-300 text-xs font-semibold">April 2026</p>
          <p className="text-zinc-500 text-[10px]">Flagship Lisboa</p>
        </div>
        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]">On target</Badge>
      </div>
      <div className="space-y-2 mb-4">
        {[
          { label: "Revenue", value: "€89,400", color: "text-white" },
          { label: "Labor Cost", value: "€17,200  (19.2%)", color: "text-emerald-400" },
          { label: "Expenses", value: "€6,100", color: "text-zinc-300" },
          { label: "EBITDA", value: "€66,100  (73.9%)", color: "text-white font-bold" },
        ].map((r) => (
          <div key={r.label} className="flex justify-between bg-zinc-900 rounded-lg px-3 py-2">
            <span className="text-zinc-400 text-xs">{r.label}</span>
            <span className={cn("text-xs", r.color)}>{r.value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-12">
        {months.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ height: `${h * 10}%`, backgroundColor: i === 3 ? "#10b981" : "#3f3f46" }} />
        ))}
      </div>
      <p className="text-zinc-600 text-[10px] mt-1 text-center">Monthly revenue — last 12 months</p>
    </div>
  );
}

function IntelligenceMock() {
  const stores = [
    { name: "Flagship Lisboa", overall: "🟢", compliance: "🟢", haccp: "🟢", staffing: "🟢", schedule: "🟢" },
    { name: "Uptown Porto", overall: "🟡", compliance: "🟢", haccp: "🟡", staffing: "🟡", schedule: "🟢" },
    { name: "Downtown Cascais", overall: "🔴", compliance: "🔴", haccp: "🔴", staffing: "🟡", schedule: "🔴" },
  ];
  return (
    <div className="bg-zinc-950 rounded-xl ring-1 ring-white/5 p-4">
      <p className="text-zinc-300 text-xs font-semibold mb-3">Store Health Matrix</p>
      <div className="grid grid-cols-6 gap-1 text-[10px] text-zinc-500 font-medium mb-2">
        <p className="col-span-2">Store</p>
        <p className="text-center">Comp.</p>
        <p className="text-center">HACCP</p>
        <p className="text-center">Staff</p>
        <p className="text-center">Sched.</p>
      </div>
      <div className="space-y-1.5">
        {stores.map((s) => (
          <div key={s.name} className="grid grid-cols-6 gap-1 items-center bg-zinc-900 rounded-lg px-2 py-2">
            <p className="text-zinc-300 text-[11px] col-span-2 truncate">{s.name}</p>
            <p className="text-center text-xs">{s.compliance}</p>
            <p className="text-center text-xs">{s.haccp}</p>
            <p className="text-center text-xs">{s.staffing}</p>
            <p className="text-center text-xs">{s.schedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FEATURE PILLARS ───────────────────────────────────────── */
const tabFeatures: Record<string, { icon: React.ReactNode; label: string; desc: string }[]> = {
  operations: [
    { icon: <Calendar className="h-4 w-4 text-blue-400" />, label: "Smart Scheduling", desc: "Drag-and-drop shifts, department views, one-click publish with approval workflow." },
    { icon: <ChevronRight className="h-4 w-4 text-blue-400" />, label: "Shift Handover", desc: "Digital handover notes between shifts, categorized by equipment, stock, incident or safety." },
    { icon: <ClipboardList className="h-4 w-4 text-blue-400" />, label: "Task Management", desc: "Group and individual tasks with subtodos, file submissions and full audit trail." },
    { icon: <BookOpen className="h-4 w-4 text-blue-400" />, label: "Notices & Wiki", desc: "Company knowledge base with mandatory reading tracking and per-store scoping." },
    { icon: <Handshake className="h-4 w-4 text-blue-400" />, label: "Meetings", desc: "Meeting requests, RSVPs, key points and conclusions stored for every session." },
  ],
  attendance: [
    { icon: <Smartphone className="h-4 w-4 text-blue-400" />, label: "NFC Clock-In", desc: "Tap any NFC tag to punch in/out. No app login required on the floor." },
    { icon: <Fingerprint className="h-4 w-4 text-blue-400" />, label: "Biometric Auth", desc: "Face ID and fingerprint verification on mobile for tamper-proof attendance." },
    { icon: <AlertTriangle className="h-4 w-4 text-blue-400" />, label: "Risk Scoring", desc: "Every time card gets an automatic risk score based on lateness, deviations and missed punches." },
    { icon: <Timer className="h-4 w-4 text-blue-400" />, label: "Grace Rules", desc: "Per-store configurable grace windows, rounding intervals and soft/hard deviation limits." },
    { icon: <Users className="h-4 w-4 text-blue-400" />, label: "Manager Review", desc: "One-click review UI to approve, correct or flag any time card anomaly." },
  ],
  people: [
    { icon: <Umbrella className="h-4 w-4 text-blue-400" />, label: "Vacation Workflow", desc: "Request, conflict-check, approve or reject with reason — all in one thread." },
    { icon: <HeartPulse className="h-4 w-4 text-blue-400" />, label: "Absence Management", desc: "Record sick days, personal leave and unjustified absences with justification tracking." },
    { icon: <Clock className="h-4 w-4 text-blue-400" />, label: "Overtime Requests", desc: "Two-tier approval (manager → HR) with override capability." },
    { icon: <FileText className="h-4 w-4 text-blue-400" />, label: "Document Expiry Alerts", desc: "Contracts, health certs and food hygiene certificates flagged 30 days before expiry." },
    { icon: <Award className="h-4 w-4 text-blue-400" />, label: "Evaluations & Awards", desc: "360 reviews, trial period evaluations and employee of the month recognition." },
  ],
  compliance: [
    { icon: <Thermometer className="h-4 w-4 text-blue-400" />, label: "HACCP Logs", desc: "Daily fridge temperature, oil quality, cleaning and expiry checks with digital signature." },
    { icon: <AlertTriangle className="h-4 w-4 text-blue-400" />, label: "Flag Detection", desc: "Out-of-range values auto-flagged as warning or critical. Requires manager review." },
    { icon: <BarChart2 className="h-4 w-4 text-blue-400" />, label: "Missed Log Tracking", desc: "Stores with incomplete checks surface immediately on the compliance dashboard." },
    { icon: <Wrench className="h-4 w-4 text-blue-400" />, label: "Equipment Audits", desc: "Track every asset with repair history and retirement records." },
    { icon: <Zap className="h-4 w-4 text-blue-400" />, label: "Problem Tracker", desc: "Any staff member can raise an incident. Routed by type to the right team with full comment thread." },
  ],
  finance: [
    { icon: <DollarSign className="h-4 w-4 text-blue-400" />, label: "Payroll Records", desc: "Monthly payroll with base salary, food allowance, overtime pay and adjustable bonuses." },
    { icon: <TrendingUp className="h-4 w-4 text-blue-400" />, label: "Daily Sales", desc: "Record gross/net revenue per store per day. Lock verified records to prevent edits." },
    { icon: <FileText className="h-4 w-4 text-blue-400" />, label: "Expense Tracking", desc: "Log maintenance, supplies and utilities against each location." },
    { icon: <Truck className="h-4 w-4 text-blue-400" />, label: "Supplier Orders", desc: "Full order lifecycle: create → send → supplier confirms → received. Public supplier portal." },
    { icon: <BarChart2 className="h-4 w-4 text-blue-400" />, label: "Labor Cost %", desc: "Real-time labor cost as % of revenue, tracked per store with month-over-month trend." },
  ],
  intelligence: [
    { icon: <Brain className="h-4 w-4 text-blue-400" />, label: "Executive Briefing", desc: "Daily KPI summary across all locations: revenue, labor cost %, attendance, issues." },
    { icon: <MapPin className="h-4 w-4 text-blue-400" />, label: "Store Health Matrix", desc: "Every store scored on compliance, staffing, HACCP and scheduling — from one screen." },
    { icon: <Users className="h-4 w-4 text-blue-400" />, label: "Labor Efficiency", desc: "Track scheduled vs. actual hours and flag locations operating below or above threshold." },
    { icon: <Bell className="h-4 w-4 text-blue-400" />, label: "Smart Alerts", desc: "Expiring documents, missed HACCP checks, unresolved incidents and unfilled schedules surface automatically." },
    { icon: <Smartphone className="h-4 w-4 text-blue-400" />, label: "Mobile-First", desc: "Full iOS and Android apps. NFC, biometrics, offline mode and push notifications built in." },
  ],
};

const tabMocks: Record<string, React.ReactNode> = {
  operations: <OperationsMock />,
  attendance: <AttendanceMock />,
  people: <PeopleMock />,
  compliance: <ComplianceMock />,
  finance: <FinanceMock />,
  intelligence: <IntelligenceMock />,
};

function FeaturePillars() {
  const tabLabels = [
    { value: "operations", label: "Operations" },
    { value: "attendance", label: "Attendance" },
    { value: "people", label: "People" },
    { value: "compliance", label: "Compliance" },
    { value: "finance", label: "Finance" },
    { value: "intelligence", label: "Intelligence" },
  ];
  return (
    <section id="features" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">One platform. Six operating layers.</h2>
        </div>
        <Tabs defaultValue="operations">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 mb-8 w-full">
            {tabLabels.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="flex-1 min-w-[80px] text-xs font-medium rounded-lg py-2 data-active:bg-white data-active:text-black text-zinc-400 hover:text-white transition-colors"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabLabels.map((t) => (
            <TabsContent key={t.value} value={t.value}>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-0 bg-zinc-900 rounded-xl border border-zinc-800 ring-1 ring-white/5 divide-y divide-zinc-800">
                  {tabFeatures[t.value].map((f) => (
                    <div key={f.label} className="flex gap-3 p-4">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                        {f.icon}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{f.label}</p>
                        <p className="text-zinc-400 text-xs leading-relaxed mt-0.5">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="md:sticky md:top-24">
                  {tabMocks[t.value]}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

/* ─── COMPLIANCE SPOTLIGHT ──────────────────────────────────── */
function ComplianceSpotlight() {
  const bullets = [
    "Daily fridge, oil, cleaning and expiry checks",
    "Auto-flag on out-of-range readings (warning / critical)",
    "Digital signatures on every log",
    "Missed check tracking with store comparison",
    "Full audit trail exportable for inspectors",
  ];
  return (
    <section id="compliance" className="py-24 bg-[#0a0a0a] border-y border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs mb-4 rounded-full">Compliance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Zero HACCP violations.<br />Starting day one.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              LaGasy auto-flags out-of-range readings the moment they're logged, tracks every missed check and surfaces problems before inspectors do. Your compliance record becomes a competitive advantage.
            </p>
            <ul className="space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ComplianceMock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ───────────────────────────────────────────────── */
const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    monthly: 49,
    annual: 39,
    desc: "Perfect for a single-location business",
    popular: false,
    included: [
      "1 store",
      "Up to 25 employees",
      "Scheduling & attendance",
      "HACCP logs",
      "Vacation & absence management",
      "Task management",
      "Mobile app (iOS & Android)",
    ],
    excluded: ["Payroll module", "Supplier orders", "Multi-store dashboard"],
    cta: "Start free trial",
    ctaVariant: "outline" as const,
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 129,
    annual: 99,
    desc: "For growing groups with 2–3 locations",
    popular: true,
    included: [
      "Up to 3 stores",
      "Up to 75 employees",
      "Everything in Starter",
      "Payroll records",
      "Daily sales & expenses",
      "Supplier orders & portal",
      "Equipment management",
      "Performance evaluations",
      "Store health matrix",
    ],
    excluded: [],
    cta: "Start free trial",
    ctaVariant: "default" as const,
  },
  {
    id: "scale",
    name: "Scale",
    monthly: 299,
    annual: 239,
    desc: "For established multi-site operations",
    popular: false,
    included: [
      "Up to 10 stores",
      "Up to 300 employees",
      "Everything in Growth",
      "Executive briefing dashboard",
      "Advanced compliance reporting",
      "360° evaluations & surveys",
      "Wiki & mandatory training tracking",
      "Priority support",
    ],
    excluded: [],
    cta: "Start free trial",
    ctaVariant: "outline" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: null,
    annual: null,
    desc: "For large groups and franchise operations",
    popular: false,
    included: [
      "Unlimited stores & employees",
      "Everything in Scale",
      "Custom integrations & API access",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom feature development",
      "On-site onboarding & training",
    ],
    excluded: [],
    cta: "Contact us",
    ctaVariant: "outline" as const,
  },
];

const comparisonRows = [
  { feature: "Stores", starter: "1", growth: "3", scale: "10", enterprise: "Unlimited" },
  { feature: "Employees", starter: "25", growth: "75", scale: "300", enterprise: "Unlimited" },
  { feature: "Scheduling", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "NFC Attendance", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "HACCP Logs", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Vacation & Absence", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Task Management", starter: "✓", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Payroll Records", starter: "—", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Daily Sales", starter: "—", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Supplier Orders", starter: "—", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Equipment Audits", starter: "—", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Store Health Matrix", starter: "—", growth: "✓", scale: "✓", enterprise: "✓" },
  { feature: "Executive Briefing", starter: "—", growth: "—", scale: "✓", enterprise: "✓" },
  { feature: "360° Evaluations", starter: "—", growth: "—", scale: "✓", enterprise: "✓" },
  { feature: "Wiki & Training", starter: "—", growth: "—", scale: "✓", enterprise: "✓" },
  { feature: "API Access", starter: "—", growth: "—", scale: "—", enterprise: "✓" },
  { feature: "Dedicated Manager", starter: "—", growth: "—", scale: "—", enterprise: "✓" },
  { feature: "Custom Development", starter: "—", growth: "—", scale: "—", enterprise: "✓" },
];

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section id="pricing" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Simple pricing. Serious operations.</h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <Label htmlFor="billing" className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-white" : "text-zinc-500")}>Monthly</Label>
            <Switch id="billing" checked={isAnnual} onCheckedChange={setIsAnnual} />
            <Label htmlFor="billing" className={cn("text-sm font-medium transition-colors", isAnnual ? "text-white" : "text-zinc-500")}>
              Annual
              <Badge className="ml-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]">Save 20%</Badge>
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "bg-zinc-900 rounded-xl p-6 border flex flex-col ring-1",
                tier.popular
                  ? "border-zinc-600 ring-white/20 relative"
                  : tier.id === "enterprise"
                  ? "border-zinc-800 ring-white/5 bg-zinc-800/50"
                  : "border-zinc-800 ring-white/5"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-white text-black text-[10px] font-bold px-3">Most Popular</Badge>
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-white font-bold text-lg mb-1">{tier.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4">{tier.desc}</p>
                {tier.monthly !== null ? (
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-black text-white">
                      €{isAnnual ? tier.annual : tier.monthly}
                    </span>
                    <span className="text-zinc-500 text-sm mb-1">/mo</span>
                    {isAnnual && (
                      <span className="text-zinc-600 text-xs line-through mb-1 ml-1">€{tier.monthly}</span>
                    )}
                  </div>
                ) : (
                  <div className="text-3xl font-black text-white">Custom</div>
                )}
                {tier.monthly !== null && (
                  <p className="text-zinc-600 text-[11px] mt-1">
                    {isAnnual ? `Billed €${(tier.annual! * 12).toLocaleString()}/year` : "Billed monthly"}
                  </p>
                )}
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {tier.included.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                {tier.excluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-zinc-600">
                    <X className="h-3.5 w-3.5 text-zinc-700 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.ctaVariant}
                className={cn(
                  "w-full rounded-lg font-semibold",
                  tier.popular
                    ? "bg-white text-black hover:bg-zinc-100"
                    : "border-zinc-700 text-white hover:bg-zinc-800"
                )}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Separator className="mb-4 bg-zinc-800" />
          <p className="text-zinc-500 text-sm">All plans include a 14-day free trial · No setup fees · Cancel anytime</p>
        </div>

        <Accordion>
          <AccordionItem value="comparison" className="border-zinc-800">
            <AccordionTrigger className="text-zinc-400 hover:text-white text-sm py-3 no-underline hover:no-underline">
              Compare all features
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left text-zinc-500 font-medium py-2 pr-4 w-40">Feature</th>
                      {["Starter", "Growth", "Scale", "Enterprise"].map((t) => (
                        <th key={t} className="text-center text-zinc-400 font-semibold py-2 px-3">{t}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((r, i) => (
                      <tr key={r.feature} className={cn("border-b border-zinc-800/50", i % 2 === 0 ? "" : "bg-zinc-900/30")}>
                        <td className="text-zinc-400 py-2.5 pr-4">{r.feature}</td>
                        {[r.starter, r.growth, r.scale, r.enterprise].map((v, j) => (
                          <td key={j} className={cn("text-center py-2.5 px-3 font-medium", v === "✓" ? "text-emerald-500" : v === "—" ? "text-zinc-700" : "text-zinc-300")}>
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How long does setup take?",
    a: "Most teams are fully onboarded in under 30 minutes. We provide a guided setup wizard and a demo data seed so you can see every feature in action immediately.",
  },
  {
    q: "Does it work for my country / language?",
    a: "LaGasy supports English and Portuguese (PT) with more locales coming. Payroll rules and tax fields are configurable per company.",
  },
  {
    q: "Can my staff use it without a smartphone?",
    a: "Yes. Attendance can be recorded via NFC tags placed at your entrance — staff tap in and out with any NFC-enabled card or phone, no app login needed.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You can export all your data at any time. After cancellation we retain it for 30 days before permanent deletion.",
  },
  {
    q: "Is it GDPR compliant?",
    a: "Yes. Data is stored in EU-based servers. Personal data is encrypted at rest and in transit. We act as a data processor under your DPA.",
  },
  {
    q: "Do you integrate with my POS / accounting software?",
    a: "The Scale and Enterprise plans include API access. We have connectors available for common POS systems — contact us for specifics.",
  },
];

function FAQ() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <Accordion multiple className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-zinc-900 border border-zinc-800 rounded-xl ring-1 ring-white/5 px-5">
              <AccordionTrigger className="text-white font-medium text-sm py-4 no-underline hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-400 text-sm leading-relaxed pb-2">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-32 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Your next shift starts in LaGasy.
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
          Join hospitality operators who replaced spreadsheets and WhatsApp groups with one platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-100 font-semibold rounded-lg px-8">
            Start free trial
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 rounded-lg px-8">
            Book a demo
          </Button>
        </div>
        <p className="text-zinc-600 text-sm">
          No credit card required · Setup in under 30 minutes · Cancel anytime
        </p>
      </div>
    </section>
  );
}

/* ─── FOOTER ────────────────────────────────────────────────── */
function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Changelog", "Roadmap"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "GDPR", "Security"],
    },
  ];
  return (
    <footer className="border-t border-zinc-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-white" />
              <span className="text-white font-black text-lg tracking-tight">LaGasy</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">The operating system for hospitality.</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-zinc-400 font-semibold text-xs uppercase tracking-widest mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="bg-zinc-800 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-600 text-xs">
          <p>© 2026 LaGasy. All rights reserved.</p>
          <p>Made with ❤️ in 🇵🇹 Portugal</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemStatement />
      <FeaturePillars />
      <ComplianceSpotlight />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
