
import React from 'react';
import { useDragDrop } from './DragDropContext';
import { useColor } from '@/context/ColorContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateComponentFiles, downloadFile } from '@/utils/fileGenerator';
import { Trash2, MoveVertical, Code, Download } from 'lucide-react';
import { toast } from 'sonner';

export const PagePreview: React.FC = () => {
  const { items, removeItem, moveItem } = useDragDrop();
  const { color } = useColor();

  const handleGenerateCode = async () => {
    if (items.length === 0) {
      toast.error('You need to add components first!');
      return;
    }

    try {
      toast.loading('Generating files, please wait...');
      
      // Generate files and get URLs for download
      const result = await generateComponentFiles(items, color);
      
      toast.dismiss();
      
      // Show success message with download button
      toast.success(
        <div className="flex flex-col gap-2">
          <p>Files generated successfully!</p>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => downloadFile(result.zipUrl, `${result.folderName}.zip`)}
            >
              <Download className="mr-2 h-4 w-4" />
              Download ZIP
            </Button>
          </div>
        </div>,
        {
          duration: 10000, // Longer duration to give time to click download
        }
      );
      
      // Display the generated code in the console for debugging
      console.log('Generated files:', result);
    } catch (error) {
      console.error('Error generating files:', error);
      toast.error('Failed to generate files. See console for details.');
    }
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      moveItem(index, index - 1);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < items.length - 1) {
      moveItem(index, index + 1);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Page Structure</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-center p-8 border border-dashed rounded-md">
            <p className="text-muted-foreground">Add components to build your page</p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className="flex items-center justify-between p-3 border rounded-md bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-muted text-muted-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    {index + 1}
                  </span>
                  <span>{item.type}</span>
                </div>
                <div className="flex gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    title="Move up"
                  >
                    <MoveVertical size={16} className="rotate-180" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleMoveDown(index)}
                    disabled={index === items.length - 1}
                    title="Move down"
                  >
                    <MoveVertical size={16} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeItem(item.id)}
                    title="Remove component"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleGenerateCode}
          disabled={items.length === 0}
        >
          <Code className="mr-2" size={16} />
          Generate Page
        </Button>
      </CardFooter>
    </Card>
  );
};
