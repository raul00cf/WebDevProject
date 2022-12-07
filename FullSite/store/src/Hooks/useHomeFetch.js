import { useState, useEffect, useContext } from "react";

import API from '../API';

import { fixCart } from "../Helpers/functions";

import { Context } from '../context';


const emptyItem = {
  name: '',
  type: 'sport',
  image: "image/no_image.jpg",
  price: 0,
  rating: 0,
  stock: 0,
  colors: [
    'black',
    'blue',
    'red',
    'yellow'
  ],
  audio: "audio/horn1.mp3"
};

export const useHomeFetch = () => {

  const [session, setSession] = useContext(Context);

  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('sport');
  const [sort, setSort] = useState('popular');
  const [filtered, setFiltered] = useState(data);
  const [option, setOption] = useState("account");
  const [showing, setShowing] = useState("home");
  const [IP, setIP] = useState('localhost');

  const functions = {
    getIp: async () => {
      try {
        const res = await API.getIp();
  
        setIP(res.ip);
      } catch (error) {
        
      }
    },

    fetchProducts: async () => {
      try {
        const products = await API.fetchProducts();
  
        setData(products);
      } catch (error) {
        
      }
    },

    addProduct: async () => {
      try {
        const res = await API.addProducts(emptyItem);

        let list = [...data];

        list.push({...emptyItem, _id: res._id, colors: [...emptyItem.colors]});

        setData(list);
      } catch (error) {
        
      }
    },

    editProduct: async (_id, product) => {
      try {
        await API.editProduct(_id, product);
      } catch (error) {
        
      }
    },

    deleteProduct: async (_id, index) => {
      try {
        await API.deleteProduct(_id);

        let list = [...data];

        list.splice(index, 1);

        setData(list);
      } catch (error) {
        
      }
    },

    sendImage: async (file) => {
      try {
        const res = await API.sendImage(file);

        return res.filePath;
      } catch (error) {
        
      }
    },

    sendAudio: async (file) => {
      try {
        const res = await API.sendAudio(file);

        return res.filePath;
      } catch (error) {
        
      }
    },

    fetchUsers: async () => {
      try {
        const users = await API.fetchUsers();
  
        setUsers(users);
        return users;
      } catch (error) {
        
      }
    },

    fetchUser: async (email, password) => {
      try {
        const res = await API.fetchUser(email, password);

        return res[0];
      } catch (error) {
        
      }
    },

    addUser: async (newUser) => {
      try {
        await API.addUser(newUser);
      } catch (error) {
        
      }
    },

    checkUser: async (email) => {
      try {
        const users = await API.checkUser(email);

        return users;
      } catch (error) {
        
      }
    },

    editUser: async (_id, user) => {
      try {
        await API.editUser(_id, user);
      } catch (error) {
        
      }
    },

    deleteUser: async (_id) => {
      try {
        await API.deleteUser(_id);
      } catch (error) {
        
      }
    },
  }


  useEffect(() => {
    functions.fetchProducts();
    functions.fetchUsers();
    functions.getIp();
  }, []);

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
          return b.rating - a.rating
        }));
    }

    setFiltered(dataFiltered);
  }, [filter, sort, data]);

  useEffect(() => {
    fixCart(session, setSession);
  }, [showing, session, setSession]);


  return { 
    data,
    setData,
    users,
    setUsers,
    filtered,
    filter, 
    setFilter,
    sort,
    setSort,
    option,
    setOption,
    showing,
    setShowing,
    functions,
    IP
  };
};