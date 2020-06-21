import passport from 'passport';
import PassportHttp from 'passport-http-bearer';
import jwt from 'jsonwebtoken';

const BearerStrategy = PassportHttp.Strategy;

passport.use(new BearerStrategy(
  async (token, done) => {
    try {
      const decoded = await jwt.verify(token, process.env.JWT_KEY);
      return done(null, decoded)
    } catch (err) {
      return done({ message: err }, null);
    }
  }
));

export default passport
