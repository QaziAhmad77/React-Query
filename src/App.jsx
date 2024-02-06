import RQ1 from './components/RQ1/RQ1';
import RQ2 from './components/RQ2/RQ2';


// Advantages of React Query
// Manages Seriver states
// catching data
// retrying if first call is failed (3 times by default)
// give loading,error and pending states
// cleanup code if using react query

function App() {
  return (
    <>
      <h1>The Awesome React query1</h1>
      <RQ1 />
      <h1>The Awesome React query2</h1>
      <RQ2/>
    </>
  );
}

export default App;
