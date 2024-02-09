import BaseButton from "@/ui/base/BaseButton";
import LayoutFooter from "@/ui/layout/LayoutFooter";

export default function Home() {
  return (
    <main className="p-24">
      <div className="text-7xl">Hello CryptDegree</div>
      <BaseButton text={"Hello Button"}></BaseButton>
      <LayoutFooter className="mt-[100px]" />
    </main>
  );
}
