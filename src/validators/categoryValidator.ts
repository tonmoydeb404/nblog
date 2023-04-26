import { checkSchema } from "express-validator";

const categoryValidator = checkSchema({
  title: {
    notEmpty: {
      errorMessage: "category title is required",
    },
    isString: true,
    escape: true,
    trim: true,
    errorMessage: "Invalid category title",
  },
  description: {
    notEmpty: {
      errorMessage: "category description is required",
    },
    trim: true,
    isString: true,
    errorMessage: "Invalid category description",
  },
});

export default categoryValidator;
