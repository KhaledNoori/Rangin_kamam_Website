



import React, { useEffect } from 'react';
import Alpine from 'alpinejs';

const Portfolio = () => {
    useEffect(() => {
        Alpine.data('portfolio', () => ({
            projects: [
                {
                    category: 'تکنولوژی',
                    items: [
                        {
                            title: 'لورم ایپسوم',
                            caption: 'لورم ایپسوم متن ساختگی',
                            image: './assets/images/portfolio/technology/img_1.jpg',
                        },
                        {
                            title: 'لورم ایپسوم',
                            caption: 'لورم ایپسوم متن ساختگی',
                            image: './assets/images/portfolio/technology/img_2.jpg',
                        },
                        {
                            title: 'لورم ایپسوم',
                            caption: 'لورم ایپسوم متن ساختگی',
                            image: './assets/images/portfolio/technology/img_3.jpg',
                        },
                        {
                            title: 'لورم ایپسوم',
                            caption: 'لورم ایپسوم متن ساختگی',
                            image: './assets/images/portfolio/technology/img_4.jpg',
                        }
                    ]
                }
            ]
        }));
    }, []);

    return (
        <div x-data="portfolio">
            <template x-for="project in projects">
                <div key={project.category}>
                    <h2>{project.category}</h2>
                    <div x-show="true">
                        <template x-for="item in project.items">
                            <div key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.caption}</p>
                                <img src={item.image} alt={item.title} />
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    );
}

export default Portfolio;



// // Gallery.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './images'
// const Gallery = ({ data }) => {
//   return (
//     <div className="row">
//       {data.map(image => (
//         <div key={image.id} className="col-lg-4 col-sm-6">
//           <Link to={`/images/${image.id}`} style={{ textDecoration: 'none' }}>
//             <div className="image-thumbnail">
//               <img src={image.url} alt={image.title} />
//               <h3>{image.category}</h3>
//               <p>{image.description}</p>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;













// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import './images';

// const Gallery = () => {
//   return (
//     <Container>
//       {data.map(category => (
//         <div key={category.category}>
//           <h2>{category.display_category}</h2>
//           <Row>
//             {category.images.map(image => (
//               <Col lg={3} md={4} key={image.title}>
//                 <Link to={`/gallery/${category.category}/${image.title}`}>
//                   <Image src={image.image} alt={image.title} fluid />
//                 </Link>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       ))}
//     </Container>
//   );
// };

// export default Gallery;







// Gallery.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../images';
// const Gallery = ({ images }) => {
//   return (
//     <div className="row">
//       {images.map(image => (
//         <div key={image.id} className="col-lg-4 col-sm-6">
//           <Link to={`/images/${image.id}`} style={{ textDecoration: 'none' }}>
//             <div className="image-thumbnail">
//               <img src={image.url} alt={image.title} />
//               <h3>{image.category}</h3>
//               <p>{image.description}</p>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;