import { SampleComponent } from '../components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [sampleData, setSampleData] = useState('');
  const getSampleData = async () => {
    try {
      const response = await axios.get(
        'https://mernstack-backend-qyvi.onrender.com/',
      );

      const { data } = response;
      console.log(data);
      setSampleData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSampleData();
  }, []);

  return (
    <>
      <SampleComponent data={sampleData} />
    </>
  );
};

export default Home;
