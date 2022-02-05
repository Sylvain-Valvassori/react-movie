import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import SearchForm from "../components/SearchForm";


// méthodes

const movie10 = () => {
    let movies = [];
    for (let i = 0; i < 10; i++) {
      movies.push(<MovieCard key={movies[i]}/>);
    }
    return movies;
};


export default function Home() {
  return (
    <>
        <h1>Welcome Home</h1>
        <SearchForm />
        <section className="containerHome">
          <div className="moviesCardsContainer">
            {movie10()}
          </div>
        </section>
        <Footer />
    </>
  );
};
