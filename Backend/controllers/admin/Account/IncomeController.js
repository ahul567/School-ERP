const income = require("../../../models/admin/Account/income");

exports.createIncome = async(req,res) => {
    try{
        const incomeData = await income.create(req.body);

        res.status(201).json({
            success:true,
            message:"Income data created successfully",
            data:incomeData
        });
    }catch(error){
        res.status(500).json({
            success:false,
            messgae:error.message
        });
    }
};


exports.getAllIncome = async(req,res)=>{
    try{
      const getIncomeData = await income.find();
       
       res.status(201).json({
          success:true,
          data:getIncomeData
       });
    }catch(error){
        res.status(500).json({
        success:false,
        message:error.message
    });
}
};

exports.getIncomeById = async(req,res)=>{
    try{
        const getIncomeDataById = await income.findById(req.params.id);
        if(!income){
          return res.status(404).json({
                success:false,
                message:"Income data not found"
            });
            }
            res.status(200).json({
              success:true,
              message:"Income data successfully found",
              data:getIncomeDataById
             });
    }catch(error){
         res.status(500).json({
          success:false,
          message:error.message
         });
    }
};

exports.updateIncomeById = async(req,res) => {
    try{
        const updateIncomeData = await income.findByIdAndUpdate(
            req.params.id,
            req.body,
              {
                    new:true,
                    runValidators: true
                }
        );
       if(!updateIncomeData){
       return res.status(404).json({
            success:false,
            message:"income not found"
        });
       }
        res.status(200).json({
            success:true,
            message:"income update successfully",
            data: updateIncomeData
        }) 
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
};

exports.deleteIncomeById = async(req,res)=>{

    try{
        const deleteIncomeData = await income.findByIdAndDelete(req.params.id);

        if(!deleteIncomeData){
           return res.status(404).json({
               success:false,
               message:"income not found",
            });

        }
      res.status(200).json({
        success:true,
        message:"Income deleted successfully",
       
      })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
};