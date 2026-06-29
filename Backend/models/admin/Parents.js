const mongoose = require('mongoose');
const parentSchema = new mongoose.Schema(
    {
        parentId: {
            type: String,
            required:true,
            unique:true,
        },
        name: {
            type: String,
            required:true,
        },
        email: {
            type: String,
            unique:true,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('Parent', parentSchema);