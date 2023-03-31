"use client";

import Image from "next/image";
import { useLoadMessages, useUserSession } from "~/hooks";
import useSubscribeNewMessage from "~/hooks/useSubscribeNewMessage";

type ChatRoomProps = {
  chatRoomId: string;
};

export default function ChatList({ chatRoomId }: ChatRoomProps) {
  const user = useUserSession();
  const { messages, reloadMessages } = useLoadMessages(chatRoomId);

  useSubscribeNewMessage(messages, reloadMessages);

  return (
    <div className="mb-5 grid">
      {messages?.map(m => {
        const messageByMe = user?.id === m.userId;
        return (
          <div
            key={m.id}
            className={`my-1 mx-3 flex w-max max-w-lg items-center rounded-2xl p-2 ${
              messageByMe
                ? "bg-twitter-500 ml-auto flex-row-reverse"
                : "flex-row bg-white text-black"
            }`}
          >
            <Image
              className="mx-2 rounded-full"
              width={40}
              height={40}
              src={m.profilePic}
              alt={m.username}
            />
            {!messageByMe && <p>{m.username}</p>}
            <p className="px-2">{m.message}</p>
            <p>{new Date(m.created_at).toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
}