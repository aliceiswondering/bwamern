import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "parts/Header";

import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";
import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) {
      this.props.fetchPage(
        `/landing-page`,
        "landingPage"
      );
    }
  }
  render() {

    const { page } = this.props;
    if(!page.hasOwnProperty("landingPage")) return null
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostpicked}
        />
        <Categories data={page.landingPage.categories}></Categories>
        <Testimonial data={page.landingPage.testimonial} />
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page ,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
