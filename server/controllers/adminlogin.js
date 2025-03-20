import Admin from "../models/Admin.js";

const postAdminSignup = async (req, res) => {
    const { email, password } = req.body;

    const admin = new Admin({
        email,
        password,
    });

    try {
        const savedAdmin = await admin.save();

        res.json({
            success: true,
            message: `Signup Successfully`,
            data: savedAdmin
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: "Sorry,This Email is already exists",
            data: null
        })
    }

}


const postAdminLogin = async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
        email: email,
        password: password
    });

    if (admin) {
        return res.json({
            success: true,
            message: "Login Successfully",
            data: admin
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid credentials",
            data: null
        })
    }
}

export { postAdminSignup, postAdminLogin}