import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from './quizApi';

const initialState = [];

export const quizSlice = createSlice({
  name: 'quizData',
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      return action.payload;
    },
    createNewQuiz: (state, action) => {
      // const newQuiz = action.payload;
      // state.quizzes.questions_answers.push(newQuiz);
    },
    editQuiz: (state) => {

    }
  }
});

export const {setQuiz, createNewQuiz, editQuiz } = quizSlice.actions;

// Selector
export const selectData = (state) => state.quizzes;

export default quizSlice.reducer;
