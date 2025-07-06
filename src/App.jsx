import React from 'react';
import './index.css'
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import Footer  from './components/Footer';
import { categoriesList } from './utils/constants';

const App = () => {
  return(
    <div className='app-container'>
      <Header/>
      <div className='my-3'>
        {
          categoriesList
          .filter((category)=>category.type==="product")
          .map((category) => {
            return <CategoryCard key={category.id} category={category} />
          })
        }
      </div>
      <h2 className='text-4xl font-bold'>Browse by category:</h2>
      <div className='flex flex-wrap my-3 gap-5'>
        {
          categoriesList
          .filter((category)=>category.type==="category")
          .map((category) => {
            return <CategoryCard key={category.id} category={category}/>
          })
        }
      </div>
      <Footer/>
    </div>
  )
};

export default App;