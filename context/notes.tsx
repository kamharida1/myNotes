import { useContext } from "react";
import createDataContext from "./createDataContext";


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

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'add_note':
      return [...state, {
        id: Math.floor(Math.random() * 9999),
        title: `Blog Post #${state.length + 1}`
      }];
    case 'delete_note':
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
}

const addNote = dispatch => {
  return () => {
    dispatch({ type: "add_note" });
  }
};

const deleteNote = dispatch => {
  return (id) => {
    dispatch({type: "delete_note", payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  notesReducer,
  {
    addNote,
    deleteNote,
  },
  [
    {id: '1', title: "New Blog Post", content: "Main Content"},
    
  ]
);

export const useNotes = () => {
  const { state, addNote, deleteNote } = useContext(Context);
  // if (!context) {
  //   throw new Error("useNotes must be used within a NotesProvider");
  // }
  return { state, addNote, deleteNote };
};