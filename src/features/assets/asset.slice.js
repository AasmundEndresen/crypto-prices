import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAssetData, getMarketData, getTrendingAssets, getAssetList } from '../../services';

const initialAssets = { data: [], status: 'idle', error: undefined };

export const fetchAssetData = createAsyncThunk(
  'asset/fetchAssetData',
  async (id) => {
    const res = await getAssetData(id);
    return res.data;
  }
)

export const fetchAssetList = createAsyncThunk(
  'asset/fetchAssetData',
  async () => {
    const res = await getAssetList();
    return res.data;
  }
)

export const fetchSelectedAssets = createAsyncThunk(
  'asset/fetchSelectedAssets',
  async (ids) => {
    const res = await getMarketData(ids);
    return res;
  }
)

export const fetchTrendingAssets = createAsyncThunk(
  'asset/fetchTrendingAssets',
  async () => {
    const ids = await getTrendingAssets();
    const res = await getMarketData(ids.map(({ id }) => id).join(','));
    return res;
  }
)

export const assetSlice = createSlice({
  name: 'asset',
  initialState: {
    all: initialAssets,
    assets: initialAssets,
    selected: initialAssets,
    trending: initialAssets,
    compare: 'bitcoin',
    currency: 'usd'
  },
  reducers: {
    setAssetForCompare: (state, action) => ({
      ...state,
      compare: action.payload,
    }),
    setCurrency: (state, action) => ({
      ...state,
      currency: action.payload,
    }),
  },
  extraReducers: {
    [fetchSelectedAssets.pending]: (state) => { state.selected.status = 'loading' },
    [fetchTrendingAssets.pending]: (state) => { state.trending.status = 'loading' },
    [fetchAssetData.pending]: (state) => { state.assets.status = 'loading' },
    [fetchAssetList.pending]: (state) => { state.all.status = 'loading' },
    [fetchAssetData.fulfilled]: (state, action) => {
      state.assets = {
        ...state.assets,
        status: 'succeeded',
        data: [...state.assets.data, action.payload],
      }
    },
    [fetchAssetList.fulfilled]: (state, action) => {
      state.all = {
        ...state.all,
        status: 'succeeded',
        data: action.payload,
      }
    },
    [fetchSelectedAssets.fulfilled]: (state, action) => {
      state.assets = {
        ...state.assets,
        status: 'succeeded',
        data: [...state.assets.data, ...action.payload],
      }
      state.selected = {
        ...state.selected,
        status: 'succeeded',
        data: [...state.selected.data, ...action.payload.map(({ id, name, symbol }) => ({ id, name, symbol })),],
      }
    },
    [fetchTrendingAssets.fulfilled]: (state, action) => {
      state.assets = {
        ...state.assets,
        status: 'succeeded',
        data: [...state.assets.data, ...action.payload],
      }
      state.trending = {
        ...state.trending,
        status: 'succeeded',
        data: action.payload.map(({ id, name, symbol }) => ({ id, name, symbol })),
      }
    },
    [fetchAssetList.rejected]: (state, action) => {
      state.all.status = 'failed';
      state.all.error = action.error.message;
    },
    [fetchAssetData.rejected]: (state, action) => {
      state.assets.status = 'failed';
      state.assets.error = action.error.message;
    },
    [fetchSelectedAssets.rejected]: (state, action) => {
      state.selected.status = 'failed';
      state.selected.error = action.error.message;
    },
    [fetchTrendingAssets.rejected]: (state, action) => {
      state.trending.status = 'failed';
      state.trending.error = action.error.message;
    },
  }
})

export const { setAssetForCompare, setCurrency } = assetSlice.actions;

export const getAssetById = (state, id) => state.asset.assets.data.find(a => a.id === id);
export const getAssetsByIds = (state, ids) => state.asset.assets.data.filter(a => ids.some(id => id === a.id));
export const getAssetForCompare = (state) => state.asset.assets.data.find(({ id }) => id === state.asset.compare);
export const getAllAssets = (state) => state.asset.all;
export const getCurrency = (state) => state.asset.currency;
export const getTrending = (state) => state.asset.trending;
export const getSelected = (state) => state.asset.selected;
export const getLoaded = (state) => state.asset.assets.data.map(({ id }) => id);

export default assetSlice.reducer