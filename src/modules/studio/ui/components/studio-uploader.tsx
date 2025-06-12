import MuxUploader from "@mux/mux-uploader-react"

interface StudioUploaderProps {
    endpoint?: string | null;
    onSuccess: () => void
}

export const StudioUploader = ({
    endpoint,
    onSuccess
}: StudioUploaderProps) => {
    <div>
        <MuxUploader />
    </div>
}