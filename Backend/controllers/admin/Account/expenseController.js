const expense = require('../../../models/admin/Account/expense');

exports.createExpense = async(req,res)=>{
    try{
        const dataExpense = await expense.create(req.params);
        res.status(201).json({
            success:true,
            message: "Expense data create successfully",
            data:dataExpense

        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
};

exports.getAllExpense = async(req,res)=>{
    try{
    const getExpenseData = await expense.find();
    res.status(201).json({
       success:true,
       data:getExpenseData
    });
    }catch(error){
        res.staus(500).json({
        success:false,
        message: error.message
    });
    }
    
};

exports.getExpenseById = async(req,res)=>{
 try{
    const getExpenseIdData = await expense.findById(req.params.id);
    
    if(!expense){
        return res.status(404).json({
            success:false,
           message:"Expense not found"
        });
    }
     res.status(200).json({
       
        success:true,
        message:"Expense Found Successfully",
        data:getExpenseIdData

     });

 }catch(error){
    res.json({
        success:false,
        message:error.message
    });
 }
};

exports.updateExpenseById = async(req,res)=>{
    const updateExpenseData = await expense.findByIdAndUpdate(req.params.id);

    if(!expense){
        res.status.json()
    }
}


