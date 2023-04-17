"use client";

import { Button } from "@hyezo/ui";
import { fetchPost } from "~/lib/utils";

export default function UserSetting() {
  return (
    <div className="grid place-items-center p-20">
      <Button
        color="red"
        outline
        onClick={async e => {
          e.preventDefault();
          await fetchPost("/api/deleteAccount");
        }}
      >
        탈퇴
      </Button>
    </div>
  );
}
