import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { da } from "../Constants";
import FoodCarousel from "./foodCarousel";
import loogo from "../loogo.png";
import logo4 from "../logo4.gif";
import FoodCarousel from "./foodCarousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "./Carousal";

function fliterData(restaurant, searchText) {
  const filterData = restaurant.filter((restaurants) =>
    restaurants?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState("");
  const [cart, setCart] = useState(15);
  const [carouselData, setCarouselData] = useState([]);
  let rest = [];
  const [noOfRestaurant, setNoOfRestaurant] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      callApiHandler2()
        .then((response) => {
          setCarouselData(da?.data?.cards[0]?.data?.data?.cards);

          rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
          setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);

          setAllRestaurant(rest);
          setRestaurant(rest);
          // handle the response here
        })
        .catch((error) => {
          setCarouselData(da?.data?.cards[0]?.data?.data?.cards);

          rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
          setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);

          setAllRestaurant(rest);
          setRestaurant(rest);
          console.error(error);
          // handle the error here

          setCarouselData(da?.data?.cards[0]?.data?.data?.cards);

          rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
          setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);

          setAllRestaurant(rest);
          setRestaurant(rest);
        });
    } catch (error) {
      // handle the error here

      setCarouselData(da?.data?.cards[0]?.data?.data?.cards);

      rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
      setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);

      setAllRestaurant(rest);
      setRestaurant(rest);
    }
  }, []);
  // function callApiHandler() {
  //   console.log("feetching");
  //   setLoading(true);
  //   fetch(
  //     `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${searchValue}`
  //   ).then((response) => response.json()).then((da) => {
  //     console.log(da);
  //   });
  //   // setCarouselData(da?.hits?.map((x) => x.recipe));
  //   setLoading(false);

  //   // console.log(da?.hits?.map((x) => x.recipe));
  // }

  // {console.log(carouselData)}

  // setRestaurant((prev) => [...prev, ...rest]);
  // setAllRestaurant((prev) => [...prev, ...rest]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setCart((prev) => prev + 16);
      }
    } catch (error) {}
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleCookForMeClick = () => {
    setShowSearchBar(true);
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Perform search or other action with the search value
    console.log(searchValue);
  };
  return (
    <>
      <>
        {carouselData?.length === 0 ? (
          <Shimmer />
        ) : (
          <div>
            <div className="flex items-center justify-center h-96" 
            style={{
              backgroundImage:"",
            }}>
              {showSearchBar ? (
                <>
                  {/* <div className="flex w-44"> */}
                  {/* <img className="w-36" src={loogo} alt="img" /><img src={logo4} alt="loading" className="w-32" /> */}
                  {/* </div> */}
                  <img className="w-36" src={loogo} alt="img" />
                  {/* <img src={logo4} alt="loading" className="w-32" /> */}

                  {loading ? (
                    <img src={logo4} alt="loading" className="w-32" />
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <input
                        type="text"
                        value={searchValue}
                        onChange={handleSearchInputChange}
                        className="bg-white text-black h-10 px-4 mr-2 border border-red-400 rounded-md focus:outline-none w-72"
                        placeholder="Enter ingredients..."
                      />
                      <Link to={"/food?v=" + searchValue}>
                        <button
                          // onClick={() => {
                          //   callApiHandler();
                          // }}
                          type="submit"
                          className="bg-blue-500 text-white h-10 px-4 rounded-sm"
                        >
                          Search
                        </button>
                      </Link>
                    </form>
                  )}

                  {/* <FoodCarousel  data={"he"}/> */}
                </>
              ) : (
                <>
                  <img className="w-36" src={loogo} alt="img" />
                  <button
                    className="bg-black text-white h-20 w-80"
                    onClick={handleCookForMeClick}
                  >
                    Cook For Me
                  </button>
                </>
              )}
            </div>
            <div className="bg-black">
              <Carousel data={carouselData} />
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Body;
