import mongoose from 'mongoose'

class Database {
    constructor() { 
        this.mongo()
    }

    mongo() {
        mongoose.connect('mongodb://mongo:vXNVgqiKvkyizqxoXePAOxvJgisSEJPx@autorack.proxy.rlwy.net:47929').then(() => {
            console.log('Connected to MongoDB')
        }).catch((err) => {
            console.log('Error: ' + err)
        })
    }

}

export default new Database()