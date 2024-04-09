const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const headers = req.headers;
    let html = '<h1>Request Headers</h1>';
    html += '<ul>';
    for (const [key, value] of Object.entries(headers)) {
        html += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    html += '</ul>';
    res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
