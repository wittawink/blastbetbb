"use client";
import BaseGradientView from "@/ui/base/BaseGradientView";

export default function DiceDetail() {
  return (
    <main className="flex flex-col items-center">
      <BaseGradientView
        className="h-[240px] flex items-center justify-center"
        fromColor={"from-[#11140C]"}
        toColor={"to-[#75835D]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-center font-geomGraphic text-[60px] text-[#FCFDC7] font-semibold">
          Dice Coming soon...
        </div>
      </BaseGradientView>
    </main>
  );
}
