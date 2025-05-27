
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type DragItem = {
  type: string;
  id: string;
};

type DragDropContextType = {
  items: DragItem[];
  addItem: (type: string) => void;
  removeItem: (id: string) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
};

const DragDropContext = createContext<DragDropContextType | undefined>(undefined);

export const useDragDrop = (): DragDropContextType => {
  const context = useContext(DragDropContext);
  if (!context) {
    throw new Error('useDragDrop must be used within a DragDropProvider');
  }
  return context;
};

type DragDropProviderProps = {
  children: ReactNode;
};

export const DragDropProvider: React.FC<DragDropProviderProps> = ({ children }) => {
  const [items, setItems] = useState<DragItem[]>([]);

  const addItem = useCallback((type: string) => {
    const id = `${type}-${Date.now()}`;
    setItems(prev => [...prev, { type, id }]);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setItems(prev => {
      const result = [...prev];
      const [removed] = result.splice(dragIndex, 1);
      result.splice(hoverIndex, 0, removed);
      return result;
    });
  }, []);

  return (
    <DragDropContext.Provider value={{ items, addItem, removeItem, moveItem }}>
      {children}
    </DragDropContext.Provider>
  );
};
