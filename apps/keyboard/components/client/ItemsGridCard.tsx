import { useEffect, useRef } from "react";
import { createTitle } from "~/lib/utils";
import { AllSellingData } from "~/types/prisma";
import { SplitWord } from "../server";

type GridCardProps = {
  data?: AllSellingData;
};

export default function GridCard({ data }: GridCardProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current?.children) return;

    const handleOnMouseMove = (e: PointerEvent) => {
      const { currentTarget: target } = e;
      if (target instanceof HTMLDivElement) {
        const rect = target.getBoundingClientRect(),
          y = e.clientY - rect.top,
          x = e.clientX - rect.left;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    for (const card of gridRef.current.children) {
      if (card instanceof HTMLDivElement) {
        card.onpointermove = e => {
          handleOnMouseMove(e);
        };
      }
    }
  }, [gridRef, data]);

  return (
    <div className="gridcards text-white" ref={gridRef}>
      {data?.map(card => (
        <div className="gridcard" key={card.id}>
          <div className="gridcard_content relative -z-10 flex items-end justify-between">
            <p className="absolute right-0 top-0 m-3 mr-5">
              {createTitle(SplitWord.Aurhor, card.author.nickname)}
            </p>
            <div className="flex flex-col pb-2 pl-3">
              <div className="flex items-center gap-3 pb-2">
                <p
                  className={`px-2 py-px uppercase text-black ${
                    card.brandName === "gmk" ? "bg-orange-400" : "bg-white"
                  }`}
                >
                  {card.brandName}
                </p>
                <p>{card.layout}</p>
                <p>{card.color}</p>
              </div>
              <p className="font-point text-2xl font-bold">
                {createTitle(SplitWord.Title, card.title)}
              </p>
            </div>
            <div className="flex flex-col items-center pb-2 pr-3">
              <p className="text-2xl font-bold">
                {createTitle(SplitWord.Price, String(card.price))}
              </p>
              <div
                className={`px-5 italic ${
                  card.status === "ING"
                    ? "text-emerald-700"
                    : card.status === "END"
                    ? "text-red-900"
                    : "text-orange-600"
                }`}
              >
                {card.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
