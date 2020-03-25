const db = require('../models/index')

module.exports = function (app) {
    // ===========================================
    // Create "user" in array
    // ===========================================
    app.post('/api/user', async (req, res) => {
        // Save User to Database
        const request = await db.Users.create({
            email: req.body.email,
            name: req.body.name,
            city: req.body.city,
            status: req.body.status,
        })
        // Send the request back to the front end
        res.send(request)
    })

    // ========================================================
    // Get all users from local database - Working
    // ========================================================
    app.get('/api/users', async (req, res) => {
        const request = await db.Users.find({})
        // Send the request back to the front end
        // res.send(request)
        res.send({ "Get All": request })
    })

    // =========================================================
    // Get single "user" from local database - Working
    // =========================================================
    app.get('/api/user/:id', async (req, res) => {
        const request = await db.Users.findOne({ _id: req.params.id })
        // Send the request back to the front end
        // res.json(request)
        res.send({ "Get Single": request })

    })

    // ==========================================================
    // Update "user" status
    // ==========================================================
    app.put('/api/user/:id', async (req, res) => {
        // Create an empty workout object ready for exercises to get put into it
        const request = await db.Users.findOneAndUpdate({ _id: req.params.id },
            {
                email: req.body.email,
                name: req.body.name,
                city: req.body.city,
                status: req.body.status,
            })
        // Send the request back to the front end
        res.send({ "Updated": request })
    })

}