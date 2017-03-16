# Maestro

Maestro is a single page platform for distributing curated learning resources. It solves a problem many learners face: finding the right links, tools, and resources that actually teach you the most important parts of the skill you want to learn.

Maestro collates resources into "trails" with sensibly ordered sections.

[Working demo](https://learn-with-maestro.herokuapp.com)

### Setup

To run your own instance of Maestro, feel free to deploy on Heroku, or any container of your choice that can run a webpack production server, and configure your server to point to `index.html`. Also, change the hardcoded Axios URL in the `/adapters/` js files to the root URL of your API.

On the Rails API, [maestro-api](https://github.com/clintonn/maestro-api), install all dependencies. Register for your own [Cloudinary](http://cloudinary.com) API key and export those to your production environment, as `JWT_SECRET_KEY`, `CLOUDINARY_CLIENT`, and `CLOUDINARY_SECRET`.

### Roadmap

Here's a list of planned features:

- Slugify URLs with trail IDs
- Implement [Action Mailer](http://api.rubyonrails.org/v4.2.7.1/classes/ActionMailer/DeliveryMethods/ClassMethods.html#method-i-add_delivery_method) for registration confirmation
- Add dropzone or implement some other file upload package for avatars and other user uploadables. E.g. [Busboy](https://github.com/mscdex/busboy) or [Multer](https://www.npmjs.com/package/multer)
- Fix some follow trail bugs that cropped up in production builds
