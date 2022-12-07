
import Red from '../images/color_red.svg';
import Black from '../images/color_black.svg';
import Blue from '../images/color_blue.svg';
import Yellow from '../images/color_yellow.svg';

const dictionary = {
  'red': Red,
  'black': Black,
  'blue': Blue,
  'yellow': Yellow
}

export const getRemainingColors = (colors) => {
  const allColors = Object.keys(dictionary);

  let diff = allColors
    .filter(color => !colors.includes(color))
    .concat(colors.filter(x => !allColors.includes(x)));

  return diff;
}

export const addCart = (session, setSession, car, colorId) => {
  let index = -1;
  let onCart = 0;

  session.cart.forEach((item) => {
    if (item.car.name === car.name) {
      onCart += item.quant;
    }
  });

  if (onCart === car.stock) {
    return;
  }

  session.cart.forEach((item, id) => {
    if (item.car.name === car.name && item.colorId === colorId) {
      index = id;
      return true;
    }
  });

  let newList = [...session.cart];

  if (index !== -1) {
    newList[index].quant += 1;
  }
  else {
    newList.push({
      car: car,
      colorId: colorId,
      quant: 1
    });
  }

  setSession({...session, cart: newList});
}

export const changeCart = (session, setSession, index, newColor, newQuant) => {
  let newList = [...session.cart];
  let onCart = 0;
  let changed = false;

  session.cart.forEach((item, id) => {
    if (id !== index && item.car.name === newList[index].car.name) {
      onCart += item.quant;
    }
  });

  if (onCart + newQuant <= newList[index].car.stock) {
    newList[index].quant = newQuant;
    changed = true;
  }

  if (newList[index].colorId !== newColor) {
    newList[index].colorId = newColor;
    changed = true;
  }

  if (changed) {
    setSession({...session, cart: newList});
  }
}

export const fixCart = (session, setSession) => {
  let list = [...session.cart];
  let changed = false;
  let i = 0, j = 1;

  while (i < list.length-1) {
    while (j < list.length) {
      //console.log(i, j, list[i], list[j]);
      if (list[i].car.name === list[j].car.name && list[i].colorId === list[j].colorId) {
        list[i].quant += list[j].quant;

        list.splice(j, 1);
        changed = true;
      }
      else {
        j++;
      }
    }
    i++;
    j = i+1;
  }


  if (changed) {
    setSession({...session, cart: list});
  }
}

export const deleteCart = (session, setSession, index) => {
  let newList = [...session.cart];

  newList.splice(index, 1);

  setSession({...session, cart: newList});
}

export const findCarId = (car, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === car.name) {
      return i;
    }
  }

  return null;
}

export const eraseCart = (session, setSession, data, setData, editProduct) => {
  let cars = [...session.cart];
  let newData = [...data];
  let id;

  cars.forEach((item) => {
    id = findCarId(item.car, data);

    newData[id].stock -= item.quant;
    editProduct(newData[id]._id, newData[id]);
  });

  setSession({...session, cart: []});
  setData(newData);
}

export const convertPrice = (price) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency', 
    currency: 'USD' 
  });

  return formatter.format(price);
}

export const colorDictionary = (name) => {
  return dictionary[name];
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePhone = (phone) => {
  return String(phone)
    .match(
      /^[0-9]{5}[-][0-9]{4}$/im
    );
};

export const validatePass = (pass) => {
  return pass.length >= 8;
}

export const validatePassCross = (pass1, pass2) => {
  return pass1 === pass2;
}

export const validateDate = (day, month, year, months) => {
  let date = new Date(`${year}-${month}-${day}`);
  return date.getDate() === day && months[date.getMonth()] === month && date.getFullYear() === year;
}
