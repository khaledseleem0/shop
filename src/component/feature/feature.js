import React, {useEffect,useState} from "react";
import { Img, Clear, Pop, Card, ImgContainer, ProductName, Price, CardContainer, Navigation } from './featureStyle';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addtocart } from './../../store/actions';
import data from "./../../data.json";
import { GraidContainer} from "./../products/productsStyle";

function Feature(){
  const [item, setItem] = useState([]);
useEffect(()=>{
      const getHeightRate = () => {
       let  productrate =  data[0].products.filter((product) => {
        return product.rate === "5"
      })
      return Promise.resolve(productrate)
    };
    getHeightRate().then((respond) => {
      setItem(respond)
    });
},[]);
  
return(
  <div className="container-section">
  <Pop>
        <h3>features products </h3>
           <span feature="true"></span>
    </Pop>
<GraidContainer>

{item.map((item,i)=>{

      return  <CardContainer>
          <Card  key={i}>
            <ImgContainer>
              <Img src={`${process.env.PUBLIC_URL}/assets/` + item.src} alt="" />
              <Navigation>
                <Link to={"product/" + item.id}>
                <i class="fas fa-info-circle"></i>
                </Link>
              </Navigation>
            </ImgContainer>
            <ProductName>{item.name} </ProductName>
            <Price>{item.price}$ </Price>
            <Clear></Clear>
          </Card>
        </CardContainer>

})}
</GraidContainer> 
  </div>
  )
}
function dispatchToProps(dispatch) {
  return {
    addtocart: (productsInfo, amount) => dispatch(addtocart(productsInfo, amount)),
  };
}
export default connect(null, dispatchToProps)(Feature)