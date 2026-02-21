"use client";

import { useState } from "react";
import { Check, X, Sparkles } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";

export interface CourseFeature {
  label: string;
  included: boolean;
}

export interface CoursePricing {
  originalPrice: string;
  earlyBirdPrice: string;
  oldStudentPrice: string;
}

export interface CourseCardProps {
  title: string;
  subtitle?: string;
  pricing: CoursePricing;
  features: CourseFeature[];
  isFlagship?: boolean;
  isMiddle?: boolean;
  onEnroll?: () => void;
}

const CourseCard = ({
  title,
  subtitle,
  pricing,
  features,
  isFlagship = false,
  isMiddle = false,
  onEnroll,
}: CourseCardProps) => {
  const [isOldStudent, setIsOldStudent] = useState(false);

  const displayPrice = isOldStudent
    ? pricing.oldStudentPrice
    : pricing.earlyBirdPrice;

  return (
    <div
      className={`
        relative flex flex-col h-full rounded-3xl font-sans transition-all duration-300
        ${
          isFlagship
            ? "bg-[#f6f4f0] border-2 border-impact-orange shadow-2xl shadow-orange-200 scale-105"
            : isMiddle
              ? "bg-neutral-100 border border-stone-200 shadow-lg "
              : "bg-stone-50 border border-neutral-200 shadow-md"
        }
        ${isFlagship ? "p-7" : "p-6"}
      `}
    >
      {/* Flagship banner */}
      {isFlagship && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-impact-orange text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md whitespace-nowrap">
          <Sparkles size={12} />
          Most Recommended
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          <h3
            className={`font-bold text-neutral-900 leading-tight ${
              isFlagship ? "text-xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-neutral-500 mt-0.5">{subtitle}</p>
          )}
        </div>

        {/* Old student toggle */}
        <div className="flex gap-1 text-sm items-end shrink-0">
          <Switch checked={isOldStudent} onCheckedChange={setIsOldStudent} />
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-3 mb-4">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-bold text-neutral-900 ${
              isFlagship ? "text-4xl" : "text-3xl"
            }`}
          >
            {displayPrice}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-neutral-400 line-through">
            {pricing.originalPrice}
          </span>
          <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
            {isOldStudent ? "CAT'25 exclusive" : "Early Bird"}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onEnroll}
        className={`
          w-full py-3 rounded-2xl font-bold text-sm transition-all duration-200
          hover:scale-[1.02] active:scale-95 inset-shadow-sm inset-shadow-white
          ${
            isFlagship
              ? "bg-impact-orange text-white shadow-lg shadow-orange-200 hover:bg-orange-500"
              : "bg-neutral-900 text-white hover:bg-neutral-700"
          }
        `}
      >
        {isFlagship ? "Enroll Now →" : "Get Started"}
      </button>

      {/* Divider */}
      <div className="border-t border-stone-200 my-5" />

      {/* Features */}
      <ul className="flex flex-col gap-2.5 grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {feature.included ? (
              <Check
                size={15}
                className="text-green-600 mt-0.5 shrink-0"
                strokeWidth={2.5}
              />
            ) : (
              <X
                size={15}
                className="text-red-400 mt-0.5 shrink-0"
                strokeWidth={2.5}
              />
            )}
            <span
              className={`text-sm leading-snug ${
                feature.included ? "text-neutral-700" : "text-neutral-400"
              }`}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCard;
