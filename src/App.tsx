import { FC, useEffect } from 'react';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import './App.css';

const App: FC = () => {
  /* const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, []) */

  return (
    <div className='App'>
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.map(user => 
        <div key={user.id}>{user.email}</div>  
      )} */}

    <PostContainer />
    </div>
  );
};

export default App;