import { mux } from "@/lib/mux";
import { VideoAssetCreatedWebhookEvent, VideoAssetErroredWebhookEvent, VideoAssetReadyWebhookEvent, VideoAssetTrackReadyWebhookEvent } from "@mux/mux-node/resources/webhooks.mjs"
import { headers } from "next/headers";

const SIGNING_SECRET = process.env.MUX_WEBHOOK_SECRET

type WebhookEvent = 
    | VideoAssetCreatedWebhookEvent
    | VideoAssetReadyWebhookEvent
    | VideoAssetErroredWebhookEvent
    | VideoAssetTrackReadyWebhookEvent;

    export const POST = async (request: Request) => {
        if(!SIGNING_SECRET) {
            throw new Error("MUX_WEBHOOK_SECRET is not set")
        }

        const headersPayload = await headers();
        const muxSignature = headersPayload.get("mux_signature");
        if(!muxSignature) {
            return new Response("No signature found", { status: 401})
        }

        const payload = await request.json();
        const body = JSON.stringify(payload);

        mux.webhooks.verifySignature(
            body,
            {
                "mux-signature": muxSignature
            },
            SIGNING_SECRET
        )


        switch(payload.type as WebhookEvent["type"]) {
            case "video.asset.created":
                const data = payload.data as VideoAssetCreatedWebhookEvent["data"];
                
        }
    }