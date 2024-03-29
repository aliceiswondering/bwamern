import React from 'react'
import Fade from 'react-reveal/Fade'
import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_Frame from 'assets/images/img-frame-hero.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'
import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }
    
    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-auto pr-lg-5 mb-5 mb-lg-0" style={{width: 530}}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br/>
                            Start Next Vacation
                        </h1>
                        <p className="mb-4 font-weight-light-text-gray-500 w-75" style={{lineHeight: "170%"}}>
                            We provide what you need to enjoy your holiday with your family. It's time to make new memorable moments. 
                        </p>

                        <Button 
                        // type="link"
                            className="btn px-5" 
                            hasShadow 
                            isPrimary 
                            onClick={showMostPicked}
                        >
                            Show Me Now
                        </Button>


                        <div className="row" style={{marginTop: 50}}>
                            <div className="col-auto mr-lg-5">
                                <img width="36" 
                                    height="36"
                                    src={IconTraveler} 
                                    alt={`${props.data.travelers}Travelers`}
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travelers)}{" "} 
                                    <span className="text-gray-500 font-weight-light">
                                        travelers
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto mr-lg-5">
                                <img width="36" 
                                    height="36"
                                    src={IconTreasure} 
                                    alt={`${props.data.treasures}Treasures`}
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasures)}{" "} 
                                    <span className="text-gray-500 font-weight-light">
                                        treasures
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto mr-lg-5">
                                <img width="36" 
                                    height="36"
                                    src={IconCities} 
                                    alt={`${props.data.cities}Cities`}
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)}{" "} 
                                    <span className="text-gray-500 font-weight-light">
                                        cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg-6 pl-lg-5">
                        <div className="hero-image-placeholder">
                            <img src={ImageHero} alt="Green Room" className="img-fluid position-relative" style={{ zIndex: 2}} />
                            <img src={ImageHero_Frame} alt="Green Room Frame" className="img-fluid" style={{}} />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
  );
}
