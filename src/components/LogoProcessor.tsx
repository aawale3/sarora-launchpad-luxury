import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/lib/removeBackground";
import logoImage from "@/assets/sarora-logo.jpg";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const LogoProcessor = () => {
  const [processing, setProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    processLogo();
  }, []);

  const processLogo = async () => {
    setProcessing(true);
    setError(null);
    
    try {
      // Fetch the logo image
      const response = await fetch(logoImage);
      const blob = await response.blob();
      
      // Load as image element
      const img = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Create URL for display and download
      const url = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(url);
    } catch (err) {
      console.error('Error processing logo:', err);
      setError(err instanceof Error ? err.message : 'Failed to process logo');
    } finally {
      setProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImageUrl) return;
    
    const link = document.createElement('a');
    link.href = processedImageUrl;
    link.download = 'sarora-logo-transparent.png';
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl font-serif mb-6">Logo Background Removal</h2>
        
        {processing && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-accent" />
            <p className="text-muted-foreground">Processing logo... This may take a moment.</p>
          </div>
        )}
        
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-6">
            <p className="text-destructive">{error}</p>
            <Button onClick={processLogo} className="mt-4" variant="outline">
              Try Again
            </Button>
          </div>
        )}
        
        {processedImageUrl && (
          <div className="space-y-6">
            <div className="bg-muted/30 p-8 rounded-lg">
              <img 
                src={processedImageUrl} 
                alt="Logo with transparent background" 
                className="max-w-full h-auto mx-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={downloadImage} size="lg">
                Download PNG
              </Button>
              <Button onClick={processLogo} size="lg" variant="outline">
                Process Again
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Right-click the image above and "Save image as..." or click Download PNG
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoProcessor;
