import { useState, useEffect, useContext } from "react";

import hatch_audi from '../images/car/hatch audi.png'
import hatch_ford from '../images/car/hatch ford.png'
import hatch_honda from '../images/car/hatch honda.png'
import hatch_hyundai from '../images/car/hatch hyundai.png'
import hatch_mini from '../images/car/hatch mini.png'
import hatch_toyota from '../images/car/hatch toyota.png'
import hatch_volks from '../images/car/hatch volks.png'

import sedan_audi from '../images/car/sedan audi.png'
import sedan_chevro from '../images/car/sedan chevro.png'
import sedan_jeep from '../images/car/sedan jeep.png'
import sedan_nissan from '../images/car/sedan nissan.png'

import sport_ferrari from '../images/car/sport a.png'
import sport_bmw from '../images/car/sport b.png'
import sport_bulgati from '../images/car/sport bulgati.png'
import sport_corvette from '../images/car/sport corvette.png'
import sport_lanbor from '../images/car/sport lanbor.png'

import suv_honda from '../images/car/suv honda.png'
import suv_hyundai from '../images/car/suv hyundai.png'
import suv_nissan from '../images/car/suv nissan.png'
import suv_toyota from '../images/car/suv toyota.png'
import suv_volks from '../images/car/suv volks.png'

import NoImage from '../images/no_image.jpg';


import Horn1 from '../audio/horn1.mp3';



import { fixCart } from "../Helpers/functions";

import { Context } from '../context';

const initialData = [
  {
    id: 0,
    name: 'Hatch Audi',
    type: 'hatch',
    brand: 'audi',
    image: hatch_audi,
    price: 1200,
    popularity: 7.6,
    stock: 22,
    colors: [
      'red',
      'black',
      'blue'
    ],
    audio: Horn1
  },
  {
    id: 1,
    name: 'Hatch Ford',
    type: 'hatch',
    brand: 'ford',
    image: hatch_ford,
    price: 950,
    popularity: 7,
    stock: 4,
    colors: [
      'red',
      'black',
      'blue',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 2,
    name: 'Hatch Honda',
    type: 'hatch',
    brand: 'honda',
    image: hatch_honda,
    price: 550,
    popularity: 4.5,
    stock: 15,
    colors: [
      'red',
      'black'
    ],
    audio: Horn1
  },
  {
    id: 3,
    name: 'Hatch Hyundai',
    type: 'hatch',
    brand: 'hyundai',
    image: hatch_hyundai,
    price: 700,
    popularity: 6,
    stock: 8,
    colors: [
      'red',
      'blue'
    ],
    audio: Horn1
  },
  {
    id: 4,
    name: 'Hatch Mini',
    type: 'hatch',
    brand: 'mini',
    image: hatch_mini,
    price: 1500,
    popularity: 8.5,
    stock: 4,
    colors: [
      'red'
    ],
    audio: Horn1
  },
  {
    id: 5,
    name: 'Hatch Toyota',
    type: 'hatch',
    brand: 'toyota',
    image: hatch_toyota,
    price: 1150,
    popularity: 7.3,
    stock: 8,
    colors: [
      'red',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 6,
    name: 'Hatch Volkswagen',
    type: 'hatch',
    brand: 'volkswagen',
    image: hatch_volks,
    price: 1000,
    popularity: 8.1,
    stock: 12,
    colors: [
      'red',
      'blue',
      'yellow'
    ],
    audio: Horn1
  },

  {
    id: 7,
    name: 'Sedan Audi',
    type: 'sedan',
    brand: 'audi',
    image: sedan_audi,
    price: 3500,
    popularity: 7.8,
    stock: 11,
    colors: [
      'black'
    ],
    audio: Horn1
  },
  {
    id: 8,
    name: 'Sedan Crevrolet',
    type: 'sedan',
    brand: 'chevrolet',
    image: sedan_chevro,
    price: 2250,
    popularity: 9,
    stock: 20,
    colors: [
      'black',
      'blue'
    ],
    audio: Horn1
  },
  {
    id: 9,
    name: 'Sedan Jeep',
    type: 'sedan',
    brand: 'jeep',
    image: sedan_jeep,
    price: 4250,
    popularity: 8.7,
    stock: 1,
    colors: [
      'red',
      'black',
      'blue',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 10,
    name: 'Sedan Nissan',
    type: 'sedan',
    brand: 'nissan',
    image: sedan_nissan,
    price: 2500,
    popularity: 7.4,
    stock: 3,
    colors: [
      'red',
      'black',
      'yellow'
    ],
    audio: Horn1
  },

  {
    id: 11,
    name: 'Sport Ferrari',
    type: 'sport',
    brand: 'ferrari',
    image: sport_ferrari,
    price: 5600,
    popularity: 8,
    stock: 3,
    colors: [
      'red',
      'blue',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 12,
    name: 'Sport BMW',
    type: 'sport',
    brand: 'bmw',
    image: sport_bmw,
    price: 5250,
    popularity: 7.9,
    stock: 8,
    colors: [
      'red',
      'black',
      'blue'
    ],
    audio: Horn1
  },
  {
    id: 13,
    name: 'Sport Bulgatti',
    type: 'sport',
    brand: 'bulgatti',
    image: sport_bulgati,
    price: 9740,
    popularity: 9.9,
    stock: 2,
    colors: [
      'blue'
    ],
    audio: Horn1
  },
  {
    id: 14,
    name: 'Sport Covertte',
    type: 'sport',
    brand: 'corvette',
    image: sport_corvette,
    price: 8600,
    popularity: 8.8,
    stock: 3,
    colors: [
      'blue',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 15,
    name: 'Sport Lamborghini',
    type: 'sport',
    brand: 'lamborghini',
    image: sport_lanbor,
    price: 9000,
    popularity: 7.5,
    stock: 1,
    colors: [
      'red',
      'blue'
    ],
    audio: Horn1
  },

  {
    id: 16,
    name: 'SUV Honda',
    type: 'suv',
    brand: 'honda',
    image: suv_honda,
    price: 4000,
    popularity: 8.9,
    stock: 7,
    colors: [
      'red',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 17,
    name: 'SUV Hyundai',
    type: 'suv',
    brand: 'hyundai',
    image: suv_hyundai,
    price: 3750,
    popularity: 8.8,
    stock: 6,
    colors: [
      'black',
      'blue',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 18,
    name: 'SUV Nissan',
    type: 'suv',
    brand: 'nissan',
    image: suv_nissan,
    price: 3000,
    popularity: 9,
    stock: 2,
    colors: [
      'red',
      'black',
      'blue',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 19,
    name: 'SUV Toyota',
    type: 'suv',
    brand: 'toyota',
    image: suv_toyota,
    price: 3500,
    popularity: 7.7,
    stock: 12,
    colors: [
      'red',
      'yellow'
    ],
    audio: Horn1
  },
  {
    id: 20,
    name: 'SUV Volkswagen',
    type: 'suv',
    brand: 'volkswagen',
    image: suv_volks,
    price: 2950,
    popularity: 9,
    stock: 15,
    colors: [
      'red',
      'blue',
      'black'
    ],
    audio: Horn1
  }
]

export const useHome = () => {

  const [session, setSession] = useContext(Context);

  const [data, setData] = useState(initialData);
  const [numItems, setNumItems] = useState(data.length);
  const [filter, setFilter] = useState('sport');
  const [sort, setSort] = useState('popular');
  const [filtered, setFiltered] = useState(data);
  const [option, setOption] = useState("account");
  const [showing, setShowing] = useState("home");

  const emptyItem = {
    id: 0,
    name: '',
    type: 'sport',
    brand: '',
    image: NoImage,
    price: 0,
    popularity: 0,
    stock: 0,
    colors: [
      'black',
      'blue',
      'red',
      'yellow'
    ],
    audio: Horn1
  }

  useEffect(() => {
    let dataFiltered;
    
    dataFiltered = (data.filter((item) => {
      return item.type === filter && item.stock > 0
    }));

    switch (sort) {
      case 'low price':
        dataFiltered = (dataFiltered.sort((a, b) => {
          return a.price - b.price
        }));
        break;
      case 'high price':
        dataFiltered = (dataFiltered.sort((a, b) => {
          return b.price - a.price
        }));
        break;
      default:
        dataFiltered = (dataFiltered.sort((a, b) => {
          return b.popularity - a.popularity
        }));
    }

    setFiltered(dataFiltered);
  }, [filter, sort, data]);

  useEffect(() => {
    fixCart(session, setSession);
  }, [showing, session, setSession]);


  return { 
    data,
    numItems,
    setNumItems,
    setData,
    filtered,
    filter, 
    setFilter,
    sort,
    setSort,
    option,
    setOption,
    showing,
    setShowing,
    emptyItem
  };
};