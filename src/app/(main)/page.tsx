import BaseButton from "@/ui/base/BaseButton";
import BaseInput from "@/ui/base/BaseInput";
import BaseBanner from "@/ui/base/BaseBanner";

export default function Home() {
  return (
    <main className="flex items-center p-24">
      <BaseBanner text={"CASINO"}></BaseBanner>
      <BaseInput text={"Total Wager"}></BaseInput>
      <BaseInput text={"Max Payout"}></BaseInput>
    </main>
  );
}
