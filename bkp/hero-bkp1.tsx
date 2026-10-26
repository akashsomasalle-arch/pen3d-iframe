import Iframe from "../components/iframe";
import Description from "../components/description";

export default function Hero() {
  return (
    <section className="flex-1 min-h-0 w-full flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 w-full">
        <Iframe />
      </div>

      <div className="shrink-0 w-full">
        <Description />
      </div>
    </section>
  );
}