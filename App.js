import React from "react";
import ReactDOM from "react-dom/client"


/*
AppComponent 
Header -> Logo & links
Body -> 
Search
Restarent cards - Restarnt card
Footer ->  copy right and link
*/ 

const HeaderComponent = () => {
   return (<div className='header'>
        <div className="logo-container">
            <img src='https://play-lh.googleusercontent.com/ebAZ9dy07ZQ5-ahLTQtEPpvWJ5L1hwZGQo7S1qCJNNzXQ9esyqAJIoFbUQcgRgfzTA=w240-h480-rw' id='logo'/>
        </div>
       <div className="nav-items">
        <ul>
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact US</li>
        <li className="nav-item">Cart</li>
        </ul>
       </div>
    </div>);
}

const BodyComponent = () => {
    return (
        <div className="body">
            <div>Search</div>
            <div>
                <RestarentComponent/>
            </div>

        </div>
    )
}

const restaurants = [
    {
      "resname": "Bavarchi",
      "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/d5c04608-d1d8-4e7c-8078-2322baa6d056_11107.jpg",
      "cusine": "Indian",
      "rating": "4.4"
    },
    {
      "resname": "The Italian Kitchen",
      "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvk2jlbijyejf09fdqkp",
      "cusine": "Italian",
      "rating": "4.7"
    },
    {
      "resname": "Sushi World",
      "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/50b1f1d4-779a-4bfb-a5ce-134dfcfe34df_609738.jpg",
      "cusine": "Japanese",
      "rating": "4.5"
    },
    {
      "resname": "Grill Nation",
      "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/50b1f1d4-779a-4bfb-a5ce-134dfcfe34df_609738.jpg",
      "cusine": "Barbecue",
      "rating": "4.6"
    },
    {
      "resname": "La Patisserie",
      "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/40ed4e623beb92fffadeb4f4b1520673",
      "cusine": "French",
      "rating": "4.8"
    },
    {
      "resname": "Taco Bell",
      "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/8cd23383-b47d-432b-a601-abe63351de6d_646713.JPG",
      "cusine": "Mexican",
      "rating": "4.2"
    },
    {
      "resname": "Café Mocha",
      "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/cc922bb5-3bf3-48fb-b829-9693eea0a9e5_903840.jpg",
      "cusine": "Coffee & Snacks",
      "rating": "4.3"
    },
    {
        "resname": "Bavarchi",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/d5c04608-d1d8-4e7c-8078-2322baa6d056_11107.jpg",
        "cusine": "Indian",
        "rating": "4.4"
      },
      {
        "resname": "The Italian Kitchen",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvk2jlbijyejf09fdqkp",
        "cusine": "Italian",
        "rating": "4.7"
      },
      {
        "resname": "Sushi World",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/50b1f1d4-779a-4bfb-a5ce-134dfcfe34df_609738.jpg",
        "cusine": "Japanese",
        "rating": "4.5"
      },
      {
        "resname": "Grill Nation",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/50b1f1d4-779a-4bfb-a5ce-134dfcfe34df_609738.jpg",
        "cusine": "Barbecue",
        "rating": "4.6"
      },
      {
        "resname": "La Patisserie",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/40ed4e623beb92fffadeb4f4b1520673",
        "cusine": "French",
        "rating": "4.8"
      },
      {
        "resname": "Taco Bell",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/8cd23383-b47d-432b-a601-abe63351de6d_646713.JPG",
        "cusine": "Mexican",
        "rating": "4.2"
      },
      {
        "resname": "Café Mocha",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/cc922bb5-3bf3-48fb-b829-9693eea0a9e5_903840.jpg",
        "cusine": "Coffee & Snacks",
        "rating": "4.3"
      },
      {
        "resname": "Bavarchi",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/d5c04608-d1d8-4e7c-8078-2322baa6d056_11107.jpg",
        "cusine": "Indian",
        "rating": "4.4"
      },
      {
        "resname": "The Italian Kitchen",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvk2jlbijyejf09fdqkp",
        "cusine": "Italian",
        "rating": "4.7"
      },
      {
        "resname": "Sushi World",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/50b1f1d4-779a-4bfb-a5ce-134dfcfe34df_609738.jpg",
        "cusine": "Japanese",
        "rating": "4.5"
      },
      {
        "resname": "Grill Nation",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/50b1f1d4-779a-4bfb-a5ce-134dfcfe34df_609738.jpg",
        "cusine": "Barbecue",
        "rating": "4.6"
      },
      {
        "resname": "La Patisserie",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/40ed4e623beb92fffadeb4f4b1520673",
        "cusine": "French",
        "rating": "4.8"
      },
      {
        "resname": "Taco Bell",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/8cd23383-b47d-432b-a601-abe63351de6d_646713.JPG",
        "cusine": "Mexican",
        "rating": "4.2"
      },
      {
        "resname": "Café Mocha",
        "imgsrc": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/cc922bb5-3bf3-48fb-b829-9693eea0a9e5_903840.jpg",
        "cusine": "Coffee & Snacks",
        "rating": "4.3"
      }

  ];


const RestarentComponent = () => {
  return (
    <div className="ResCard-Container">
      {restaurants.map((res, index) => (
        <RestarentCardComponent key ={index} restarunts={res} />
      ))}
    </div>
  );
};

const RestarentCardComponent = (props) => {
  // console.log(props)
debugger
   const {  cusine, imgsrc, resname, rating  } = props.restarunts;
   console.log(props)
    return(
        <div className="res-card">
            <img src={imgsrc} className="res-img"></img>
            <div>{resname}</div>
            <div>{cusine}</div>
            <div>{rating}</div>
        </div>
    )
}

const AppLayout = () => {
   return <div className='app'>
        <HeaderComponent/>
        <BodyComponent/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
