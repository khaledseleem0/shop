import axios from 'axios';
import { addtocart } from './../../store/actions';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { GraidContainer } from './productsStyle'
import { Img, Clear, Pop, Card, ImgContainer, ProductName, Price, CardContainer, Navigation } from './../feature/featureStyle';
import data from "./../../data.json";
class Products extends Component {
  state = {
    products: [],
    amount: 0,
  }
  componentDidMount() {
    const getdata = () => {
      return Promise.resolve(data)
    };
    getdata().then((respond) => {
      let data = respond[0].products;
      this.setState({
        products: data
      });
    })
  }


  render() {
    const productsState = this.state.products;
    const productsRender = productsState.map((card, index) => {
      return (
        <CardContainer key={index}>
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
          <h3> products   </h3>
          <span feature></span>
        </Pop>
        <GraidContainer>
          {productsRender}
        </GraidContainer>
      </div>
    )
  }
}
function dispatchToProps(dispatch) {
  return {
    addtocart: (productsInfo, amount) => dispatch(addtocart(productsInfo, amount)),
  };
}
export default connect(null, dispatchToProps)(Products)