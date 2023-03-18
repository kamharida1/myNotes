import { createContext, useContext, useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";


export type Note = {
  id?: string;
  title: string;
  content?: string
};

type NotesContext = {
  notes: Note[];
  addNote: (props?: { title: string; content: string }) => void;
  // deleteNote: (id: string) => void;
};

const NotesContext = createContext<NotesContext | undefined>(undefined);

export const NotesProvider = ({ children }: { children: React.ReactNode}) => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([
      ...notes,
      { title: `New Note #${notes.length + 1}` }
    ]);
  };

  return <NotesContext.Provider value={{notes, addNote}}>
    {children}
  </NotesContext.Provider>
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};