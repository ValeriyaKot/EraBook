import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../services/api'; 


export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
    const response = await apiClient.get('genres');
    return response.data;
});

export const createGenre = createAsyncThunk("genres/createGenre", async (genreData, { rejectWithValue }) => {
    try {
        const formData = new FormData();
        formData.append("name", genreData.name);
        formData.append("image", genreData.image);

        const response = await apiClient.post('genres', formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


const genreSlice = createSlice({
    name: "genres",
    initialState: {
        genres: [],
        status: "idle", 
        error: null,
    },
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.genres = action.payload;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(createGenre.fulfilled, (state, action) => {
                state.genres.push(action.payload);
            });
    }
});

export default genreSlice.reducer;
