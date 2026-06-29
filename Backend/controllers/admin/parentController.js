const parent = require('../../models/admin/Parents');
const getParents = async(req,res)=>{
    try{
        const parents = await parent.find();
        res.status(200).json(parents);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }

}

const createParent = async(req,res)=>{
    try{
        const parentData = await parent.create(req.body);
        res.status(201).json(parentData);
    } catch (error){
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    getParents,
    createParent
};

