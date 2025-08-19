import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
        }

        const token = authHeader.split(' ')[1];
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        // For admin, you might want to use a different approach
        // This assumes your admin login creates a proper JWT
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: error.message });
    }
}

export default authAdmin;