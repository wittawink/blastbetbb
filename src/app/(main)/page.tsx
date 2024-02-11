import LayoutFooter from "@/ui/layout/LayoutFooter";
import BaseInput from "@/ui/base/BaseInput";
import BaseBanner from "@/ui/base/BaseBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <BaseBanner text={"CASINO"}></BaseBanner>
      <BaseInput text={"Total Wager"}></BaseInput>
      <BaseInput text={"Max Payout"}></BaseInput>
      <LayoutFooter className="mt-[500px]" />
    </main>
  );
}
