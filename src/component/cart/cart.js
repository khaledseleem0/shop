import { connect } from "react-redux";
import React, { Component } from "react";
import Card from "./card.js";
import { GraidContainer, Pay, Total, TotalNumber, Empty } from "./../products/productsStyle";
import { reset, removefromcart } from "./../../store/actions";
import data from "./../../data.json";
class Cart extends Component {
  state = {
    product: [],
    empty: true
  };
  componentDidMount() {
    const getdata = () => {
      return Promise.resolve(data)
    };
    getdata().then((respond) => {
      let data = respond[0].products;
      this.setState({
        product: data,
      });
    })
  };
  sendOrder = () => {
    this.props.reset();
    alert("thanks, you will located to pay page in couple of secodes")
  }

  render() {
    return (
      <div className="container-section">
        <GraidContainer>
          {this.props.item.length === 0 ?
            <Empty>  cart is empty now :D </Empty> :
            this.props.item.map((item, index) => (<Card item={item} index={index} key={index} />))}
        </GraidContainer>
        <Total>total : <TotalNumber>{this.props.total}</TotalNumber></Total>
        <Pay onClick={this.sendOrder}> pay now </Pay>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      item: state.cart,
      total: state.cart.reduce(
        (total, item) => parseInt(total) + parseInt(item.amount) * parseInt(item.product.price), 0
      )
    }
}
function mapDispatchToProps(dispatch) {
  return {
    reset: () => dispatch(reset()),
    removefromcart: (index) => dispatch(removefromcart(index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
