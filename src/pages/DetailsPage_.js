import React, { useEffect, useCallback } from "react";
import Header from "parts/Header";
import PageDetailsTitle from "parts/PageDetailsTitle";
import FeaturedImage from "parts/FeaturedImage";
import BookingForm from "parts/BookingForm_";
import PageDetailsDescription from "parts/PageDetailsDescription";
import Testimonial from "parts/Testimonial";
import Activities from "parts/Activities";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "store/actions/page";

function DetailsPage() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const dispatch = useDispatch();
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const fnLoadPage = useCallback(async (id) => {
    if (!page[id]) {
      await dispatch(fetchPage(`/detail-page/${id}`, id));
      // document.title = `Staycation | ${response.title}`;
    }
  }, [dispatch, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fnLoadPage(id)
  }, [id, fnLoadPage]);

  if (!page[id]) return null;

  return (
    <>
      <Header />
      <PageDetailsTitle breadcrumb={breadcrumb} />
      <FeaturedImage />
      <section className="container">
        <div className="row">
          <div className="col-12 col-lg-7 pr-5">
            <Fade bottom>
              <PageDetailsDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-12 col-lg-5">
            <Fade bottom>
              <BookingForm
              />
            </Fade>
          </div>
        </div>
      </section>

      <Activities data={page[id].activityId} />
      <Testimonial data={page[id].testimonial} />
      <Footer />
    </>
  );
}

export default DetailsPage;
