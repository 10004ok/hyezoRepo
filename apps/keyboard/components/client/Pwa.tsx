import { initializeApp } from "firebase/app";
import { env } from "~/env.mjs";
import { useUserSession } from "~/hooks";
import useServiceWorker from "~/hooks/useServiceWorker";
import { fetchPost } from "~/lib/utils";

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export default function Pwa() {
  initializeApp(firebaseConfig);
  const user = useUserSession();
  const { data } = useServiceWorker();
  if (!data || !user) return <></>;
  const { sw, token } = data;

  return (
    <div>
      <button
        onClick={async () =>
          /** 해당 브라우저의 정보를 담은 토큰을 내 계정에 저장 */
          await fetchPost<string>("/api/createSubscription", {
            body: JSON.stringify(token),
          })
        }
      >
        구독: {token}
      </button>
      <button
        onClick={async () => {
          const res = await fetchPost<string>("/api/sendMessageToFirebase", {
            body: JSON.stringify(user.id),
          });
          console.log(res);
        }}
      >
        메시지 푸시
      </button>
    </div>
  );
}