import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import heartred from "../assets/heartred.png";
import heartgrey from "../assets/heartgrey.png";

var products = [
  {
    id: "1",
    title: "Apple iPhone 8 Cep Telefonu",
    price: "10.351,00 TL",
    image:
      "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
    isLiked: false,
  },
  {
    id: "2",
    title: "Apple iPhone 10 Cep Telefonu",
    price: "10.351,00 TL",
    image:
      "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
    isLiked: false,
  },
  {
    id: "3",
    title: "Apple iPhone 11 Cep Telefonu",
    price: "10.351,00 TL",
    image:
      "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
    isLiked: false,
  },
  {
    id: "4",
    title: "Apple iPhone 12 Cep Telefonu",
    price: "10.351,00 TL",
    image:
      "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
    isLiked: false,
  },
];

var data = products;
var isSelectedLikes = false;

const ViewContainer = styled.div`
  display: flex;
  padding: 10px;
  div {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyleProductContainer = styled.div`
justify-content: space-between;
align-items: stretch;
`;

const StyletLikeBtn = styled.button`
    width:  30%;
    float: right;
    background-color: white
`;

const Wrapper = styled.section`
  padding: 4em;
  background: white;
  border: solid 2px #dfe4ea;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
`;

const StyledCountHeader = styled.div`
  float: left;
  display: block;
  width: 10%;
`;

const StyledLikesHeader = styled.div`
  width: 15%;
  padding: 10px;
  margin-left: 150px;
  margin-top: -5px;
  padding-left: 50px;
`;

const StyledLikesButton = styled.button`
  background-color: #dfe4ea;
  width: 50%;
  border: solid 1px #dfe4ea;
  padding: 5px;
  margin-left: 100px;
  margin-top: -60px;
  float: top;
`;

const StyledView = styled.div`
  div {
    flex-direction: row;
  }
`;

const StyleCountImage = styled.img`
  width: 25px;
  height: 30px;
  float: left;
  margin-right: 10px;
`;

const StyledCountTitle = styled.p`
  margin-right: 200px;
  margin-top: 5px;
`;

const StyledHeader = styled.div`
  padding: 10px;
  flex-direction: column;
  margin-bottom: 50px;
`;

const StyledTitle = styled.div`
  margin-top: 20px;
`;

const StyledPrice = styled.div`
  margin-top: 20px;
  background-color: #dfe4ea;
  padding: 1px;
  text-align: center;
`;

const StyledText = styled.p`
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledImageHeart = styled.img`
  width: 90%;
`;

// const READ_PRODUCT = gql`
//   {
//     query
//     products {
//       products {
//         id
//         title
//         price
//         image
//         isLiked
//       }
//     }
//   }
// `;

// const CREATE_PRODUCT = gql`
// {
//     mutation CreateProduct($title: String!,$price: String!){
//         createProduct(title: String!,price: String!)
//     }
// }
// `;

// const GET_PRODUCT = gql`
// {
//     mutation GetProduct($id: String!){
//         getProduct(id: String!)
//     }
// }
// `;

// const UPDATE_PRODUCT = gql`
// {
//     mutation UpdateProduct($id: String!){
//         updateProduct(id: String!)
//     }
// }
// `;

export default function ProductList() {
  //   const { data, loading, error } = useQuery(READ_PRODUCT);
  //   const [createProduct] = useMutation(CREATE_PRODUCT);
  //   const [getProduct] = useMutation(GET_PRODUCT);
  //   const [updateProduct] = useMutation(UPDATE_PRODUCT);
  //const [isLiked, setIsLiked]=useState(false);

  function setProductAsLiked(productId) {
    var product = products.filter((p) => p.id === productId)[0];
    var _isLiked = product.isLiked;
    _isLiked ? (_isLiked = false) : (_isLiked = true);

    products.filter((p) => p.id === productId)[0].isLiked = _isLiked;
    if (_isLiked) {
      document.getElementById("heart" + productId).src = heartred;
    } else {
      document.getElementById("heart" + productId).src = heartgrey;
    }

    if (isSelectedLikes) {
      document.getElementById("product" + product.id).style.display = "none";
    }

    var count = calculateCount(products);

    document.getElementById("likedCount").innerHTML = count + " Ürün";
  }

  function calculateCount(_products) {
    var result = _products.filter((p) => p.isLiked).length;
    return result;
  }

  var fileredItems = products;

  function filterProduct() {
    isSelectedLikes ? (isSelectedLikes = false) : (isSelectedLikes = true);

    if (isSelectedLikes) {
      document.getElementById("btnLikes").style.backgroundColor = "#dfe4ea";

      fileredItems = products.filter((p) => p.isLiked);

      var unLikedProducts = products.filter((p) => p.isLiked === false);
      for (var i = 0; i < unLikedProducts.length; i++) {
        document.getElementById(
          "product" + unLikedProducts[i].id
        ).style.display = "none";
      }
    } else {
      document.getElementById("btnLikes").style.backgroundColor = "#dfe4ea";

      for (var i = 0; i < products.length; i++) {
        document.getElementById("product" + products[i].id).style.display =
          "block";
      }
    }
  }

  return (
    <div>
      <StyledView>
        <StyledHeader>
          <StyledCountHeader>
              <StyleCountImage src={heartred}></StyleCountImage>
              <StyledCountTitle id="likedCount">0 Ürün</StyledCountTitle>
          </StyledCountHeader>
          <StyledLikesHeader>
              <StyledLikesButton id="btnLikes" onClick={() => filterProduct()}>
                Beğendiklerim
              </StyledLikesButton>
          </StyledLikesHeader>
        </StyledHeader>

        <ViewContainer>
          {fileredItems.map((product) => (
            <StyleProductContainer id={"product" + product.id}>
              <Wrapper>
                <StyletLikeBtn onClick={() => setProductAsLiked(product.id)}>
                  <StyledImageHeart
                    id={"heart" + product.id}
                    src={heartgrey}
                  ></StyledImageHeart>
                </StyletLikeBtn>
                <div>
                  <StyledImage src={product.image}></StyledImage>
                </div>
                <div>
                  <StyledTitle>
                    <StyledText>{product.title}</StyledText>
                  </StyledTitle>
                  <StyledPrice>
                    <p>{product.price}</p>
                  </StyledPrice>
                  <StyledTitle>
                    <p>Ücretsiz Kargo</p>
                  </StyledTitle>
                </div>
              </Wrapper>
            </StyleProductContainer>
          ))}
        </ViewContainer>
      </StyledView>
    </div>
  );
}
