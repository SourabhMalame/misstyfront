import React from 'react'
import "./Home.css"
import Slider from '../../components/slider/Slider'
import TrendingProduct from '../../components/trendingProduct/TrendingProduct'
import TagSlider from '../../components/tagSlider.jsx/TagSlider'
import ProductList from "../../components/productList/ProductList"
const Home = () => {
    return (
        <>
            <Slider />
            {/* <TrendingProduct /> */}
            <TagSlider />
            <ProductList />
        </>
    )
}

export default Home