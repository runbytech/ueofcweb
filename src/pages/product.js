import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselScreens = () => {

  const settings = {
    autoplay: true,  
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="item">
        <div className="project">
          <div className="img">
            <img src="/ueofcweb/images/project-home.jpg" className="img-fluid" alt="ultronele screenshot" />
            <div className="text px-4">
              <h3><a href="#">Hompage</a></h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img src="/ueofcweb/images/project-course.jpg" className="img-fluid" alt="ultronele screenshot" />
            <div className="text px-4">
              <h3><a href="#">Course Detail</a></h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img src="/ueofcweb/images/project-mobile.jpg" className="img-fluid" alt="ultronele screenshot" />
            <div className="text px-4">
              <h3><a href="#">Homepage</a></h3>
              <span>Mobile version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img src="/ueofcweb/images/project-service.jpg" className="img-fluid" alt="ultronele screenshot" />
            <div className="text px-4">
              <h3><a href="#">Service Type</a></h3>
              <span>Mobile version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img src="/ueofcweb/images/project-path.jpg" className="img-fluid" alt="ultronele screenshot" />
            <div className="text px-4">
              <h3><a href="#">Learning Path</a></h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img src="/ueofcweb/images/project-certificate.jpg" className="img-fluid" alt="ultronele screenshot" />
            <div className="text px-4">
              <h3><a href="#">Create Certificate</a></h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
  </Slider>)
}

const ProductPage = () => (
  <Layout activeMenu="product">
    <SEO title="Product" />
    
    <div className="banner_w3lspvt-2">
			<ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="font-weight-bold">Home</Link>
        </li>
				<li className="breadcrumb-item" aria-current="page">Product</li>
			</ol>
		</div>

    <section className="ftco-section ftco-project " id="projects-section">
      <div className="container px-md-5">
        <CarouselScreens />
      </div>
    </section>

    <section id="services" className="section-padding bg-li py-5">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Product Features</h2>
          <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Ultronele&#39;s desire is to be a revolutionary elearning product featured with Speed, Usability, Enjoyment, Costlessness, Richness, Scalability, all these goals are reachable in the same time.</p>
        </div>
        <div className="row">
          {/** feature item 1. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
              <div className="icon">
                  <i className="fas fa-rocket"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Speed</a></h3>
                <p>Leveraging the power of GatsbyJS framework, Ultronele give user an extremely soomth visit experience, no need to wait loading, its optimized content deliver to you without any delay.</p>
              </div>
            </div>
          </div>
          {/** feature item 2. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
              <div className="icon">
                  <i className="fas fa-universal-access"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Usability</a></h3>
                <p>Simple and easy to use both in software deployment and content authoring, Ultronele utilize the themelization archetecture and content generator to simplify the whole process.</p>
              </div>
            </div>
          </div>
          {/** feature item 3. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
              <div className="icon">
                  <i className="fas fa-puzzle-piece"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Enjoyment</a></h3>
                <p>Learning something unfamiliar may be not so interesting for most people, Ultronele solve this by introduce micro game or unlock bonus to encourage reader to open mind and keep delightful.</p>
              </div>
            </div>
          </div>
          {/** feature item 4. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon">
                  <i className="fas fa-funnel-dollar"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Costlessness</a></h3>
                <p>Setup and maintenance of a web application sounds like a big task for non-technicians, but Ultronele eliminates all your concern about it, by cutting database and using cloud service.</p>
              </div>
            </div>
          </div>
          {/** feature item 5. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.5s">
              <div className="icon">
                  <i className="fas fa-layer-group"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Richness</a></h3>
                <p>Being an elearning system, ultronele also a great CMS if not including test. Authors can create their tutorials/curriculums with the syntax of Markdown file, and built-in templates.</p>
              </div>
            </div>
          </div>
          {/** feature item 6. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
              <div className="icon">
                  <i className="fas fa-plug"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Scalability</a></h3>
                <p>By means of the plugin design from GatsbyJS, ultronele is also scalable to any new functionalities both in front-end and back-end. The components, page templates, plugins make it extremely flexible.</p>
              </div>
            </div>
          </div>
          {/** feature item 7. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
              <div className="icon">
                <i className="fas fa-wave-square"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Trackability</a></h3>
                <p>Every user&#39;s learning process is recorded as learning path in local machine. Ultronele remember your each action and progress. Whenever you forget where you stop, turn to the path graph.</p>
              </div>
            </div>
          </div>
          {/** feature item 8. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
              <div className="icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Achievability</a></h3>
                <p>Ultronele is designed to encourage reader to walk through all the chapters/sections of each course by adding unlock bonus and certificate automatically creation at the end of test.</p>
              </div>
            </div>
          </div>
          {/** feature item 9. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title"><a href="#">Mobility</a></h3>
                <p>For Ultronele administrator, authoring content and seeing the end result in a PC browser is the only option. But for the normal readers/learners, there is another option, it&#39;s mobile phone.</p>
              </div>
            </div>
          </div>
          {/** end of feature item */}
        </div>
      </div>
    </section>

    <div className="about-inner py-5">
      <div className="container pb-xl-5 pb-lg-3">
        <div className="row py-xl-4">
          <div className="col-lg-4 welcome-right mb-lg-0 mb-5"></div>
          <div className="col-lg-4 ">
            <h3 className="mt-2 mb-3 text-center">FAQs</h3>
          </div>
          <div className="col-lg-4"></div>
        </div>
        
        <ul className="accordion css-accordion mt-3">
          <li className="accordion-item">
            <input className="accordion-item-input" type="checkbox" name="accordion" id="item1" />
            <label htmlFor="item1" className="accordion-item-hd">
              Q: What purpose is this software used for?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">
                Q: What purpose is this software used for?
              </h6>
              <p>A: This software is designed for tutors, educational institutes, small enterprises which have little technical resources or limited budget, wish to own a easy-use training platform.</p>
            </div>
          </li>
          <li className="accordion-item">
            <input className="accordion-item-input" type="checkbox" name="accordion" id="item2" />
            <label htmlFor="item2" className="accordion-item-hd">
                Q: Can I use it for free?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">Q: Can I use it for free?</h6>
              <p>A: Absolutely, if you&#39;re teacher/students/NGO members, you&#39;d get full tech support totally with no fee. Ultronele&#39;s mission is to help as manay people as possible to access knowledge in the easiest way and the lowest cost.</p>
            </div>
          </li>
          <li className="accordion-item">
            <input className="accordion-item-input" type="checkbox" name="accordion" id="item3" />
            <label htmlFor="item3" className="accordion-item-hd">
                Q: What if I made some custom development and want to sell to my client?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">Q: What if I made some custom development and want to sell to my client?
                </h6>
              <p>A: It&#39;s OK, this product use MIT license, so you should include LICENSE file of this product.</p>
            </div>
          </li>
          <li className="accordion-item">
            <input className="accordion-item-input" type="checkbox" name="accordion" id="item4" />
            <label htmlFor="item4" className="accordion-item-hd">
                Q: Our company need commercial support, can you provide?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">Q: Our company need commercial support, can you provide?</h6>
              <p>A: Sure, we recommend you purchase our Premium membership, and if you have more requirements we can talk in depth.</p>
            </div>
          </li>
        </ul>
        
      </div>
    </div>


  </Layout>
)

export default ProductPage
