"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

if (!projectId || !dataset) {
  throw new Error("Missing project id or dataset. Check sanity.json or .env");
}


export const usePreview = definePreview({
    projectId,
    dataset,
    // onPublicAccessOnly: () => {
    //   throw new Error('Not authenticated - preview not available')
    // }
})