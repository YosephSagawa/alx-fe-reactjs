import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryProvider client={queryClient}>
        <PostsComponent />
      </QueryProvider>
    </>
  );
}

export default App;
