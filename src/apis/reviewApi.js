import axios from 'axios';

axios.get(`https://mybusiness.googleapis.com`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })


    //   AIzaSyBwqG2FqIsKwiF8mLT4aqHJM1LVdZoajYE

    //   care-and-cure-310408