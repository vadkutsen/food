import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer wTzqkOGePQJMhnsCh80PzjFqJxUIvCz5Sg17R1EMYOjnZZlDO7Avrwn-XxkcCEAo8FFNP3DKpYcNijyo5ONcdl7jyTqGtQTpl2DiwG8UYBoj2EbaY6scBYtEgpRMXXYx'
    }
});