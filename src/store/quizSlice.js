import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const quizSlice = createSlice({
  name: 'quizData',
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      return action.payload;
    },
    createNewQuiz: (state, action) => {
      return [...state, action.payload];
    },
    editQuiz: (state, action) => {
      state[0] = action.payload;
    }
  }
});

export const {setQuiz, createNewQuiz, editQuiz } = quizSlice.actions;

// Selectors
export const selectQuizzes = (state) => state.quizzes;
export const selectQuizById = (state, id) => state.quizzes?.filter(quiz => Number(quiz.id) === Number(id));

export default quizSlice.reducer;
