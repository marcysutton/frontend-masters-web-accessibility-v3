import ProductPage from '../completed-components/exercise-6-motion/ProductPage';
import { ProductDogCoat as Product } from '../data';

const FullProductPage = () => <ProductPage productData={Product} shouldAnimate={true} />;

export default FullProductPage;
