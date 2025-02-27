import { Link } from 'react-router-dom';
import { FaUtensils, FaAward, FaWineGlassAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
        }}
      >
        <div className="hero-content">
          <h1>Savoria</h1>
          <p>Experience culinary excellence in every bite</p>
          <Link to="/reservation" className="btn">Book a Table</Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section highlights">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-3">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaUtensils />
              </div>
              <h3>Exquisite Cuisine</h3>
              <p>Our award-winning chefs craft dishes using only the finest, freshest ingredients to create unforgettable culinary experiences.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaWineGlassAlt />
              </div>
              <h3>Elegant Ambiance</h3>
              <p>Immerse yourself in our sophisticated atmosphere, designed to enhance your dining experience with comfort and style.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaAward />
              </div>
              <h3>Award-Winning Service</h3>
              <p>Recognized for excellence, our attentive staff ensures impeccable service from the moment you arrive until your departure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Signature Dishes</h2>
          <div className="grid grid-3">
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" 
                alt="Herb Crusted Salmon" 
                className="card-img"
              />
              <div className="card-content">
                <h3>Herb Crusted Salmon</h3>
                <p>Fresh Atlantic salmon with a crispy herb crust, served with saffron risotto and seasonal vegetables.</p>
              </div>
            </div>
            <div className="card">
              <img 
                src="https://www.allrecipes.com/thmb/KnXakmJaXgqp6dX7PSU0oerZ0eY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1036388-risotto-with-truffle-and-parmesan-naples34102-4x3-1-9162f31e5ce6457a8ba9dea9e11fadfc.jpg" 
                alt="Truffle Risotto" 
                className="card-img"
              />
              <div className="card-content">
                <h3>Truffle Risotto</h3>
                <p>Creamy Arborio rice slowly cooked with white wine, finished with black truffle and aged Parmesan.</p>
              </div>
            </div>
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Chocolate Fondant" 
                className="card-img"
              />
              <div className="card-content">
                <h3>Chocolate Fondant</h3>
                <p>Decadent chocolate cake with a molten center, served with vanilla bean ice cream and raspberry coulis.</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/menu" className="btn">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <Slider {...testimonialSettings}>
            <div className="testimonial">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Sarah Johnson" 
                className="testimonial-img"
              />
              <p className="testimonial-text">The dining experience at Savoria was absolutely exceptional. From the moment we walked in, the service was impeccable, and every dish was a masterpiece. Will definitely be returning!</p>
              <p className="testimonial-author">Sarah Johnson</p>
            </div>
            <div className="testimonial">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Michael Chen" 
                className="testimonial-img"
              />
              <p className="testimonial-text">As a food critic, I have dined at restaurants worldwide, but Savoria stands out for its innovative cuisine and attention to detail. The truffle risotto is simply divine.</p>
              <p className="testimonial-author">Michael Chen, Food Critic</p>
            </div>
            <div className="testimonial">
              <img 
                src="https://randomuser.me/api/portraits/women/42.jpg" 
                alt="Emily Rodriguez" 
                className="testimonial-img"
              />
              <p className="testimonial-text">We celebrated our anniversary at Savoria and it could not have been more perfect. The romantic ambiance, exceptional food, and attentive service made our special night unforgettable.</p>
              <p className="testimonial-author">Emily Rodriguez</p>
            </div>
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.7)' 
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>Reserve Your Table Today</h2>
          <p style={{ marginBottom: '2rem' }}>Experience the perfect blend of exquisite cuisine, elegant ambiance, and impeccable service.</p>
          <Link to="/reservation" className="btn">Book a Table</Link>
        </div>
      </section>
    </>
  );
};

export default Home;