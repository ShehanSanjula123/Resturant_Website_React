import { FaUtensils } from 'react-icons/fa';

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">About Savoria</h1>
        
        {/* Restaurant Story */}
        <div className="grid grid-2" style={{ marginBottom: '4rem', alignItems: 'center' }}>
          <div>
            <h2>Our Story</h2>
            <p style={{ marginBottom: '1rem' }}>
              Founded in 2010 by acclaimed chef Marco Rossi, Savoria began as a small family restaurant with a passion for authentic flavors and exceptional dining experiences.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              What started as a humble establishment has grown into one of the city's most celebrated culinary destinations, earning numerous accolades and a loyal following of food enthusiasts.
            </p>
            <p>
              Despite our growth, we remain committed to our founding principles: sourcing the finest ingredients, crafting dishes with meticulous attention to detail, and providing warm, attentive service that makes every guest feel special.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant interior" 
              className="about-img"
            />
          </div>
        </div>
        
        {/* Philosophy */}
        <div style={{ 
          padding: '4rem', 
          backgroundColor: 'var(--light-color)', 
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Our Philosophy</h2>
            <div style={{ 
              width: '80px', 
              height: '3px', 
              backgroundColor: 'var(--primary-color)', 
              margin: '1rem auto 2rem' 
            }}></div>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
              "At Savoria, we believe that dining is not just about food—it's an art form that engages all the senses and creates lasting memories. Every dish tells a story, every ingredient has a purpose, and every guest deserves an exceptional experience."
            </p>
            <p style={{ marginTop: '1rem', fontWeight: '700' }}>— Chef Marco Rossi, Founder</p>
          </div>
        </div>
        
        {/* Team */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-3">
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80" 
                alt="Chef Marco Rossi" 
                className="team-member-img"
              />
              <h3>Marco Rossi</h3>
              <p style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Executive Chef & Founder</p>
              <p>With over 25 years of culinary experience across Europe and America, Chef Marco brings his passion for innovative cuisine to every dish at Savoria.</p>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Sophia Chen" 
                className="team-member-img"
              />
              <h3>Sophia Chen</h3>
              <p style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Head Chef</p>
              <p>A graduate of the Culinary Institute of America, Chef Sophia specializes in fusion cuisine that blends Eastern and Western culinary traditions.</p>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80" 
                alt="Isabella Martinez" 
                className="team-member-img"
              />
              <h3>Isabella Martinez</h3>
              <p style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Restaurant Manager</p>
              <p>With her warm personality and attention to detail, Isabella ensures that every aspect of your dining experience exceeds expectations.</p>
            </div>
          </div>
        </div>
        
        {/* Awards */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="grid grid-2">
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaUtensils style={{ fontSize: '2rem', color: 'var(--primary-color)', marginRight: '1rem' }} />
                <h3 style={{ margin: 0 }}>Michelin Star</h3>
              </div>
              <p>Awarded in 2018 for culinary excellence and consistency.</p>
            </div>
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaUtensils style={{ fontSize: '2rem', color: 'var(--primary-color)', marginRight: '1rem' }} />
                <h3 style={{ margin: 0 }}>Best Fine Dining</h3>
              </div>
              <p>City Food Awards, 2020, 2021, and 2022.</p>
            </div>
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaUtensils style={{ fontSize: '2rem', color: 'var(--primary-color)', marginRight: '1rem' }} />
                <h3 style={{ margin: 0 }}>Sustainable Restaurant</h3>
              </div>
              <p>Green Dining Association, 2021, for our commitment to sustainable practices.</p>
            </div>
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaUtensils style={{ fontSize: '2rem', color: 'var(--primary-color)', marginRight: '1rem' }} />
                <h3 style={{ margin: 0 }}>Chef of the Year</h3>
              </div>
              <p>Marco Rossi, Culinary Excellence Awards, 2019.</p>
            </div>
          </div>
        </div>
        
        {/* Gallery */}
        <div>
          <h2 className="section-title">Our Restaurant</h2>
          <div className="grid grid-3">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant interior" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant food" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant patio" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant bar" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant dish" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant chef" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;