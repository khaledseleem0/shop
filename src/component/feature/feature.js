import React, { Component } from "react";
import Slider from "react-slick";
import { Img, Clear, Pop, Card, ImgContainer, ProductName, Price, CardContainer, Navigation } from './featureStyle';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addtocart } from './../../store/actions';
import data from "./../../data.json";
class Feature extends Component {
  state = {
    card: [],
    product: [],
  }

  componentDidMount() {
    const getall = () => {
      return Promise.resolve(data)
    };
    getall().then((respond) => {
      this.setState({ card: respond[0].cards })
    })
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    const lg = window.innerWidth;
    {lg >= 800 ? settings.slidesToShow = 3: 800 > lg && lg > 500 ?settings.slidesToShow = 2 :lg <= 500 ? settings.slidesToShow = 1 : settings.slidesToShow = 3  }
    const cardState = this.state.card;
    const cardRender = cardState.map((card, i) => {
      return (
        <CardContainer key={i}>
          <Card>
            <ImgContainer>
              <Img src={`${process.env.PUBLIC_URL}/assets/` + card.src} alt="" />
              <Navigation>
                <Link to={"product/" + card.id}>
                  <i className="fas fa-question"></i>
                </Link>
              </Navigation>
            </ImgContainer>
            <ProductName>{card.name} </ProductName>
            <Price>{card.price}$ </Price>
            <Clear></Clear>
          </Card>
        </CardContainer>
      )

    })

    return (
      <div className="container-section">
        <Pop>
          <h3>features products </h3>
          <span feature></span>
        </Pop>
        <Slider {...settings}>
          {cardRender}
        </Slider>
      </div>
    );
  }

}
function dispatchToProps(dispatch) {
  return {
    addtocart: (productsInfo, amount) => dispatch(addtocart(productsInfo, amount)),
  };
}
export default connect(null, dispatchToProps)(Feature)