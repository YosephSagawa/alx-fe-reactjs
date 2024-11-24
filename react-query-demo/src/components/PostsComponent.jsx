import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 10,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div>
      {isFetching && <div>Fetching data...</div>}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
