import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
          <Hero />
          <ProductList />
          <Pagination />
        </>
    )
}

export default HomePage;