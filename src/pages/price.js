import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PricePage = () => (
  <Layout activeMenu="price">
    <SEO title="Price" />

    <div className="banner_w3lspvt-2">
			<ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="font-weight-bold">Home</Link>
        </li>
				<li className="breadcrumb-item" aria-current="page">Pricing</li>
			</ol>
    </div>
    
    <div className="price-sec py-5">
      <div className="container py-xl-5 py-lg-3">
        <div className="inner_sec_info_w3_info mt-3">
          <div className="row price-grid-main">

            <div className="col-lg-4 col-sm-6 price-info">
              <div className="prices p-4">
                <div className="prices-top">
                  <h3 className="text-center text-wh rounded-circle">$0</h3>
                </div>
                <div className="prices-bottom text-center">
                  <div className="prices-h border-bottom ">
                    <h4>HONOR MBR</h4>
                  </div>
                  <ul className="mt-4">
                    <li>Deployment Support</li>
                    <li>Usage Guidance</li>
                    <li>Config Modification</li>
                    <li className="del">Charge</li>
                    <li className="del">Template Development</li>
                    <li className="del">Data Access & Storage</li>
                    <li className="del">3rd Part Service Integration</li>
                  </ul>
                  <a href="https://ultronele.netlify.com/service" className="btn button-style mt-4" target="_blank">
                    Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6  price-info price-mkres-2">
              <div className="prices p-4 active">
                <div className="prices-top">
                  <h3 className="text-center text-wh rounded-circle">$30</h3>
                </div>
                <div className="prices-bottom text-center">
                  <div className="prices-h border-bottom ">
                    <h4>SPONSOR MBR</h4>
                  </div>
                  <ul className="mt-4">
                      <li>Deployment Support</li>
                      <li>Usage Guidance</li>
                      <li>Config Modification</li>
                      <li>Charge</li>
                      <li>Template Development</li>
                      <li className="del" >Data Access & Storage</li>
                      <li className="del" >3rd Part Service Integration</li>
                    </ul>
                    <a href="https://ultronele.netlify.com/service" className="btn button-style mt-4" target="_blank">
                      Details
                    </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6  price-info price-mkres">
              <div className="prices p-4">
                <div className="prices-top">
                  <h3 className="text-center text-wh rounded-circle">$50</h3>
                </div>
                <div className="prices-bottom text-center">
                  <div className="prices-h border-bottom">
                    <h4>Golden MBR</h4>
                  </div>
                  <ul className="mt-4">
                      <li>Deployment Support</li>
                      <li>Usage Guidance</li>
                      <li>Config Modification</li>
                      <li>Charge</li>
                      <li>Template Development</li>
                      <li>Data Access & Storage</li>
                      <li>3rd Part Service Integration</li>
                    </ul>
                  <a href="https://ultronele.netlify.com/service" className="btn button-style mt-4" target="_blank">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    

  </Layout>
)

export default PricePage
