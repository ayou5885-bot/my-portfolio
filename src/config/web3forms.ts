export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormPayload = Record<string, string>;

export async function submitWeb3Form(payload: Web3FormPayload) {
  const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"];

  if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
    throw new Error("Web3Forms is not configured yet. Add your access key to the .env file.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: accessKey, ...payload }),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message ?? "Your message could not be sent. Please try again.");
  }

  return result;
}
