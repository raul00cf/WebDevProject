
const apiFunctions = {
  getIp: async () => {
    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/ip`, {
      method: 'GET'
    })).json();
  },

  fetchProducts: async () => {
    console.log("Pegando Produtos...");

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/products`, {
      method: 'GET'
    })).json();
  },

  addProducts: async (newProduct) => {
    console.log("Adicionando Produto...");

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct),
      mode: "cors"
    })).json();
  },

  editProduct: async (_id, newProduct) => {
    console.log(`Editando Produto ${_id}...`);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/products/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct),
      mode: "cors"
    })).json();
  },

  deleteProduct: async (_id) => {
    console.log(`Deletando Produto ${_id}...`);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/products/${_id}`, {
      method: 'DELETE',
      mode: "cors"
    })).json();
  },

  sendImage: async(file) => {
    console.log(`Enviando imagem ${file.name}`);
    let formData = new FormData();
    formData.append('productImage', file);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/products/image`, {
      method: 'POST',
      mode: "cors",
      body: formData
    })).json();
  },

  sendAudio: async(file) => {
    console.log(`Enviando audio ${file.name}`);
    let formData = new FormData();
    formData.append('productAudio', file);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/products/audio`, {
      method: 'POST',
      mode: "cors",
      body: formData
    })).json();
  },

  fetchUsers: async () => {
    console.log("Pegando Users...");

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/users`, {
      method: 'GET'
    })).json();
  },

  fetchUser: async (email, password) => {
    console.log(`Pegando User ${email}...`);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/users/login`, {
      method: 'GET',
      mode: "cors",
      headers: {
        'Authorization': 'Basic ' + new Buffer.from(email + ":" + password, true).toString('base64')
      }
    })).json();
  },

  addUser: async (newUser) => {
    console.log(`Adicionando User ${newUser.email}...`);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
      mode: "cors"
    })).json();
  },

  checkUser: async (email) => {
    console.log(`Checando User ${email}...`);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/users/check`, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })).json();
  },

  editUser: async (_id, newUser) => {
    console.log(`Editando User ${_id}...`);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/users/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
      mode: "cors"
    })).json();
  },

  deleteUser: async (_id) => {
    console.log(`Deletando User ${_id}...`);

    return await (await fetch(`http://${ process.env.REACT_APP_IP }:5000/users/${_id}`, {
      method: 'DELETE',
      mode: "cors"
    })).json();
  }
};

export default apiFunctions;
