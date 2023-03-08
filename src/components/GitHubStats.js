import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
    useMutation,
} from '@tanstack/react-query';
import Container from "@mui/material/Container";
import { Box } from '@mui/material';
import { flexbox } from '@mui/system';

// const queryClient = new QueryClient()
export const GitHubStats = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
                (res) => res.json(),
            ),
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <Container sx={flexbox}>
            {/* <QueryClientProvider client={queryClient}> */}

            <Box>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong>👀 {data.subscribers_count}</strong>{' '}
                <strong>✨ {data.stargazers_count}</strong>{' '}
                <strong>🍴 {data.forks_count}</strong>
            </Box>

            <Todos />
            <Comics />
            {/* </QueryClientProvider> */}
        </Container>
    )
}

const Todos = () => {
    // Access the client
    // const queryClient = useQueryClient()

    // Queries
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['repoDataBis'],
        queryFn: () =>
            fetch('https://api.publicapis.org/random').then(
                (res) => res.json(),
            ),
    })
    if (isLoading) return 'Loading...'
    if (isError) {
        return <span>Error: {error.message}</span>
    }
    if (error) return 'An error has occurred: ' + error.message
    // Mutations
    // const mutation = useMutation({
    //     mutationFn: postTodo,
    //     onSuccess: () => {
    //         // Invalidate and refetch
    //         queryClient.invalidateQueries({ queryKey: ['todos'] })
    //     },
    // })
    return (
        <Box>
            <ul>
                {data?.entries?.map((item, index) => (
                    <li key={index} >{item.Description} - {item.Link}</li>
                ))}
            </ul>

            {/* <button 
                // onClick={() => {
                    // mutation.mutate({
                        // id: Date.now(),
                        // title: 'Do Laundry',
                    // })
                // }}
            // >
                {/* Add Todo */}
            {/* </button> */}
        </Box>
    )
}

const Comics = () => {
    // Queries
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['getComicImg'],
        queryFn: () =>
            fetch('http://api.citybik.es/v2/networks').then(
                (res) => res.json(),
            ),
    })
    if (isLoading) return 'Loading...'
    if (isError) {
        return <span>Error: {error.message}</span>
    }
    if (error) return 'An error has occurred: ' + error.message
    console.log(data);
    return (
        <Box>
            {data.networks[0].id}
        </Box>
    )
}