import { rest } from "msw";

const baseURL = "https://project-community-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "User04",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image:
          "https://res.cloudinary.com/aemacbeath/image/upload/v1/media/images/default_profile_yfzkhx",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
