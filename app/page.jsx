import Trending from "./Trending";
export const revalidate = 60;

const Home = () => {
    return ( 
        <div className="home p-2">
            <Trending/>
        </div>
     );
}
 
export default Home;