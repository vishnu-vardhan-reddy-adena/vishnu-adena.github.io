import React, {useState, useEffect} from 'react';
import axios from 'axios';
 
const Aboutus = () => {
  const [reviews, setReviews] = useState([]);
 
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5043/api/Reviewes');
       
 
        setReviews(response.data);
         console.log(response.data);
       
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
 
    fetchReviews();
  }, []);
 
  return (
    <div className="container mx-auto  ">
      <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
      <ul className='flex flex-wrap justify-center p-4'>
        {reviews.map((review, index) => (
          <div className='p-2 m-2 flex'>
          <li key={index} className="border p-4  mb-4">
           
            
            <p className='text-xl'> {review.Review1}</p>
            <p className="font-bold text-3xl justify-end"> - "{review.Customer.Name}"</p>
          </li></div>
        ))}
      </ul>
    </div>
  );
};
 
export default Aboutus;