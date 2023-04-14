import { env } from "env.mjs";

module.exports = {
  config: {
    type: "service_account",
    project_id: "hello-keyboard",
    private_key_id: env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    private_key: env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
    client_email: "firebase-adminsdk-upxzt@hello-keyboard.iam.gserviceaccount.com",
    client_id: "104244368007775536214",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-upxzt%40hello-keyboard.iam.gserviceaccount.com",
  },
};
