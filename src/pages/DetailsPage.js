import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import PageDetailsTitle from "parts/PageDetailsTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailsDescription from "parts/PageDetailsDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";
import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailsTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailsTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailsDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimonial data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
