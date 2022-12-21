import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postRequest = async (api, body) => {
  const res = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: AsyncStorage.getItem('token'),
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const postRequestWithToken = async (api, body, token) => {
  const res = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: AsyncStorage.getItem('token'),
      'Cache-Control': 'no-cache',
      'x-access-token': token,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const postRequestWithFormData = async (api, data, token) => {
  const res = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'x-access-token': token,
    },
    body: data,
  });
  // console.log('res ',res)
  return res.json();
};

export const postRequestWithFormDataWIthOutBody = async (api, token) => {
  const res = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'x-access-token': token,
    },
  });
  // console.log('res ',res)
  return res.json();
};

export const getRequestFromFormData = async (api, token) => {
  const res = await fetch(api, {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'x-access-token': token,
    },
    // body: data,
  });
  return await res.json();
};

export const getRequest = async (api, token) => {
  const res = await fetch(api, {
    method: 'GET',
    // headers: {
    //   Authorization: AsyncStorage.getItem('token'),
    // },
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'x-access-token': token,
    },
    // params: param
  });
  return await res.json();
};
//Edit krna ka lia hota hain

export const putRequest = async (api, body) => {
  const res = await fetch(api, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AsyncStorage.getItem('token'),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};

export const deleteRequest = async (api, body) => {
  const res = await fetch(api, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AsyncStorage.getItem('token'),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};

export const getDataByBody = async (api, body) => {
  const res = await axios.request({
    method: 'POST',
    url: api,
    headers: {
      Authorization: AsyncStorage.getItem('token'),
    },
    data: body,
  });
  return await res.data;
};

export const getDataByBodyParams = async (api, body) => {
  const res = await axios.request({
    method: 'GET',
    url: api,
    headers: {
      Authorization: AsyncStorage.getItem('token'),
    },
    params: body,
  });
  return await res.data;
};





export const getRoom = async (api, body) => {
  const res = await axios.request({
    method: 'GET',
    url: api,
    headers: {
      Authorization: AsyncStorage.getItem('token'),
    },
    // params: body,
  });
  return await res.data;
}
