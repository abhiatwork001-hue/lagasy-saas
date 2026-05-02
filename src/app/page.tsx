"use client";

import { useState } from "react";
import { Check, Zap, Rocket, Building2, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for exploring the platform and starting your journey.",
    features: [
      "Up to 5 Projects",
      "Basic Analytics",
      "Community Support",
      "Standard Components",
      "1GB Storage",
    ],
    cta: "Start for Free",
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    popular: false,
  },
  {
    name: "Professional",
    price: { monthly: 29, yearly: 290 },
    description: "Everything you need to scale your business and automate workflows.",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Email Support",
      "Premium Components",
      "10GB Storage",
      "Custom Domains",
      "Team Collaboration",
    ],
    cta: "Start Pro Trial",
    icon: <Rocket className="h-6 w-6 text-purple-500" />,
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    description: "Advanced security, control, and support for large organizations.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated Account Manager",
      "Custom Contracts",
      "Unlimited Storage",
      "White-glove Onboarding",
      "24/7 Phone Support",
    ],
    cta: "Contact Sales",
    icon: <Building2 className="h-6 w-6 text-orange-500" />,
    popular: false,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/5" />
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-3 py-1 text-sm border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400">
              Pricing Plans
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Scale your business with <span className="text-blue-600 dark:text-blue-400">Lagasy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400"
          >
            Choose the plan that's right for you. All plans include 14 days of free trial. 
            No credit card required to get started.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <Label
              htmlFor="billing-cycle"
              className={`text-sm font-medium transition-colors ${!isYearly ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-zinc-500"}`}
            >
              Monthly
            </Label>
            <Switch
              id="billing-cycle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-600"
            />
            <Label
              htmlFor="billing-cycle"
              className={`text-sm font-medium transition-colors ${isYearly ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-zinc-500"}`}
            >
              Yearly
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-none">
                Save 20%
              </Badge>
            </Label>
          </motion.div>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card 
                className={`relative h-full flex flex-col border transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  tier.popular 
                    ? "border-blue-600 ring-2 ring-blue-600/10 dark:border-blue-500 dark:bg-zinc-900/50" 
                    : "border-slate-200 dark:border-zinc-800 dark:bg-zinc-950/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border-none">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-zinc-900">
                      {tier.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                  </div>
                  <CardDescription className="pt-2 text-slate-500 dark:text-zinc-400">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      ${isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400">
                        <Check className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full h-11 transition-all active:scale-95 ${
                      tier.popular 
                        ? "bg-blue-600 hover:bg-blue-700 text-white" 
                        : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-zinc-200"
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview or Trust Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-500">
            Trusted by developers from the world's best companies
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale dark:invert">
            <span className="text-xl font-bold tracking-tighter italic">Stripe</span>
            <span className="text-xl font-bold tracking-tighter">Vercel</span>
            <span className="text-xl font-bold tracking-tighter">Linear</span>
            <span className="text-xl font-bold tracking-tighter">Slack</span>
            <span className="text-xl font-bold tracking-tighter">Raycast</span>
          </div>
        </motion.div>

        {/* Simple Footer Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-3xl bg-blue-600 px-6 py-12 text-center text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:text-left"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to supercharge your workflow?
            </h2>
            <p className="mt-2 text-lg text-blue-100">
              Join over 10,000 teams using Lagasy today.
            </p>
          </div>
          <div className="mt-10 flex flex-shrink-0 items-center justify-center gap-6 lg:mt-0">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-none shadow-xl">
              Get Started Now
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-blue-700 border-white/20">
              Talk to Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
