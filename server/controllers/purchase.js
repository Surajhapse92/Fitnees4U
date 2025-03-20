import Purchase from "../models/Purchase.js";

const postPurchase = async (req, res) => {
    const { uname,email, number, address, city, state, pincode,pname,quantity, mode,totalAmount,status,reason, user } = req.body;

    const purchase = new Purchase({      
        uname,
        email,
        number,
        address,
        city,
        state,
        pincode,
        pname,
        quantity,
        mode,
        totalAmount,
        status,
        reason,
        user
    })
   

    try {
        const savedPurchase = await purchase.save();

        res.json({
            success: true,
            message: `Thank  You! Your Order will Delivere Soon`,
            data: savedPurchase
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: "Sorry, Order not Placed",
            data: null
        })
    }
}


const getPurchaseMember = async (req, res) => {
    try {
        const { memberName } = req.query;

        // Query to search purchases based on uname (member name)
        const query = memberName ? { uname: { $regex: new RegExp(memberName, 'i') } } : {};

        // Fetching from Purchase model, sorted by creation time
        const purchases = await Purchase.find(query).sort({ createdAt: -1 });

        res.json({
            success: true,
            message: 'Purchases fetched successfully',
            data: purchases
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const getPurchaseId = async (req, res) => {
    const { id } = req.params

    const purchaseMember = await Purchase.findOne({ user : id})

    res.json({
        success: purchaseMember ? true : false,
        data: purchaseMember || null,
        message: purchaseMember ? "purchaseMember Fetched Successfully" : "purchaseMember Not found"
    })
}


const putPurchase = async (req, res) => {

    const { status, reason } = req.body;

    const { id } = req.params

    await Purchase.updateOne({ _id : id },
        {
            $set: {
                status: status,
                reason: reason
            }
        })

    const updatedPurchase = await Purchase.findById(id)

    res.json({
        success: true,
        message: "Purchase Updated Successfully",
        data: updatedPurchase
    })
}




export { postPurchase, getPurchaseMember,getPurchaseId, putPurchase}