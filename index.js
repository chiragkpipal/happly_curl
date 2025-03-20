const express = require('express');
const axios = require('axios');

const app = express();

app.get('/sharecouple', async(req, res) => {
    const userId = req.query.uid;
    const url = `http://happly.co.za/toolbox/sharecouple.php?uid=${userId}`;

    try {
        const response = await axios.get(url);
        res.setHeader('Content-Type', 'application/json');
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching data' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});