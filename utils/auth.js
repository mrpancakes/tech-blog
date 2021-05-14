const auth = (req, res, next) => {
    if(!req.session.user_id){
        res.json({ message: 'You are not the author' });
    } else {
        next();
    }
}

module.exports = auth;