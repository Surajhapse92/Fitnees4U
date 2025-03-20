import Member from "../models/Member.js";

const postMember = async (req, res) => {
    const { uname, age, email, number, months, totalAmount, mode, status, reason, user } = req.body;

    const member = new Member({
        uname,
        age,
        email,
        number,
        months,
        totalAmount,
        mode,
        status,
        reason,
        user
    })


    try {
        const savedMember = await member.save();

        res.json({
            success: true,
            message: `Form Submitted Successfully! Trainer will Response you as soon as Possible`,
            data: savedMember
        });
    }
    catch (e) {
        res.json({
            success: false,
            // message: "Sorry,This Email is already exists",
            message: e.message,
            data: null
        })
    }
}


const getMember = async (req, res) => {
    try {
        const { memberName } = req.query;

        const query = memberName ? { uname: { $regex: new RegExp(memberName, 'i') } } : {};

        const members = await Member.find(query).sort({ createdAt: -1 });

        res.json({
            success: true,
            message: 'Members fetched successfully',
            data: members
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}

const getMemberId = async (req, res) => {
    const { id } = req.params

    const member = await Member.findOne({ user : id})

    res.json({
        success: member ? true : false,
        data: member || null,
        message: member ? "member Fetched Successfully" : "member Not found"
    })
}

const putMember = async (req, res) => {

    const { status, reason } = req.body;

    const { id } = req.params

    await Member.updateOne({ _id: id },
        {
            $set: {
                status: status,
                reason: reason
            }
        })

    const updatedMember = await Member.findById(id)

    res.json({
        success: true,
        message: "Member Updated Successfully",
        data: updatedMember
    })
}


export { postMember, getMember, putMember, getMemberId }