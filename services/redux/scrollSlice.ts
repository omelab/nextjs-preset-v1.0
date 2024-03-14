import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScrollType {
  scrly: number;
}

interface ScrollState {
  scrollOption: ScrollType | null;
}

const initialState: ScrollState = {
  scrollOption: null,
};

const scrollSlice = createSlice({
  name: 'scrl',
  initialState,
  reducers: {
    setScroll(state, action: PayloadAction<ScrollType>) {
      state.scrollOption = action.payload;
    },
    clearScroll(state) {
      state.scrollOption = null;
    },
  },
});

export const { setScroll, clearScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
