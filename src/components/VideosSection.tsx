import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const VideosSection = () => {
  // Use the provided YouTube URL for all embeds and link
  const videoUrl =
    "https://www.youtube.com/watch?v=f-wtTRKLydc&list=PLCM7MOK2Juq5NPwX-79-FJR-p-zoSsf6g&index=17";
  const embedUrl = "https://www.youtube.com/embed/f-wtTRKLydc";

  const videos = [
    { id: embedUrl, title: "Featured Video 1" },
    { id: embedUrl, title: "Featured Video 2" },
    { id: embedUrl, title: "Featured Video 3" },
    { id: embedUrl, title: "Featured Video 4" },
    { id: embedUrl, title: "Featured Video 5" },
    { id: embedUrl, title: "Featured Video 6" },
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Watch Our Latest Videos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of inspiring Islamic content
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative aspect-video bg-muted">
                  <iframe
                    src={video.id}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View More on YouTube
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
