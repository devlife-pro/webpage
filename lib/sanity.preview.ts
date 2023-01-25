import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";


if (!projectId || !dataset) {
  throw new Error("Missing project id or dataset. Check sanity.json or .env");
}

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}


export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})