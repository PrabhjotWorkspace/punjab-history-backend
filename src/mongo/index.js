import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const dbConnect = () => {
  mongoose.connection.once("open", () =>
    console.log("DB connection .. ", process.env.NODE_ENV)
  );
  return mongoose.connect(
    process.env.NODE_ENV == "dev"
      ? process.env.DB_LINK
      : `mongodb+srv://${process.env.DB_LINK}?retryWrites=true&w=majority`,
    {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      // poolSize: 60,
    }
  );
};
