import { useClickOutside } from "@hyezo/hooks";
import { Button } from "@hyezo/ui";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useCallback, useRef, useTransition } from "react";
import { env } from "~/env.mjs";
import { fetchPost, fetcher } from "~/lib/utils";
import { type TItems, type TPostStatus } from "~/types/prisma";

type StatusPopupProps = {
  postId: string;
  presentStatus: TPostStatus;
  closeCardOverlay: (idx: number) => void;
  setSearchedItems: Dispatch<SetStateAction<TItems[] | undefined>>;
  idx: number;
};

const statusType = ["ING", "PENDING", "END"] as const;

export default function PostStatusPopup({
  postId,
  presentStatus,
  closeCardOverlay,
  setSearchedItems,
  idx,
}: StatusPopupProps) {
  const cancelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [, startTransition] = useTransition();

  const updatePostStatus = useCallback(
    async (status: TPostStatus) => {
      await fetchPost<TPostStatus>("/api/updatePostStatus", {
        body: JSON.stringify({ status, postId }),
      });
      await fetcher(`/api/revalidate?secret=${env.NEXT_PUBLIC_HYEZO_SECRET}`);
      closeCardOverlay(idx);

      startTransition(() => {
        setSearchedItems(prev => {
          if (prev) {
            const copy = [...prev];
            copy[idx].status = status;
            return copy;
          }
        });
        router.refresh();
      });
    },
    [postId, closeCardOverlay, router, setSearchedItems, idx],
  );

  useClickOutside(cancelRef, () => closeCardOverlay(idx));
  const filteredStatus = statusType.filter(status => status !== presentStatus);

  return (
    <div className="rounded-inherit absolute z-20 grid h-full w-full place-items-center bg-black/90">
      <div className="flex gap-5" ref={cancelRef}>
        {filteredStatus.map(status => (
          <Button
            key={status}
            outline
            onClick={() => updatePostStatus(status)}
            color={`${
              status === "PENDING" ? "orange" : status === "END" ? "red" : "twitter"
            }`}
          >
            {status === "PENDING" ? "거래중" : status === "END" ? "거래완료" : "판매중"}
          </Button>
        ))}
      </div>
    </div>
  );
}