'use client';

interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

export default function VideoEmbed({ url, title = 'Video', className }: VideoEmbedProps) {
  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg ${className || ''}`}>
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
