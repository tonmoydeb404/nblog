import { checkSchema } from "express-validator";

const postValidator = checkSchema({
  title: {
    notEmpty: {
      errorMessage: "post title is required",
    },
    isString: true,
    escape: true,
    trim: true,
    errorMessage: "Invalid post title",
  },
  description: {
    notEmpty: {
      errorMessage: "post description is required",
    },
    trim: true,
    isString: true,
    errorMessage: "Invalid post description",
  },
  content: {
    notEmpty: {
      errorMessage: "post content is required",
    },
    isLength: {
      options: {
        min: 10,
      },
      errorMessage: "minimum 10 character is required",
    },
    isString: true,
    errorMessage: "Invalid post content",
  },
});

export default postValidator;
