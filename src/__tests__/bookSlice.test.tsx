import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import bookSlice, { fetchBooks, BooksState, Book } from '../redux/bookSlice';
import { getAllBooks } from '../utils/API';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

jest.mock('../utils/API', () => ({
  getAllBooks: jest.fn(),
}));

describe('bookSlice', () => {
  type RootState = { books: BooksState };
  let store: EnhancedStore<RootState, AnyAction, [ThunkDispatch<RootState, undefined, AnyAction>]>;

  const mockBooks: Book[] = [
    {
      _id: '1',
      id: '1',
      bookName: 'Test Book 1',
      title: 'Test Book 1',
      author: 'Author 1',
      price: 200,
      discountPrice: 150,
      quantity: 10,
      rating: 4.5,
      coverPic: 'cover1.jpg',
      description: 'A test book description',
    },
    {
      _id: '2',
      id: '2',
      bookName: 'Test Book 2',
      title: 'Test Book 2',
      author: 'Author 2',
      price: 300,
      discountPrice: 250,
      quantity: 5,
      rating: 4.0,
      coverPic: 'cover2.jpg',
      description: 'Another test book description',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    store = configureStore({
      reducer: {
        books: bookSlice,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    }) as EnhancedStore<RootState, AnyAction, [ThunkDispatch<RootState, undefined, AnyAction>]>;
  });

  test('should return the initial state', () => {
    const state = store.getState().books;
    expect(state).toEqual({
      allBooks: [],
      status: 'idle',
      error: null,
    });
  });

  test('should handle fetchBooks pending state', () => {
    const pendingAction = { type: fetchBooks.pending.type };
    const initialState = store.getState().books;

    store.dispatch(pendingAction);
    const state = store.getState().books;

    expect(state.status).toBe('loading');
    expect(state.allBooks).toEqual(initialState.allBooks); 
    expect(state.error).toBe(null);
  });

  test('should handle fetchBooks fulfilled state', async () => {
    (getAllBooks as jest.Mock).mockResolvedValueOnce({ result: mockBooks });

    await store.dispatch(fetchBooks() as any); 
    const state = store.getState().books;

    expect(getAllBooks).toHaveBeenCalledTimes(1);
    expect(state.status).toBe('succeeded');
    expect(state.allBooks).toEqual(mockBooks);
    expect(state.error).toBe(null);
  });

  test('should handle fetchBooks rejected state', async () => {
    // Mock API rejection
    const errorMessage = 'Network error';
    (getAllBooks as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    await store.dispatch(fetchBooks() as any); 
    const state = store.getState().books;

    expect(getAllBooks).toHaveBeenCalledTimes(1);
    expect(state.status).toBe('failed');
    expect(state.allBooks).toEqual([]); 
    expect(state.error).toBe(errorMessage);
  });

  test('should handle fetchBooks rejected state with default error message', async () => {
    (getAllBooks as jest.Mock).mockRejectedValueOnce(new Error());

    await store.dispatch(fetchBooks() as any); 
    const state = store.getState().books;

    expect(getAllBooks).toHaveBeenCalledTimes(1);
    expect(state.status).toBe('failed');
    expect(state.allBooks).toEqual([]);
    expect(state.error).toBe('Something went wrong');
  });
});