
export const register = async (req, res, next) => {

    const newUser = await User.create(req.body);
    res.status(400).json({
        status: "success",
        data: {
            user: newUser
        }
    })
}