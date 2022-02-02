import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
        <h1>Welcome Home</h1>
        <SearchForm />
        <section className="containerHome">
          <div className="itemBlockList"></div>
        </section>
    </>
  );
};

