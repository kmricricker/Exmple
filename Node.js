const express = require('express');
const app = express();

app.post('/submit-form', (req, res) => {
    const { rollNo, dob } = req.body;
    // Validate & fetch student data from a database
    res.json({ result: "Student data fetched!" });
});

app.listen(3000, () => console.log('Server running on Render'));
