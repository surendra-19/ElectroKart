import React from 'react';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
import { categoriesList } from '../utils/constants';
import Slider from '../components/Slider';

const Home = () => {
  const productsList = categoriesList.filter((category) => category.type === "product");

  return (
    <>
      <Header />
      <div className='px-[10px] max-w-[1350px] mx-auto'>
        <div className='my-4'>
          <Slider productsList={productsList} />
        </div>
        <h2 className='text-4xl font-bold'>Browse by category:</h2>
        <div className='flex flex-wrap gap-5 my-5'>
          {
            categoriesList
              .filter((category) => category.type === "category")
              .map((category) => {
                return <CategoryCard key={category.id} category={category} />
              })
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;