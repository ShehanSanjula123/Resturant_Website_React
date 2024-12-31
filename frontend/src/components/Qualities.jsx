import React, {useState,useEffect} from 'react'
import restApi from '../restApi.json'
const Qualities = () => {

    const [qualities, setQualities] = useState([]);

    useEffect(() => {
      // Access the data from restApi.json correctly
      const fetchedQualities = restApi.data[0]?.ourQualities || [];
      setQualities(fetchedQualities);
    }, []);

  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {qualities.map((quality) => (
        <div className='card' key={quality.id}>
          <img src={quality.image} alt={quality.title} />
          <p className='title'>{quality.title}</p>
          <p className='description'>{quality.description}</p>
        </div>
      ))}
          </div>
        </section>
    </>
  )
}

export default Qualities
