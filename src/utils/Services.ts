import { env } from "process";

const Services:any = () => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${process.env.AUTH_TOKEN}`
    }
  };

  fetch('https://api.rd.services/platform/contacts', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

export default Services