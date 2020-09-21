import { NavBar } from "../components/NavBar";

const Index = () => {
  const [{data: _data}] = usePostsQuery();

  return (
  <>
    <NavBar />
    <div>Home Page</div>
    <br />
    {!_data ? <div>Loading.. Please wait</div> : _data.posts.map(p =><div key={p.id}><Divider /><Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated ml="2">{p.title}</Box></div>)}
  </> 
  )
}

export default withUrqlClient(createUrqlClient, {ssr: true}) (Index);
