module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    if (token !== process.env.SECRET_KEY) return res.status(403).json({ message: 'Invalid Token' });

    next();
};
